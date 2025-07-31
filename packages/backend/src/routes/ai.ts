import { Router, Request, Response } from 'express';
import { asyncHandler } from '../middleware/errorHandler';

export const aiRoutes = Router();

// TODO: Implement AI story generation routes
aiRoutes.post('/generate-story', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'AI story generation endpoint not implemented yet'
  });
}));

aiRoutes.post('/continue-story', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'AI story continuation endpoint not implemented yet'
  });
}));

aiRoutes.post('/transcribe-voice', asyncHandler(async (req: Request, res: Response) => {
  res.status(501).json({
    success: false,
    error: 'Voice transcription endpoint not implemented yet'
  });
}));
