
var form1 = document.getElementById("form1"),
form2 = document.getElementById("form2"),
form3 = document.getElementById("form3"),
form1_estrella = document.getElementsByName("form1-estrella"),
form2_estrella = document.getElementsByName("form2-estrella"),
form3_estrella = document.getElementsByName("form3-estrella"),
choice1,choice2,choice3;

form1.addEventListener("click", function(e){
    e.preventDefault();
    for(var i=0;i<5;i++){
        form1_estrella[i].style.color= "#888";
    }
    for(var i=0;i<choice1;i++){
        form1_estrella[i].style.color= "rgb(53, 253, 27)";
    }
}, false);
form2.addEventListener("click", function(e){
    e.preventDefault();

    for(var i=0;i<5;i++){
        form2_estrella[i].style.color= "#888";
    }
    for(var i=0;i<choice2;i++){
        form2_estrella[i].style.color= "rgb(53, 253, 27)";
    }
}, false);
form3.addEventListener("click", function(e){    
    e.preventDefault();

    for(var i=0;i<5;i++){
        form3_estrella[i].style.color= "#888";
    }
    for(var i=0;i<choice3;i++){
        form3_estrella[i].style.color= "rgb(53, 253, 27)";
    }
}, false);