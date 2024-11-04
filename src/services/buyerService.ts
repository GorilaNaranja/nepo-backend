import { Buyer, BuyerType } from "../models/Buyer";

const listOfBuyers: Buyer[] = [
  {
    id: '123456', 
    name: 'Mr Buyer',
    location: 'EEUU',
    type: BuyerType.BIG_COMPANY,
  },
  {
    id: '654321', 
    name: 'Miss Buyer',
    location: 'Spain',
    type: BuyerType.SMALL_COMPANY,
  },
  {
    id: '0124124', 
    name: 'Felipe',
    location: 'Spain',
    type: BuyerType.SMALL_COMPANY,
  },
  {
    id: '9127491', 
    name: 'Elena',
    location: 'Italy',
    type: BuyerType.SMALL_COMPANY,
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
