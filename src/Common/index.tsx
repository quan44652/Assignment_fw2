export interface IProduct {
  file: any;
  _id?: string;
  sticker?: string;
  name: string;
  priceNew: number;
  priceOld?: number;
  image: string;
  categoryId: string;
  promotionId?: IPromotion[];
}

export interface IPromotion {
  _id: string;
  name: string;
}

export interface ICategory {
  _id: string;
  name: string;
  image: string;
  file?: string;
}
