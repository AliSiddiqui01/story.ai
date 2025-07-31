import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';

export const userRoutes = Router();

// TODO: Implement user routes
userRoutes.get('/profile', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'User profile endpoint not implemented yet'
  });
}));

userRoutes.put('/profile', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Update profile endpoint not implemented yet'
  });
}));

userRoutes.get('/progress', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'User progress endpoint not implemented yet'
  });
}));
