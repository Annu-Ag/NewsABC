
var accordionCard = document.getElementById('accordionCard');
var headingOne = document.getElementById('a');
var collapseOne = document.getElementById('b');
var cardView = document.getElementById('cardView');





var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea85996a69cb4214a6421b035c7bd98e', true);
//xhr.onprogress = function () {
//    console.log('on progress');
//}
xhr.onload = function () {
    if (this.status == 200) {
        var obj = JSON.parse(this.responseText);
        articles = obj.articles;

        console.log(articles);
        var newsHTML = '';
        var cardNews = '';

        for (news in articles) {


            articles.forEach(function (element, index) {
                var b = `<div class="card">
                       <div class="card-header" id="heading${index}">
                      <h2 class="mb-0">
                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                          ${element["title"]}
                </button>
              </h2>
             </div>
             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordionCard">
         <div class="card-body">
          ${element["content"]}.<a href=" ${element['url']}" target="_blank">Read more</a>
                </div>
           </div>
             </div>`




                newsHTML += b;
            });
            accordionCard.innerHTML = newsHTML;

        }





        for (key in articles) {
            articles.forEach(function (element, index) {


                var temp = `<div class="card" style="width: 18rem;">
                           <img class="card-img-top" src="${element['urlToImage']}" alt="Card image cap">
                           <div class="card-body">
                             <h5 class="card-title" style="font-size:12px;">${element["title"]}</h5>
                            
                             <a href="${element['url']}"  class="btn btn-primary" style="font-size:12px; target="_blank">Read Full News</a>
                           </div>
                         </div>`

                cardNews += temp;
            });

            cardView.innerHTML = cardNews;

        }






    }
    else {
        console.log('some error occured');
    }

}
xhr.send();
