import express from "express";
import buyerController from '../controllers/buyerController';
import sellerController from "../controllers/sellerController";
import { sellerWhiteListGuard } from "../guards/sellerWhiteList";

const router  = express.Router();

router.get('/buyers', buyerController.getBuyers);
router.get('/buyer', buyerController.getBuyer);

router.get('/sellers', sellerController.getSellers);
router.get('/seller', sellerWhiteListGuard, sellerController.getSeller);

export default router; 
