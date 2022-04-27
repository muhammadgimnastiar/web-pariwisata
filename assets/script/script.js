let size = screen.height;
//navbar berubah ketika scrolling
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let navbar = document.querySelector('.navbar');
    let windowPrecicion = window.scrollY > size-180;
    header.classList.toggle('scrolling-active', windowPrecicion);
    navbar.classList.toggle('scrolling-active', windowPrecicion);


    
  })

  console.log(10*size);