const navtoggle = document.querySelector('.nav-open');

navtoggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-slide');
});

//var servicesnav = document.getElementById('#services')
//servicesnav.onclick = function() {};
//servicesnav.setAttribute('onclick', 'foo()');
//servicesnav.addEventListener('onclick', foo, false);