import { Request, Response, NextFunction } from "express";

export const sellerWhiteListGuard = async ( req: Request, res: Response, next: NextFunction) => {
  
  const sellersAllowed = ['123456', '654321', '000000'];
  const sellerId = req.query.id as string;
  if (sellersAllowed.includes(sellerId)) {
    next();
  } else {
    res.json('Seller is not in the whitelist');
  }
};
