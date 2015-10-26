//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  return function(number){
    return 'Calling ' + friend + ' at ' + number;
  };
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var a = callFriend();
a('435-215-9248');


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
 var x = 1;
 return function() {
  return x++;
 } 
}
var count = makeCounter();
count();
count();
count();
count();



//Next Problem



/*
  Write a function that does something simple (console, alert, etc). Write a second function that accepts the first function as it's first parameter. The second function should return a new third function which, when invoked, invokes the first, original function that was passed in, but will only ever do so once.
*/

var first = function() {
  console.log('hi');
}
var second = function(a){
  var x = false;
  return function(){
    if(!x) {
      a();
      x = true;
    }else {return "no";}
    
  };
}
var c = second(first);

//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter will be an anonymous function and the second parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/
var fnCounter = function(a, N){
  for (var i = 0; i < N; i++){
    a();
    if(i == N-1){
      return "STOP";
    }
  }
};
var b = fnCounter(function(){console.log("hi");}, 3);
b

//or

var dummyFn = function(){return "This";};
var fnCounter = function;
//Runs separately but only 3 times
//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the funciton is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //After i*1000 milliseconds, the value i will be printed out for each iteration of the for loop


  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //I was wrong.


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/
function timer(i){
  setTimeout(function(){console.log(i);}, i*1000)
}
var counter = function(){
  for (var i = 1; i <=5; i++) {
    timer(i);
  };
}

//or

var counter = function(){
  for(var i = 1; i <=5; i++){
    setTimeout(function(x){return function(){console.log(x);};}(i), i*1000);
  }
}
//Next Problem

var funcArray = [];
var a = function(num){
  return function() {
    return num;
  }
}
for (var i = 0; i < 6; i++){
    funcArray.push(a(i));
}


/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


