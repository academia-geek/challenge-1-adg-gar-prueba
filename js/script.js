
var boton = document.getElementById("btn");

boton.addEventListener('click',(e)=>{
   e.preventDefault();
   let text = document.getElementById("email").value;
   
   if(text.length==0){
    document.getElementById("msjalert").innerHTML="Please provide a valid email";
    var eml =document.getElementById("email");
    styleEml=window.getComputedStyle(eml);
    emlWidth=styleEml.getPropertyValue('width');
    if(emlWidth=='350px'){
    eml.style.border='2px solid hsl(0, 93%, 68%, 0.8)';
    eml.style.backgroundImage='url("./images/icon-error.svg")';
    eml.style.backgroundRepeat='no-repeat';
    eml.style.backgroundPositionX="312px";
    eml.style.backgroundPositionY="10px";
    }
    else if(emlWidth=='260px'){
    eml.style.border='2px solid hsl(0, 93%, 68%, 0.8)';
    eml.style.backgroundImage='url("./images/icon-error.svg")';
    eml.style.backgroundRepeat='no-repeat';
    eml.style.backgroundPositionX="200px";
    eml.style.backgroundPositionY="10px";
    }

   }
   else if(text.indexOf("@")==-1){
      document.getElementById("msjalert").innerHTML="Please provide a valid email";
      var eml =document.getElementById("email");
      styleEml=window.getComputedStyle(eml);
      emlWidth=styleEml.getPropertyValue('width');
      if(emlWidth=='350px'){
      eml.style.border='2px solid hsl(0, 93%, 68%, 0.8)';
      eml.style.backgroundImage='url("./images/icon-error.svg")';
      eml.style.backgroundRepeat='no-repeat';
      eml.style.backgroundPositionX="312px";
      eml.style.backgroundPositionY="10px";
      }
      else if(emlWidth=='260px'){
      eml.style.border='2px solid hsl(0, 93%, 68%, 0.8)';
      eml.style.backgroundImage='url("./images/icon-error.svg")';
      eml.style.backgroundRepeat='no-repeat';
      eml.style.backgroundPositionX="200px";
      eml.style.backgroundPositionY="10px";
      }
   }
   else{
      document.getElementById("email").value="";
   }
})
