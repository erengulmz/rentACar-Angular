export interface PostModelRequest {
  brandId:    number;
  name:       string;
  modelYear:  number;
  imageUrl:   string;
  dailyPrice: number;
  brand:      Brand;
}

export interface Brand {
  id:   number;
  name: string;
}
