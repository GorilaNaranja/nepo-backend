export interface Buyer {
  id: string,
  name: string,
  location: string,
  status: BuyerStatus,
}

export enum BuyerStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}
