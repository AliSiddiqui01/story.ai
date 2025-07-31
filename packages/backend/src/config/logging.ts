import winston from 'winston';

const { combine, timestamp, json, printf, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp, context }) => {
  return `${timestamp} [${context || 'app'}] ${level}: ${message}`;
});

const setupLogging = (context: string = 'app') => {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      json(),
      logFormat
    ),
    defaultMeta: { context },
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
    exceptionHandlers: [
      new winston.transports.File({ filename: 'exceptions.log' })
    ],
    rejectionHandlers: [
      new winston.transports.File({ filename: 'rejections.log' })
    ]
  });
};

export default setupLogging;
