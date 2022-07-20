// const { response } = require("express");

document.addEventListener('DOMContentLoaded' , function(){
    // fetch('htpp://localhost:5000')
    // .then(responsee => response.json())
    // .then(data => console.log(data));
    loadHTMLTable([]);
});

function loadHTMLTable(data){
    const table = document.querySelector('tbody');
    // let tableHTML = "";

    if(data.length === 0){
        table.innerHTML = "<tr><td colspan='5'>No data</td></tr>";
    }
}