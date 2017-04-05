let timeOut = new Promise(function(resolve,reject){
  setTimeout(function () {
    resolve("TIMED OUT!");
   }, 300);

});

timeOut.then(function(fromResolve){
   console.log(fromResolve);
});
