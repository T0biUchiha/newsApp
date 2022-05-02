// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../scripts/navbar.js";
 let nav = document.getElementById("navbar");
 nav.innerHTML = navbar();

import {searchNews,append} from "../scripts/fetch.js";



{

//let value = document.getElementById("search_input").value;
let value = localStorage.getItem("key");
         searchNews(value).then((data)=>{
            
             let show = document.getElementById("results");
             show.innerHTML = null;
             append(data.articles,results);
         });
        }