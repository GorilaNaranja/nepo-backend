import { Seller, SellerStatus } from "../models/Seller";

const listOfSellers: Seller[] = [
  {
    id: '123456', 
    name: 'Mr Seller',
    location: 'EEUU',
    status: SellerStatus.CLOSED,
  },
  {
    id: '654321', 
    name: 'Miss Seller',
    location: 'Spain',
    status: SellerStatus.OPEN,
  }
];

export const getAllSerllers = (): Seller[] => {
  return listOfSellers;
};

export const getSellerById = (id: string = '1'): Seller | string => {
  console.log(`Searching by id: ${id}`);
  const seller = listOfSellers.find(seller => seller.id === id);
  return seller ? seller : 'Seller not found';
};
