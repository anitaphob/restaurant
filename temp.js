"use strict"
const template = document.querySelector('template').content;
const main = document.querySelector('main');
const link = "http://kea-alt-del.dk/t5/api/productlist";
const imglink = "http://kea-alt-del.dk/t5/site/imgs/"

fetch(link).then(result=>result.json()).then(data=>show(data));

function show(data){
    data.forEach(elem=>{
        
        const clone = template.cloneNode(true);
        clone.querySelector("img").src=imglink + "small/" + elem.image + "-sm.jpg";
        clone.querySelector("h2").textContent=elem.name;
        clone.querySelector("p").textContent=elem.shortdescription;
        main.appendChild(clone);
        
    })
}