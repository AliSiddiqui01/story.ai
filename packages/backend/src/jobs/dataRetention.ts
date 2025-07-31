import cron from 'node-cron';
import setupLogging from '../config/logging';
import { User } from '../models/User';
import { shouldDeleteData } from '@ai-storyteller/shared';

const logger = setupLogging('data-retention-job');

/**
 * Deletes user data based on retention policies (e.g., inactive accounts of children).
 */
const deleteInactiveUserData = async () => {
  logger.info('Starting data retention job...');
  try {
    const usersToDelete = await User.find({
      // Example criteria: find users who are subject to COPPA and haven't logged in for 12 months
      lastLogin: { $lt: new Date(Date.now() - 365 * 24 * 60 * 60 * 1000) },
    });

    for (const user of usersToDelete) {
      // Use createdAt instead of birthDate and provide retention days (e.g., 365 days)
      if (shouldDeleteData(user.createdAt, 365)) {
        // Perform deletion or anonymization
        await User.findByIdAndDelete(user._id);
        logger.info(`Deleted data for user ${user._id} due to inactivity.`);
      }
    }

    logger.info('Data retention job finished.');
  } catch (error) {
    logger.error('Error during data retention job:', error);
  }
};

/**
 * Schedules the data retention job to run daily at midnight.
 */
export const startDataRetentionJob = () => {
  // Schedule to run once a day at midnight
  cron.schedule('0 0 * * *', deleteInactiveUserData, {
    scheduled: true,
    timezone: 'UTC',
  });
  logger.info('Data retention job scheduled to run daily at midnight UTC.');
};
