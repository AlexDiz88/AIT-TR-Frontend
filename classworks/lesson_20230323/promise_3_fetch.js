let catUrl = fetch("https://aws.random.cat/meow")
  .then((value) => {
    console.log("Qg");
    return value.json();
  }) // первый then раскрыл промис от fetch
  .then((data) => {
    console.log(data); // получаем объект JSON { file: 'https://purr.objects-us-east-1.dream.io/i/imageName.jpeg' }
    console.log(data.file); // получаем https://purr.objects-us-east-1.dream.io/i/imageName.jpg
    return data.file;
  });

console.log(catUrl); // Promise { <pending> }
