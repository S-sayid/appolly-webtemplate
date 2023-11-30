 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
      padding: 100,
      numVisible: 5,
      indicators: true,
    });

    var el = document.querySelector(".carousel");
    var l = M.Carousel.getInstance(el);

    autoplay()
    function autoplay(){
    l.next(1);
    setTimeout(autoplay, 5000)
  }
  let a = document.querySelector('.ch-ca-left')    
  a.addEventListener('click', function(e){
  l.next(1);
  })
  
  let b = document.querySelector('.ch-ca-right')
  b.addEventListener('click', function(e){
  l.prev(1);
  })
  });

