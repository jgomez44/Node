let total_count = 0;
let num_order = 2;
while (process.argv[num_order]) {
  total_count += Number(process.argv[num_order]);
  num_order++;
}
console.log(total_count);
