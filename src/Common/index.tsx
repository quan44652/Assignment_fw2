export interface IProduct {
  _id: string;
  sticker: string;
  name: string;
  priceNew: number;
  priceOld: number;
  image: string;
  promotionId: IPromotion[];
}

export interface IPromotion {
  _id: string;
  name: string;
}

export interface ICategory {
  _id: string;
  name: string;
}
