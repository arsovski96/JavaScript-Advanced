console.log('Homework')

let button = document.getElementById('get');
let firstDiv = document.getElementById('div');
let firstNameH1 = document.createElement('h1');
let row1 = document.getElementById('one');
let row2 = document.getElementById('two')
let row3 = document.getElementById('three')
let row4 = document.getElementById('four')

firstDiv.appendChild(firstNameH1);

button.addEventListener('click', function(){
    fetch(`https://swapi.dev/api/people/1`)
    .then(function(result){
        return result.json()
    })
    .then(function(dataFrom){
        console.log('DATA:', dataFrom);
        firstNameH1.innerText= dataFrom.name;
        row1.innerText = dataFrom.height;
        row2.innerText = dataFrom.birth_year;
        row3.innerText = dataFrom.eye_color;
        row4.innerText = dataFrom.hair_color;
        
    })
    .catch(function(error){
        console.log('Error:', error)
    })
})


