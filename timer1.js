const argu = process.argv.slice(2);
//collect passed in command line arguments
const alarmTimer = () => {
  const numArr = argu.map(Number);
  //convert the strings in array to numbers
  let time = 0;
  //set the time to 0 to += for setTimeout later
  if (numArr.length === 0) {
    // check if the array is empty then pass null
    return null;
  } else {
    for (const num of numArr) {
      if (!Number.isInteger(num) || num < 0) {
        // if array is not number or is nagative number then skip with "continue"
        continue;
      } else {
        //if the input pass all the logic check then will times 1000 to get the ms for then plus equal to the time variable.
        setTimeout(() => {
          process.stdout.write("\x07");
        }, (time += num * 1000));
      }
    }
  }
};

alarmTimer();
