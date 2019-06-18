
var comentario1_like = document.getElementById("comentario1-like"),
comentario1_dislike = document.getElementById("comentario1-dislike");

comentario1_like.addEventListener("click", function(e){
    e.preventDefault();
    comentario1_like.style.color= "rgb(53, 253, 27)";
    comentario1_dislike.style.color= "rgba(184, 133, 133, 0.9)";
}, false);
comentario1_dislike.addEventListener("click", function(e){
    e.preventDefault();
    comentario1_dislike.style.color= "rgb(53, 253, 27)";
    comentario1_like.style.color= "rgba(184, 133, 133, 0.9)";
}, false);