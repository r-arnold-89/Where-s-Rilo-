let pupScore = 0
let score = 0

  
function myFunction() {

  var x = document.getElementById("div-rilo");

    if (x.style.opacity === "100%") {
      x.style.opacity = "0%" ;
    } else {
      x.style.opacity = "100%" 
      
      pupScore ++;

      console.log(pupScore);
      document.getElementById("pup-increment").innerHTML = pupScore;
      
      x.setAttribute("disabled", "disabled");
    };
  };

function myFunction1() {

  var x = document.getElementById("div-rilo1");

    if (x.style.opacity === "100%") {
      x.style.opacity = "0%"; 
      
    } else {
      x.style.opacity = "100%" 
      
      score ++;

      console.log(score);
      document.getElementById("increment").innerHTML = score;
      
      x.setAttribute("disabled", "disabled");
    };
  };

function myFunction2() {

  var x = document.getElementById("div-rilo2");

  if (x.style.opacity === "100%") {
    x.style.opacity = "0%"; 
    
  } else {
    x.style.opacity = "100%" 
   
      score ++;

      console.log(score);
      document.getElementById("increment").innerHTML = score;
      
      x.setAttribute("disabled", "disabled");
  }
  } 

function myFunction3() {

    var x = document.getElementById("div-rilo3");

    if (x.style.opacity === "100%") {
      x.style.opacity = "0%" ;
    } else {
      x.style.opacity = "100%" ;

      score ++;

      console.log(score);
      document.getElementById("increment").innerHTML = score;
      
      x.setAttribute("disabled", "disabled");
    }
  } 

function myFunction4() {

    var x = document.getElementById("div-rilo4");

    if (x.style.opacity === "100%") {
      x.style.opacity = "0%" ;
    } else {
      x.style.opacity = "100%" ;

      score ++;

      console.log(score);
      document.getElementById("increment").innerHTML = score;
      
      x.setAttribute("disabled", "disabled");
    }
  } 
  
function myFunction5() {

    var x = document.getElementById("div-rilo5");

    if (x.style.opacity === "100%") {
      x.style.opacity = "0%" ;
    } else {
      x.style.opacity = "100%" ;

      score ++;

      console.log(score);
      document.getElementById("increment").innerHTML = score;
      
      x.setAttribute("disabled", "disabled");
    }
  } 

  

  function clickCounter() {
    
    
  }
