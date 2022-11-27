console.log("index")
window.addEventListener("load", (event) => {

  //MASTHEAD 
  let masthead = document.querySelector(".masthead-container");

  //MAIN MENU
  let menu = document.querySelector(".menu-main");
  let precontainer = document.querySelector(".menu-precontainer");
  let products = precontainer.querySelectorAll(".product");

  let cols = document.querySelectorAll(".menu-section");
  let big_products = document.querySelectorAll(".product-image");
  let all_products = document.querySelector(".all-products");

  let main = document.querySelector(".main");

  let cur_height_total = 0;
  let cur_col = 0;
  let setup_class 


  //SET BODY HEIGHT OF ORIGINAL AND CLONE MENU -------------------------------------------------------------------------------------//
  let mastheadheight = masthead.offsetHeight;
  setbodyheight(mastheadheight)
  // console.log("boo")

  //INITIALIZE CANVAS-------------------------------------------------------------------------------------//
  // let int_cover_canv = new jsCanvas(interactive_cover);
  // int_cover_canv.createCanvas();
  // int_cover_canv.slider = slider;
  // for (let i = 0; i < images.length; i++) {
  //   images[i].onload = int_cover_canv.pasteImages(images[i]);
  //   if (i == 0) {
  //     int_cover_canv.newImage();
  //     images[1].classList.add("on")
  //   }
  //   // int_cover_canv.sliderUpdate(slider.value);
  // }




  
  

  //INTERSECTION OBSERVER FOR BIG PRODUCT IMAGES-------------------------------------------------------------------------------------//
  // const io = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     let id = entry.target.id;
  //     let idslice = id.slice(12) //"productlink-"
  //     let menu_product = document.querySelector("#cloned-menuitem-"+ idslice);
  //     if (entry.isIntersecting) {
  //       menu_product.style.opacity = 1;
  //     } else {
  //       menu_product.style.opacity = 0;
  //     }
  //   });
  // });
  // big_products.forEach((el) => {
  //   io.observe(el);
  // });


  //MOVE PRODUCTS INTO COLUMNS -------------------------------------------------------------------------------------//
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    if (i==0) {
      setup_class = product.classList[1]
    }
    let cur_class = product.classList[1] //SET IN VO-MAINMENU, TAG NAME IS ALWAYS SECOND IN CLASS LIST 
    let productheight = product.getBoundingClientRect().height

    console.log(i+1, product.clientHeight, cur_height_total)

    if (cur_height_total >= window.innerHeight - mastheadheight || setup_class != cur_class) {
        console.log("next col")
        setup_class = cur_class
        cur_col++;
        cur_height_total = 0;
    }

    cols[cur_col].appendChild(product);
    cur_height_total += productheight;

  }

    //THUMBNAIL HOVER EVENT LISTENER -------------------------------------------------------------------------------------//

    let menuitems = menu.querySelectorAll(".product")
    console.log(menu,menuitems)
    menuitems.forEach((item)=>{
      let curid = item.id
      let realid = curid.slice(9)
      console.log(item, realid)
      if (document.querySelector("#thumbnail-"+realid)) {
        let thumb= document.querySelector("#thumbnail-"+realid)
        item.addEventListener("mouseover", (e)=>{
          console.log("mouseddd")
          thumb.classList.add("on")
        })
        item.addEventListener("mouseout", (e)=>{
          thumb.classList.remove("on")
        })
      }
  
      })
      

  //CLONE MENU AND MOVE THUMBNAIL DIV-------------------------------------------------------------------------------------//
  menu.id = "original";
  let clickable_products = document.querySelectorAll("#original .product");
  let thumbnail = document.querySelector("#thumbnail");
  let menu_clone = menu.cloneNode(true);
  menu_clone.id = "clone";
    main.appendChild(menu_clone);
    main.insertBefore(menu_clone, all_products);
    menu_clone.classList.add("menu-clone");
    if (thumbnail) {
    menu.appendChild(thumbnail);
  }

  let menuclone_changeids = menu_clone.querySelectorAll(".product")
  menuclone_changeids.forEach((e)=>{
    let cur_id = e.id
    let cloned = "cloned-"+cur_id
    e.id = cloned
  })

});

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