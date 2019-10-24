# arrayManipulation-HackerRank
Решение задачи arrayManipulation с сайта HackerRank на JavaScript.
Задача такова что надо массив заполненный нулями надо обновить определенное количество раз (надо обновить диапазоны индексов) после чего вернуть наибольшее значение в массиве.
На вход функции дается два параметра, первый длина массива, второй двумерный массив где каждая ячейка содержит 3 числа, первое начальный индекс, второе конечный индекс и третье суммируемое значение.
Здесь я использую метод обновления массива использующий difference array а затем sum prefix.

```javascript
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
```
