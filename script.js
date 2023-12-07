// Showing and hidding mobile menu
const mobile_menu_button = document.querySelector('.btn.btn-mobile_menu')

mobile_menu_button.addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("sidebar_visible")
    document.querySelector(".overlay").classList.toggle("overlay_visible")

    mobile_menu_button.classList.toggle('opened')

    });


    const top_nav_items = document.querySelectorAll('.top_navigation-item')
    const sidebar_lists = document.querySelectorAll('.sidebar div')

    top_nav_items.forEach(top_nav_item => {
      

        
        top_nav_item.addEventListener('click', () => {
            if (!top_nav_item.classList.contains('active')) {
        sidebar_lists.forEach((el)=>{
            
            if (!el.classList.contains(top_nav_item.dataset.target)) {
                el.classList.remove('active')
            }
    }),

        top_nav_items.forEach((el)=>el.classList.remove('active')),
        top_nav_item.classList.add("active"),
        document.querySelector(`.${top_nav_item.dataset.target}`).classList.add('active');
    }
})

      });

//   async  function load_home (example) {
//         // (e || window.event).preventDefault();
    
//         fetch(`./examples/${example}.html` /*, options */)
//         .then((response) => console.log(response.text()))
//         .then((html) => {
//             document.getElementsByClassName("content").innerHTML = html;
//         })
//         .catch((error) => {
//             console.warn(error);
//         });
//     } 
const content = document.querySelector(".content");
    async function load_home(example, example_class) {
        let url = `./examples/${example}.html`
        
        content.innerHTML = await (await fetch(url)).text();
        // content.classList.remove(...content.classList);
        content.setAttribute("class", "")
        content.classList.add(example_class)
        Prism.highlightAll();
      }

    const menu_examples = document.querySelectorAll('.examples_list-item')
    // console.log(menu_examples);
    menu_examples.forEach(menu_example => {

        menu_example.addEventListener('click', ()=>{
            if (!menu_example.classList.contains('active')) {
            menu_examples.forEach((el)=>{
            
                // if (!el.classList.contains('active')) {
                    el.classList.remove('active')
                // }
        }),
            menu_example.classList.add('active')
            load_home(menu_example.dataset.example, menu_example.dataset.exampleClass)
          
    }
    })
        
    })