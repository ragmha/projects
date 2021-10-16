/**
 * Returns the total number of bars
 *
 * @param bars - The total number of bars
 * @param quantities - The quantities of bars represented as [bar, packet, box]
 *
 * @example
 * returns 5
 * calculateNumberOfBars(17, [1, 12, 120])
 *
 */
const calculateNumberOfBars = (bars: number, quantities: Array<number>) => {
  const [, packetQuantity, boxQuantity] = quantities;
  return (bars % boxQuantity) % packetQuantity;
};

/**
 * Returns the total number of packets
 *
 * @param bars - The total number of bars
 * @param quantities - The quantities of bars represented as [bar, packet, box]
 *
 * @example
 * returns 1
 * calculateNumberOfPackets(17, [1, 12, 120])
 *
 */
const calculateNumberOfPackets = (bars: number, quantities: Array<number>) => {
  const [, packetQuantity, boxQuantity] = quantities;
  const packets = bars % boxQuantity;
  return Math.floor(packets / packetQuantity);
};

/**
 * Returns the total number of boxes
 *
 * @param bars - The total number of bars
 * @param quantities - The quantities of bars represented as [bar, packet, box]
 *
 * @example
 * returns 1
 * calculateNumberOfBoxes(120, [1, 12, 120])
 *
 */
const calculateNumberOfBoxes = (bars: number, quantities: Array<number>) => {
  const [, , boxQuantity] = quantities;
  return Math.floor(bars / boxQuantity);
};

/**
 * Returns the total cost of bars, packets and boxes
 *
 * @param numOfBars - The total number of bars
 * @param numOfPackets - The total number of packets
 * @param numOfBoxes - The total number of boxes
 * @param pricesOfBarPacketBox - The prices of bars represented as [bar, packet, box]
 *
 * @example
 * // returns 36.5
 * calculateTotalCost(5, 1, 0, [2.30, 25, 230])
 *
 */
const calculateTotalCost = (
  numOfBars: number,
  numOfPackets: number,
  numOfBoxes: number,
  pricesOfBarPacketBox: Array<number>
) => {
  let [priceOfBar, priceOfPacket, priceOfBox] = pricesOfBarPacketBox;

  return (
    numOfBars * priceOfBar +
    numOfPackets * priceOfPacket +
    numOfBoxes * priceOfBox
  );
};

export {
  calculateNumberOfBars,
  calculateNumberOfBoxes,
  calculateNumberOfPackets,
  calculateTotalCost,
};
