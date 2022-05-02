let searchNews = async(value)=>{
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let data = await res.json();
        
        return data;
    } catch (error) {
        return "Error Page Not Found";
    }
} 
let searchNewsNation = async(value)=>{
    try {
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)
        let data = await res.json();
        
        return data;
    } catch (error) {
        return "Error Page Not Found";
    }
} 


let append = (data,results) =>{
    data.forEach((data)=>{
        let div = document.createElement('div');
        div.setAttribute('class',"news");
        div.style.display="flex";
        div.style.marginBottom="30px";

        let img = document.createElement("img");
        let h3 = document.createElement("h3");
        h3.style.width = "80%"
        let p= document.createElement("p");
        let id = document.createElement("p");
        //let news_id = id.innerText = data.publishedAt;
        id.setAttribute("id",data.publishedAt);
        h3.style.marginLeft="25px"
        img.src=data.urlToImage;
        img.style.width="200px";
        img.style.height="200px";
        h3.innerText=data.title;
        p.innerText=data.description;
        div.append(img,h3,p,id);
        console.log(div)
        results.append(div);
    });
}

export {searchNews,append,searchNewsNation};