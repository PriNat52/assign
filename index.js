/*  Trying out jQuery and Javascript */

$(document).ready(function(){
  $('#button1').click(function(){
    console.log("hello");
    makeRequest();
   });
 });

 function makeRequest(){
   
  let httpRequest = new XMLHttpRequest();
   
  if(!httpRequest){
    console.log("Exit: Records cannot be found");
    return false;
  }
   
   httpRequest.onreadystatechange = function() {
     if(httpRequest.readyState === XMLHttpRequest.DONE){
       
       console.log('in function');
       if (httpRequest.status === 200){
         
         console.log('inside 200');
         let myObj,txt="",x=0;
         myObj = JSON.parse(httpRequest.responseText).my_studies;
         txt += "<table border='1'>"
         for (x in myObj) {
           txt += "<tr><td>" + myObj[x].study.Name + "</td><td>"+ myObj[x].study.Major + "</td><td>" + myObj[x].study.Course + "</td><td>" + myObj[x].study.Year +"</td></tr>";
          }
        txt += "</table>"    
        document.getElementById("result").innerHTML = txt;
         
         }else{
           console.log('error at 200');
           alert("Error: at 200");
        }
       }else{
         console.log("problem with ready state")
       }
   };
   
   httpRequest.open('GET','my_studies.json');
   httpRequest.send();
}
