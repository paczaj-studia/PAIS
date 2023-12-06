// Showing and hidding mobile menu
const mobile_menu_button = document.querySelector('.btn.btn-mobile_menu')

mobile_menu_button.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("sidebar_visible")
    mobile_menu_button.classList.toggle('opened')

    });

    

    // function load_home (e) {
    //     (e || window.event).preventDefault();
    
    //     fetch("http://www.yoursite.com/home.html" /*, options */)
    //     .then((response) => response.text())
    //     .then((html) => {
    //         document.getElementById("content").innerHTML = html;
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     });
    // } 

    // async function load_home() {
    //     let url = 'https://kamil-kielczewski.github.io/fractals/mandelbulb.html'
      
    //     content.innerHTML = await (await fetch(url)).text();
    //   }