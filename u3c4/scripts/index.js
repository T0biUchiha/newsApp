// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar,sidebar } from "../scripts/navbar.js";
 let nav = document.getElementById("navbar");
 nav.innerHTML = navbar();
let bar =document.getElementById("sidebar");
bar.innerHTML = sidebar();

import {append,searchNewsNation} from "../scripts/fetch.js";

 let search = (el) =>{
     if(el.key==="Enter"){
        let val =document.getElementById("search_input").value;
        localStorage.setItem("key",val);
         window.location.href="search.html";
         
     }
 }

 document.getElementById("search_input").addEventListener("keypress",search);

let nation = document.getElementById("sidebar").children;
let def = document.getElementById("results");
{
    searchNewsNation("in").then((data)=>{
            
        let show = document.getElementById("results");
        show.innerHTML = null;
        append(data.articles,results);
    });
}

function news(){
    console.log(this.id);
    // let value = document.getElementById("search_input").value;
    searchNewsNation(this.id).then((data)=>{
            
        let show = document.getElementById("results");
        show.innerHTML = null;
        append(data.articles,results);
    });
   }

for(let el of nation){
    el.addEventListener("click",news);
}

let newsP = document.querySelector(".news");

function newsPage(){
    
    localStorage.setItem("news",newsP)
    window.location.href = "news.html";

}

for(let e of newsP){
    e.addEventListener("click",newsPage)
}