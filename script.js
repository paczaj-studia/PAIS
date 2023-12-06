// Showing and hidding mobile menu
const mobile_menu_button = document.querySelector('.btn.btn-mobile_menu')

mobile_menu_button.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("sidebar_visible")
    mobile_menu_button.classList.toggle('opened')

    });

