let timeOut = new Promise(function(resolve,reject){
  let time = true;
  if(time){
    resolve('TIMED OUT!');
  }else{
    reject();
  }
});

timeOut.then(function(fromResolve){
  setTimeout(function(){ console.log(fromResolve); }, 300);
});
