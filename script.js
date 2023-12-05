const btn = document.querySelector('button')

// document.querySelector('button.btn-mobile_menu').addEventListener('click', ()=>(
//     console.log('dupa')
    
// ))

btn.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("sidebar_visible")
    });

// console.log(a);
