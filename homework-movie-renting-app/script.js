console.log('Homework Movie Renting App')

let arrayOfMovies = ['Harry Potter', 'Lord of the Rings', 'Avatar', 'Troy','The batman','Spiderman','Superman'];
console.log(arrayOfMovies)

let inputText = document.getElementById('inpt');
let h1 = document.getElementById('result')
let button= document.getElementById('btn')

btn.addEventListener('click', function(){
    let movie = inputText.value;
    for(i=0; i<arrayOfMovies.length;i++){
        if(movie.toLowerCase() === arrayOfMovies[i].toLowerCase()){ 
            h1.innerText= (`The movie '${movie}' can be rented`)
            h1.style.color ='green';
            inputText.value='';
            return
            
        } else{          
            h1.innerText= (`The movie '${movie}' cannot be rented`)
            h1.style.color ='red';
        }
    } 
})




