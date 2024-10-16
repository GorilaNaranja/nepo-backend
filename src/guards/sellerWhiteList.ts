import { Request, Response, NextFunction } from "express";

export const sellersBannedGuard = async ( req: Request, res: Response, next: NextFunction) => {
  
  const bannedSellers = ['000000'];
  const sellerId = req.query.id as string;

  if (bannedSellers.includes(sellerId)) {
    res.json('Seller banned');
  } else {
    next();
  }
};
