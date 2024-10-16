import { Seller, SellerType } from "../models/Seller";

const listOfSellers: Seller[] = [
  {
    id: '123456', 
    name: 'Mr Seller',
    location: 'EEUU',
    type: SellerType.BIG_COMPANY,
  },
  {
    id: '654321', 
    name: 'Miss Seller',
    location: 'Spain',
    type: SellerType.SMALL_COMPANY,
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
