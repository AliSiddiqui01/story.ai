import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';

export const parentRoutes = Router();

// TODO: Implement parent dashboard routes
parentRoutes.get('/dashboard', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Parent dashboard endpoint not implemented yet'
  });
}));

parentRoutes.get('/settings', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Parent settings endpoint not implemented yet'
  });
}));

parentRoutes.put('/settings', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Update parent settings endpoint not implemented yet'
  });
}));
