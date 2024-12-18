const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce to sum all battery counts
const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {
  return accumulator + currentBatch;
}, 0); // Initial value of accumulator is 0

console.log(totalBatteries); // This will output the total number of batteries
