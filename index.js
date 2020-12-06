
$(document).ready(function(){
  $('#button1').click(function(){
    makeRequest();
   });
  });

  function makeRequest(){
    let httpRequest = new XMLHttpRequest();
    if(!httpRequest){
      alert("Exit: Records cannot be found");
      return false;
    }
    httpRequest.onreadystatechange = function (){
      if(httpRequest.readystate == XMLHttpRequest.DONE){
        if (httpRequest.status === 200){
          document.write(httpRequest.responseText);
        }else{
          alert("Found an Error with data.")
        }
      }
    };
    httpRequest.open('GET','my_studies.json');
    httpRequest.send();
  }
