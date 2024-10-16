import { Request, Response, NextFunction } from "express";

export const handleErrors = (err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json(err.message);
};
