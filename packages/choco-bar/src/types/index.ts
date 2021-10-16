export interface IBar {
  id: number;
  name: string;
  weight: number;
  company: string;
  price: number;
  quantity: number;
  img: string;
  pricesOfBarPacketBox: Array<number>;
  quantitiesOfBarPacketBox: Array<number>;

}

export interface IResource {
  findMany(): Array<IBar>;
  saveMyMoney(
    numberOfBars: number,
    pricesOfBarPacketBox: Array<number>,
    quantitiesOfBarPacketBox: Array<number>
  ): {
    numberOfBars: number;
    numberOfPacks: number;
    numberOfBoxes: number;
    totalCost: number;
  };
}
