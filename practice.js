function greet() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world!');
    }, 2000);
  });
  return promise;
}

/* greet().then(data => {
  console.log(data);
}); */

greet().then(callback);

function callback(data) {
  console.log(data);
}

//! ====================================
const data = Number(prompt('Введіть число: '));
checkNumber(data).then(console.log).catch(console.log);

function checkNumber(data) {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject('error');
    } else if (data % 2 === 0) {
      setTimeout(() => resolve('even'), 1000);
    } else {
      setTimeout(() => resolve('odd'), 2000);
    }
  });
}
