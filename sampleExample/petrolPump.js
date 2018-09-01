function identifyStartPoint(input1){
  let result = 0;
  for(let i in input1){
  	if(input1[i][0] >= input1[i][1]){
      let start = i;
      let end = (start + 3) % 4;
      let count = 0;
      let petrolOnTruck = input1[start][0];
      let remainingPetrol;
      while(count <=3) {
        remainingPetrol = petrolOnTruck
        - input1[(parseInt(start)+count)%4][1];

        console.log(
          start,
          ' : check--> with petrol: ',
          input1[(parseInt(start)+count)%4][0],
          ' : total petrol: ',
          petrolOnTruck,
          ' for distance: ',
          input1[(parseInt(start)+count)%4][1],
          ' : remaining petrol: ',
          remainingPetrol
        );

        petrolOnTruck = remainingPetrol + input1[(parseInt(start)+count+1)%4][0];
        count +=1;
      }
      if (remainingPetrol >= 0 ) {
        result = result === 0 ? parseInt(start)+1 : result;
      }
    }
  }
  return result;
}

let a = [[133,146],  [29,55],  [0,1],  [18,6]];
console.log('Truck should start from petrol pump', identifyStartPoint(a));

//test data
// [4,6],  [6,5],  [7,3],  [4,5] -2
// [4,6],  [4,5],  [2,3],  [5,5] - 0
// [0,0], [0,0],  [0,0],   [0,0] - 0
// [1,2],  [2,1],  [3,2],  [2,3] - 2