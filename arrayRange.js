function arrayManipulation(n, queries) {
  var difArr = new Array(n+1).fill(0); // Здесь сразу создаю difference array так как оригинальный массив и так заполнен нулями
  var max = 0;
  var m = queries.length;

  for (let i = 0; i < m; i++) {
    difArr[queries[i][0]-1] = difArr[queries[i][0]-1] + queries[i][2]; //Здесь используется differencial array
    difArr[queries[i][1]] = difArr[queries[i][1]]-queries[i][2];
  }                                                                  //диапазон индексов обновляется за одну итерацию
  for (let j = 0; j < n; j++) {
    if(j !== 0) difArr[j] = difArr[j]+difArr[j-1];   //Определяю наибольшее число
    if(difArr[j]>max) max=difArr[j];
  }
  return max;
}
