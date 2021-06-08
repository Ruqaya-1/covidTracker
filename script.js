function fetchData() {
    const API_ENDPOINT ="https://corona.lmao.ninja/v3/covid-19/all"
    fetch(API_ENDPOINT)
    .then(function(response) {
       const jsonData = response.json();
       return jsonData;
    })
    .then(function(jsonData) {
        displayData(jsonData)
        
    })
}
function fetchVaccineData() {
    const API_ENDPOINT ="https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=30&fullData=false"
    fetch(API_ENDPOINT)
    .then(function(response) {
        const jsonData = response.json();
        return jsonData;
    })
    .then(function(jsonData) {
        displayData1(jsonData)
    })
}
function displayData(data){

    
    const stats = document.querySelectorAll(".stat");
    console.log(stats)
  
  //active
    stats[0].children[1].textContent = IndianRep(data.active);
    stats[0].children[2].textContent = IndianRep(data.todayCases);


//recovered

     
    stats[1].children[1].textContent = IndianRep(data.recovered);
   stats[1].children[2].textContent = IndianRep(data.todayRecovered);


//deceased

    
    stats[2].children[1].textContent = IndianRep(data.deaths);
    stats[2].children[2].textContent = IndianRep(data.todayDeaths);

}

function displayData1(data) {
    const stats = document.querySelectorAll(".stat")
    // console.log(stats)
    // console.log(Object.keys(data))
    stats[3].children[1].textContent = IndianRep(data[Object.keys(data)[(Object.keys(data).length-1)]]);
}


function IndianRep(num){
    const formattedNum = new Intl.NumberFormat("en-IN").format(num)
    return formattedNum;
}
window.onload = function () {
    fetchData();
   fetchVaccineData();
}