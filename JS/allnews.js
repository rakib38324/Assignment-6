
const TheNewsIs01 = async() =>{
    const responce = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await responce.json();
    console.log(data.data)
    // return data;
}

