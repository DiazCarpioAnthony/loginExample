
var search = document.getElementById("search"),
deporte = document.getElementsByTagName("h3"),
forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
    var choice = this.value;

    forEach.call(deporte, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.parentNode.style.display = "none";        
        else
            f.parentNode.parentNode.style.display = "flex";         
    });
}, false);
