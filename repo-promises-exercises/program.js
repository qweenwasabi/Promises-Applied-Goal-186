var promise = new Promise(function(fulfill,reject){
    reject(new Error('REJECTED!'));

});

function onReject (error) {
    setTimeout(function(){
  console.log(error.message)
    },300);
  }


promise.then(null,onReject);
