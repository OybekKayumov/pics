const numbers = [0,1,2,3,4,]

let newArr = []
for (let i=0; i<numbers.length; i++) {
  newArr.push(numbers[i] * 10)
}

// numbers;
// newArr;

numbers.map((item) => item * 10)

numbers.map((item) => <div>item</div>)