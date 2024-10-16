import { Request, Response, NextFunction } from "express";
import { getAllSerllers, getSellerById } from "../services/sellerService";

const getSellers = (req: Request, res: Response, next: NextFunction) => {
  try {
    const sellerList = getAllSerllers();
    res.json(sellerList); 
  } catch (error) {
    console.log(error);
  }
};

const getSeller = (req: Request, res: Response, next: NextFunction) => {
  try {
    const sellerList = getSellerById(req.query.id as any);
    res.json(sellerList);
  } catch (error) {
    console.log(error);
  }
};

export default {getSellers, getSeller};
