
const spinner = ['\r|  ', '\r|  ', '\r-  ', '\r\\  ', '\r|  ', '\r|  ', '\r-  ', '\r\\  ', '\r|  \n'];
let delay = 100;

spinner.forEach((position) => {
  setTimeout(() => { 
  process.stdout.write(position);
}, delay);
delay += 300;
})


 