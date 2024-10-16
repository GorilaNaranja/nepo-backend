export interface Seller {
  id: string,
  name: string,
  location: string,
  type: SellerType,
}

export enum SellerType {
  BIG_COMPANY = 'BIG_COMPANY',
  SMALL_COMPANY = 'SMALL_COMPANY',
}
