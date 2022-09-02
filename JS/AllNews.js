function TheNews(data){
    console.log(data)
    fetch(`https://openapi.programming-hero.com/api/news/category/0${data}`)
    .then( responce => responce.json())
    .then( data => displayBreakingNews(data.data))
}

function displayBreakingNews(data){

    const BreakingNewsFild =document.getElementById('BreakingNewsContainer');
    BreakingNewsFild.innerText = '';
    
    let count = 0;
    for(let news of data){
        console.log(news)
        count = count + 1;

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
                            <p class="card-text pb-5" style="${"white-space: nowrap;  overflow: hidden; text-overflow: ellipsis;"}">${news.details}</p>

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


                                <button id="${news._id}" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        <h4 class="ps-4"> ${count} ${"items found for category"} </h4>
    `;
    }

    else{
        p.innerHTML = `
        <h4 class="ps-4"> ${"No items found for category"} ${"Breaking News"}</h4>
    `;
    }

    countFild.appendChild(p);
    



    // for(let news of data){

    //     if(news._id == )
    // }
    
    // // const modalTitleFild = document.getElementById('modalTitle');
    // //     modalTitleFild.innerText = news.title; 


    // //     const modalDetailsFild = document.getElementById('modalDetails');
    // //     modalDetailsFild.innerText = news.details;



}







