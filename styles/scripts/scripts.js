fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
  .then((latestPostData) => {
    // console.log(latestPostData);
    return latestPostData.json(); //convertated to object
  })
  .then((ObjectlatestPostData) => {
    // console.log(ObjectLatestPostData[0].author);
    let cardlatestPostData = "";
    ObjectlatestPostData.map((values) => {
      cardlatestPostData += ` <div id="container" class="container">

   <div class="card card-compact w-96 bg-base-100 shadow-xl border-6-black-600 ">
   <img class="" src="${values.cover_image}" alt= />

   
   <div class="card-body">
    
    <div class="flex items-center">
      <div ><img src="images/date.svg" alt=""></div>
      <h1 id="date" class="pl-2 " >${values.author.posted_date} </h1>
    </div>

    <h2 class="card-title">${values.title}</h2>
    <p>${values.description} </p>

    <div class="flex  card-actions ">
     <img class=" px-32 " src="${values.profile_image}" alt="">
      <div id="information">
      <h1>${values.author.name}</h1>
      <h1>${values.author.designation}</h1>
      </div>
    </div>

  </div>
  </div>
</div> `;
  });
  document.getElementById("cards").innerHTML = cardlatestPostData;


}).catch((err) =>{
  console.log(err);
});
  


