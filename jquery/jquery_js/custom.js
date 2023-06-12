
$('#Carousel').owlCarousel({
    loop:false,
    stagePadding: 0,
    margin:10,
    dots:false,
    nav:true,
    slideBy:1,
    merge:true,
    responsive:{
        0:{
            items:2
        },
        370:{
            items:2
        },
        1100:{
            items:3
        }
    }
})

var totalCard = 3;
var currentCard = 0;
var $progressbar = $("#progressbar");

$(".owl-next").on("click", function(){
  if (currentCard >= totalCard){ return; }
  currentCard++;
  $progressbar.css("width", Math.round(100 * currentCard / totalCard) + "%");
});
$(".owl-prev").on("click", function(){
  if (currentCard <=0){ return; }
  currentCard--;
  $progressbar.css("width", Math.round(100 * currentCard / totalCard) + "%");
});





