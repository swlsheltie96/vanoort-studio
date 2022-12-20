console.log("index")
window.addEventListener("load", (event) => {

  //MASTHEAD 
  let masthead = document.querySelector(".masthead-container");

  //MAIN MENU
  let menu = document.querySelector(".menu-main");
  let precontainer = document.querySelector(".menu-precontainer");
  // let products = precontainer.querySelectorAll(".product");

  let cols = document.querySelectorAll(".menu-section");
  let big_products = document.querySelectorAll(".product-image");
  let all_products = document.querySelector(".all-products");

  let main = document.querySelector(".main");

  let cur_height_total = 0;
  let cur_col = 0;
  let setup_class 


  //SET BODY HEIGHT OF ORIGINAL AND CLONE MENU -------------------------------------------------------------------------------------//
  let mastheadheight = masthead.offsetHeight;
  console.log(mastheadheight)
  setbodyheight(mastheadheight)
  // console.log("boo")


});

// window.addEventListener("scroll", (event) => { 
  
// })


//OTHER FUNCTIONS    -------------------------------------------------------------------------------------//

function setbodyheight(height) {
  // Checking for css variables support
  if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
    const root = document.documentElement;
    let bodyheight = window.innerHeight - height;
    root.style.setProperty('--beneath-masthead', `${bodyheight}px`);
    root.style.setProperty('--masthead-height', `${height}px`);
    // console.log("hi")
  }
 }


