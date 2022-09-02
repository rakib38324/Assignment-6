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
        console.log(Data.category_name)
        if(uniqArray.indexOf(Data.category_name) == -1){
                uniqArray.push(Data.category_name);
        
                const a = document.createElement("a");
                a.innerHTML = `
                    <a  >${Data.category_name}</a>
                `;
                Menu.appendChild(a)
            }
    });    

}

submenu()