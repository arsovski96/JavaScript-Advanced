console.log('Homework')

	let btn = document.getElementById('btn')
	let table = document.getElementById('table')
    
btn.addEventListener('click', () => {

let getTable = () => {
    let headers = ['Planet Name ', 'Population ', 'Climate ', 'Gravity ']
    let thead = document.createElement('THEAD')
    let tbody = document.createElement('TBODY')
    
    table.appendChild(thead)
    table.appendChild(tbody)
    
    
    for (let i = 0 ; i< headers.length; i++){
        let th = document.createElement('TH')
        thead.appendChild(th)
        th.innerText = headers[i]
        th.style.borderRight= '1px solid black'
    }
   
    table.style.background = 'lightgreen'
    table.style.width = '555px'
}

let callToApi= () => {
    fetch('https://swapi.dev/api/planets/?page=1')
    .then(res => res.json())
    .then(data =>  {
        let tbody = document.createElement('TBODY');
        table.appendChild(tbody)

        let planetsObj = data;
        for (let i = 0; i < planetsObj.results.length; i++) {
            let firstTen =[
            planetsObj.results[i].name,
            planetsObj.results[i].population,
            planetsObj.results[i].climate,
            planetsObj.results[i].gravity,
        ]
        let tr = document.createElement('TR')
        tbody.appendChild(tr)

        for( let stats of firstTen){
            let td = document.createElement('TD')
            tr.appendChild(td)
            td.innerText = stats
            td.style.borderRight = '1px solid black'
            td.style.borderBottom = '1px solid black'
        }
      
        }
    })
    .catch(err => console.log('Error', err))
}


getTable(callToApi())

})
