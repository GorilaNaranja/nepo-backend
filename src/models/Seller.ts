export interface Seller {
  id: string,
  name: string,
  location: string,
  status: SellerStatus,
}

export enum SellerStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}
