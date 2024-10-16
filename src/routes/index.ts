import express from "express";
import buyerController from '../controllers/buyerController';
import sellerController from "../controllers/sellerController";

const router  = express.Router(); 

router.get('/buyers', buyerController.getBuyers); 
router.get('/buyer', buyerController.getBuyer); 

router.get('/sellers', sellerController.getSellers); 
router.get('/seller', sellerController.getSeller); 

export default router; 
