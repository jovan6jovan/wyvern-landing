const hamburger=document.querySelector(".hamburger"),mainNav=document.querySelector("#js-menu");hamburger.addEventListener("click",function(){this.classList.toggle("active"),this.classList.toggle("not-active"),mainNav.classList.toggle("show-nav")});
