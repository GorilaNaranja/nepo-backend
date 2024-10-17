export interface Buyer {
  id: string,
  name: string,
  location: string,
  type: BuyerType,
}

export enum BuyerType {
  BIG_COMPANY = 'BIG_COMPANY',
  SMALL_COMPANY = 'SMALL_COMPANY',
}