import { Request, Response, NextFunction } from "express";
import { getAllBuyers, getBuyerById } from "../services/buyerService";

const getBuyers = (req: Request, res: Response, next: NextFunction) => {
  try {
    const buyersList = getAllBuyers();
    res.json(buyersList); 
  } catch (error) {
    console.log(error);
  }
};

const getBuyer = (req: Request, res: Response, next: NextFunction) => {
  try {
    const buyersList = getBuyerById(req.query.id as string);
    res.json(buyersList);
  } catch (error) {
    console.log(error);
  }
};

export default {getBuyers, getBuyer};
