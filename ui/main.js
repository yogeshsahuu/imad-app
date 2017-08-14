//Counter code

var button = document.getElementById('counter');
var counter=0;
button.onclick = function () {
  
  // Make request to counter endpoint
  
  var request = new XMLHttpRequest();
  
  // Capture the responce and store in a variable
  request.onreadystatescange = function(){
      if (request.readyState == XMLHttpRequest.DONE){
          //Take some action
          
          
       }
       //
       
  };
  counter = counter+1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};