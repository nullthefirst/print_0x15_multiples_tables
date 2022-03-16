// list for initial iterables
let base_bucket = [];

// list for list of multiples
let multiples = [];

// values to add before integers
const one_digit = "...";
const two_digits = "..";
const three_digits = ".";

// outer loop
for (let i=0; i <=15; i++) {
  // add integers to list of initial iterables
  base_bucket.push(i);
  // list to hold multiples by single integer
  let line = [];
  // inner loop
  for (let j=0; j <=15; j++) {
    // create multiplier values per loop
    let multiplier = i * j;
    // convert integer to string
    let raw_value = multiplier.toString();
    // variable for formatted string
    let formatted_value = "";
    // add varying dots based off string length
    if (raw_value.length === 1) {
      formatted_value = one_digit + raw_value;
    } else if (raw_value.length === 2) {
      formatted_value = two_digits + raw_value;
    } else if (raw_value.length === 3) {
      formatted_value = three_digits + raw_value;
    }
    // add formatted values to inner list for multiples
    line.push(formatted_value);
  }

  // console.log(line);
  let multiplication_line = line.join('');
  
  // multiples.push(line);
  multiples.push(multiplication_line);
}

// print values of (0 X 15) multiples table
for (let x=0; x < multiples.length; x++) {
  console.log(`${multiples[x]}\n`);
}
