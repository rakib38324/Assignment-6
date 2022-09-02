const category = async() =>{
    const responce = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await responce.json();
    return data;
}

const submenu = async() =>{
   
    const data = await category();
    // console.log(data.data.news_category)
    const AllData = data.data.news_category;

    const Menu = document.getElementById('allCategory');
    const uniqArray = [];

    AllData.forEach( Data => {
        // console.log(Data.category_name)
        if(uniqArray.indexOf(Data.category_name) == -1){
                uniqArray.push(Data.category_name);
        
                const a = document.createElement("a");
                a.innerHTML = `
                 
                    <button onclick="TheNews(${Data.category_id}); " id="${Data.category_name}"  type="button" class="btn">${Data.category_name}</button>

                `;
                // <a click="Allnews()" id="${Data.category_id}" >${Data.category_name}</a>
                Menu.appendChild(a)
            }

            
    });    


    

}

submenu()

// document.getElementById('Breaking News').addEventListener('click',function(){
//     console.log("Click")
// })