let randomNumber=Math.floor(Math.random()*11);
console.log(randomNumber);

let hint=document.getElementById("hint");
let winMessage=document.getElementById("win");
let message=document.getElementById("message");

     function clickAction(){

          let inputNumber=document.getElementById("txtNumber").value;
          console.log(inputNumber);

          if(inputNumber==randomNumber){
               
               hint.innerText="";
               document.getElementById("winGif").innerHTML='<img width="300" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXptdXF6bHRrenFhd2VqdnBkbW10dnA1NHlmdDh1aXFiN2o5Z21yYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Pn6wjEUXlZUuYQbVkG/giphy.gif" alt="">';
               winMessage.innerText="WIN !!!";
               message.innerText="CONGRATULATIONS !";
               randomNumber=Math.floor(Math.random()*11);
               console.log(randomNumber);

          }else if(inputNumber>randomNumber){
               
               document.getElementById("winGif").innerHTML='';
               winMessage.innerText="";
               hint.innerText="Hint:- Number is heigh";
               message.innerText="YOU LOST !";
               alert("WRONG");
               
          }else {
               
               document.getElementById("winGif").innerHTML='';
               winMessage.innerText="";
               hint.innerText="Hint:- Number is small";
               message.innerText="YOU LOST !";
               alert("WRONG");
          }

          inputNumber.innerText="";
     }