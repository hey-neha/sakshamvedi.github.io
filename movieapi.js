

var city="Varanasi";
function fn1()
{
     city = document.getElementById("text1").value;

    
     $.getJSON("https://api.themoviedb.org/3/search/movie?api_key=c1a78ae3d483d669fb1b2facc757fb75&language=en-US&query="+ city +"&page=1&include_adult=false",function(data){
          console.log(data);      
  

var moviename=data.results[0].title;
var movieimg=data.results[1].backdrop_path;


/*document.getElementById("image").src="https://image.tmdb.org/t/p/w500//hbrXbVoE0NuA1ORoSGGYNASagrl.jpg"; */
document.getElementById("image").src="https://image.tmdb.org/t/p/w500/"+movieimg; 
 /*document.getElementById("room").innerHTML=ctemp+" C"; */ 
 document.getElementById("room").innerHTML=moviename;   



});}
