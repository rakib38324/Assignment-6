
function TheNews(data){
    // console.log(data)
    fetch(`https://openapi.programming-hero.com/api/news/category/0${data}`)
    .then( responce => responce.json())
    .then( data => displayBreakingNews(data.data))
}

trandingArray = [];
console.log(trandingArray);    


function displayBreakingNews(data){

    const BreakingNewsFild =document.getElementById('BreakingNewsContainer');
    BreakingNewsFild.innerText = '';
    
    

    let count = 0;
    for(let news of data){
        // console.log(news)
        count = count + 1;

       
        const trandind = news.others_info.is_trending;

        if(trandind == true){
            trandingArray.push(news);
        }

        console.log(trandingArray);


        
        
        const div = document.createElement("div");


        
            div.innerHTML = `
            <div class="card mb-3 w-100">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p class="card-text pb-5" >${news.details.length > 100 ? news.details.slice(0,100) + "...": news.details}</p>

                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img class="rounded-circle pt" src="${news.author.img}" alt="" width="50" height="40" class="d-inline-block align-text-top">
                                    <div class="ps-4" >
                                        <p  class="m-0">${news.author.name} </p>
                                        <p >${news.author.published_date} </p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <p class="pe-3"><i class="fa-solid fa-eye"></i></p>
                                    <p>${news.total_view}</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>


                                <button onclick="ShowModal('${news.title.replace(/'/g, '')}',
                                '${news.image_url.replace(/'/g,'')}',
                                '${news.details.replace(/'/g,'').replace(/"/g,'')}')" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i  class="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                            
                            
                            
                            
                        </div>
                  </div>
                </div>
            </div>
        `;
        
        

        BreakingNewsFild.appendChild(div);

        

        
    }





    const countFild = document.getElementById('count');
    countFild.innerText = ''; 

    const p = document.createElement("p");


    if(count != 0){
        p.innerHTML = `
        <h4 class="ps-4"> ${count} ${"items found of this category"} </h4>
    `;
    }

    else{
        p.innerHTML = `
        <h4 class="ps-4"> ${"No items found of this category"} </h4>
    `;
    }

    countFild.appendChild(p);

    


}




function ShowModal(title,image,discription){
    // console.log("click",title,image,discription)
    const modalBodyFild = document.getElementById('modalBody');
    modalBodyFild.innerHTML = ``;
    modalBodyFild.innerHTML = `

        <img src="${image}" class="img-fluid rounded-start pb-3" alt="...">
        <h5 id="modalTitle" class="card-title pb-3">${title}</h5>
        <p id="modalDetails" class="card-text pb-5">${discription}</p>
    
    `;

}




function trandingNews(){
    
    console.log(trandingArray);

    const BreakingNewsFild =document.getElementById('BreakingNewsContainer');
    BreakingNewsFild.innerText = '';

    for(let trand of trandingArray){
        console.log(trand.title)

        const div = document.createElement("div");


        
            div.innerHTML = `
            <div class="card mb-3 w-100">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="${trand.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${trand.title}</h5>
                            <p class="card-text pb-5" >${trand.details.length > 100 ? trand.details.slice(0,100) + "...": trand.details}</p>

                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img class="rounded-circle pt" src="${trand.author.img}" alt="" width="50" height="40" class="d-inline-block align-text-top">
                                    <div class="ps-4" >
                                        <p  class="m-0">${trand.author.name} </p>
                                        <p >${trand.author.published_date} </p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <p class="pe-3"><i class="fa-solid fa-eye"></i></p>
                                    <p>${trand.total_view}</p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star-half-stroke"></i>
                                </div>


                                <button onclick="ShowModal('${trand.title.replace(/'/g, '')}',
                                '${trand.image_url.replace(/'/g,'')}',
                                '${trand.details.replace(/'/g,'').replace(/"/g,'')}')" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i  class="fa-solid fa-arrow-right"></i>
                                </button>

                            </div>
                            
                            
                            
                            
                        </div>
                  </div>
                </div>
            </div>

        `;
        
        

        BreakingNewsFild.appendChild(div);

    }

    
}


