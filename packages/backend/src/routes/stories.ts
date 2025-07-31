import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';

export const storyRoutes = Router();

// TODO: Implement story routes
storyRoutes.get('/', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Stories list endpoint not implemented yet'
  });
}));

storyRoutes.get('/:id', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Story details endpoint not implemented yet'
  });
}));

storyRoutes.post('/', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Create story endpoint not implemented yet'
  });
}));
