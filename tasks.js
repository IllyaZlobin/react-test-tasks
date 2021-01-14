/*
Тест 0
Написать цикл на 10 итераций, вывести в консоль индекс каждой итерации
*/
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
testArr.forEach((val, idx) => {
  console.log(`idx`, idx);
});

const data = [1, 2, 3, 4];

async function sendPart(num) {
  return num;
}

function fakeDelay() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

/*
Написать алгоритм отправки всех чисел
последовательно через  sendPart

*/
const sendSequence = async (arr) => {
  let result = [];
  for (const el of arr) {
    const num = await sendPart(el);
    result.push(num);
  }
  return result;
};

/*
Написать алгоритм отправки всех чисел
параллельно через  sendPart

*/
const sendParallel = async (arr) => {
  const promises = arr.map((el) => sendPart(el));
  const result = await Promise.all(promises);
  return result;
};

/*
Написать алгоритм отправки всех чисел
последовательно через  sendPart
но с задержкой в одну секунду после каждой отправки
*/
const sendSequenceWithDelay = async (arr) => {
  let result = [];
  for (const el of arr) {
    const num = await sendPart(el);
    result.push(num);
    await fakeDelay();
  }
  return result;
};

sendSequence(data);
sendParallel(data);
sendSequenceWithDelay(data);
