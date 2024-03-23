function deepEqual(obj1, obj2) {
  // Проверяем, являются ли оба объекта объектами
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return typeof obj1 === typeof obj2;
  }

  // Проверяем количество свойств в объектах
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Рекурсивно сравниваем типы свойств объектов
  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}


function customSqrt(number) {
  if (number < 0) {
    return NaN;
  } else if (number === 0) {
    return 0;
  } else {
    var start = 0;
    var end = number;
    var precision = 0.000001; // Точность вычисления
    
    while (end - start > precision) {
      var mid = (start + end) / 2;
      var square = mid * mid;
      if (square === number) {
        return mid;
      } else if (square < number) {
        start = mid;
      } else {
        end = mid;
      }
    }
    
    return start;
  }
}
