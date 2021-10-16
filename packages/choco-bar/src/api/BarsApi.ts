import { IResource } from '../types';
import {
  calculateNumberOfBars,
  calculateNumberOfBoxes,
  calculateNumberOfPackets,
  calculateTotalCost,
} from '../utils';

import bars from '../bars.json';

class BarsAPI implements IResource {
  findMany() {
    return bars;
  }
  saveMyMoney(
    numberOfBars: number,
    pricesOfBarPacketBox: Array<number>,
    quantitiesOfBarPacketBox: Array<number>
  ) {
    const noOfBars = calculateNumberOfBars(
      numberOfBars,
      quantitiesOfBarPacketBox
    );
    let noOfPackets = calculateNumberOfPackets(
      numberOfBars,
      quantitiesOfBarPacketBox
    );
    let noOfBoxes = calculateNumberOfBoxes(
      numberOfBars,
      quantitiesOfBarPacketBox
    );

    const totalCost = calculateTotalCost(
      noOfBars,
      noOfPackets,
      noOfBoxes,
      pricesOfBarPacketBox
    );

    return {
      numberOfBars: noOfBars,
      numberOfPacks: noOfPackets,
      numberOfBoxes: noOfBoxes,
      totalCost,
    };
  }
}

export default BarsAPI;
