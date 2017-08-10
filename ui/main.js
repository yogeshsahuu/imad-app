//Counter code
var counter=0;
var button = document.getElementByID('counter');
button.onclick= function () {
  
  
  counter=counter+1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};