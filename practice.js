function greet() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello world!');
    }, 1000);
  });
  return promise;
}

console.log(greet());
