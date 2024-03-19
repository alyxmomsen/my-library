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
