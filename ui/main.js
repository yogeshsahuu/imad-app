//Counter code

var button = document.getElementById('counter');

button.onclick = function () {
  
  // Make request to counter endpoint
  
  var request = new XMLHttpRequest();
  
  // Capture the responce and store in a variable
  request.onreadystatechange = function(){
      if (request.readyState === XMLHttpRequest.DONE){
          //Take some action
          
          if(request.status === 200);{
              var counter = request.responceText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
              
          }
       }
       //not done yet
       
  };
  
   request.open('GET', "http://yogeshsahu22.imad.hasura-app.io/counter", true);
   request.send(null);
};

//Submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick =  function(){
   
   
   var names = ['Name1','Name2','Name3'];
   var list = '';
     for(i=0; i < names.length; i++)
     {
         list == '<li>'+ names[i] +'</li>';
         
     }
     
     var ul= document.getElementById('namelist');
     ul.innerHTML = list;
     
     
     
     
    
};