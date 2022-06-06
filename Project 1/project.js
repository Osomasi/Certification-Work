const navtoggle = document.querySelector('.nav-open');

navtoggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-slide');
});