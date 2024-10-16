import { Buyer, BuyerStatus } from "../models/Buyer";

const listOfBuyers: Buyer[] = [
  {
    id: '123456', 
    name: 'Mr Buyer',
    location: 'EEUU',
    status: BuyerStatus.OPEN,
  },
  {
    id: '654321', 
    name: 'Miss Buyer',
    location: 'Spain',
    status: BuyerStatus.CLOSED,
  }
];

export const getAllBuyers = (): Buyer[] => {
  return listOfBuyers;
};

export const getBuyerById = (id: string = '1'): Buyer | string => {
  console.log(`Searching by id: ${id}`);
  const buyer = listOfBuyers.find(buyer => buyer.id === id);
  return buyer ? buyer : 'Buyer not found';
};
