console.log("vo-home");

//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
window.addEventListener("load", (event) => {
  //COVER
  let interactive_cover = document.querySelector(".interactive-cover-canvas");
  let images = document.querySelectorAll(".interactive-image");
  let slider = document.querySelector("#cover-slider");
   slider.addEventListener("input", function(e) {int_cover_canv.sliderUpdate(e.target.value)})
  //MASTHEAD 
  let masthead = document.querySelector(".masthead-container")
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


  // //SET BODY HEIGHT OF ORIGINAL AND CLONE MENU -------------------------------------------------------------------------------------//
  // let mastheadheight = masthead.offsetHeight;
  // setbodyheight(mastheadheight)
  // // console.log("boo")

  //INITIALIZE CANVAS-------------------------------------------------------------------------------------//
  let int_cover_canv = new jsCanvas(interactive_cover);
  int_cover_canv.createCanvas();
  int_cover_canv.slider = slider;
  for (let i = 0; i < images.length; i++) {
    images[i].onload = int_cover_canv.pasteImages(images[i]);
    if (i == 0) {
      int_cover_canv.newImage();
      images[1].classList.add("on")
    }
    // int_cover_canv.sliderUpdate(slider.value);
  }


  //THUMBNAIL HOVER EVENT LISTENER -------------------------------------------------------------------------------------//
  // let thumbnailimages = thumbnail.querySelectorAll("img")
  // console.log(thumbnailimages)
  // let menuitems = menu.querySelectorAll(".product")
  // menuitems.forEach((item)=>{
  //   let curid = item.id
  //   let realid = curid.slice(9)
  //   // console.log(item, realid)
  //   if (document.querySelector("#thumbnail-"+realid)) {
  //     let thumb= document.querySelector("#thumbnail-"+realid)
  //     item.addEventListener("mouseover", (e)=>{
  //       console.log("mouseddd")
  //       thumb.classList.add("on")
  //     })
  //     item.addEventListener("mouseout", (e)=>{
  //       thumb.classList.remove("on")
  //     })
  //   }

  //   })

  
  

  //INTERSECTION OBSERVER FOR BIG PRODUCT IMAGES-------------------------------------------------------------------------------------//
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let id = entry.target.id;
      let idslice = id.slice(12) //"productlink-"
      let menu_product = document.querySelector("#cloned-menuitem-"+ idslice);
      if (entry.isIntersecting) {
        menu_product.style.opacity = 1;
      } else {
        menu_product.style.opacity = 0;
      }
    });
  });
  big_products.forEach((el) => {
    io.observe(el);
  });


  // //MOVE PRODUCTS INTO COLUMNS -------------------------------------------------------------------------------------//
  // for (let i = 0; i < products.length; i++) {
  //   let product = products[i];
  //   if (i==0) {
  //     setup_class = product.classList[1]
  //   }
  //   let cur_class = product.classList[1] //SET IN VO-MAINMENU, TAG NAME IS ALWAYS SECOND IN CLASS LIST 
  //   let productheight = product.getBoundingClientRect().height

  //   console.log(i+1, product.clientHeight, cur_height_total)

  //   if (cur_height_total >= window.innerHeight - mastheadheight || setup_class != cur_class) {
  //       console.log("next col")
  //       setup_class = cur_class
  //       cur_col++;
  //       cur_height_total = 0;
  //   }

  //   cols[cur_col].appendChild(product);
  //   cur_height_total += productheight;

  // }

  //CLONE MENU AND MOVE THUMBNAIL DIV-------------------------------------------------------------------------------------//
//   menu.id = "original";
//   let clickable_products = document.querySelectorAll("#original .product");
//   let thumbnail = document.querySelector("#thumbnail");
//   let menu_clone = menu.cloneNode(true);
//   menu_clone.id = "clone";
//   main.appendChild(menu_clone);
//   main.insertBefore(menu_clone, all_products);
//   menu_clone.classList.add("menu-clone");
//   menu.appendChild(thumbnail);
//   let menuclone_changeids = menu_clone.querySelectorAll(".product")
//   menuclone_changeids.forEach((e)=>{
//     let cur_id = e.id
//     let cloned = "cloned-"+cur_id
//     e.id = cloned
//   })

});
//END ON LOAD FUNCTIONS --------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//





//---------------------------------------------------------------------------------------------------------------------//

//FUNCTIONS FOR THE INTERACTIVE TOP -------------------------------------------------------------------------------------//
function nextImageDOM(i) {
  let images = document.querySelectorAll(".interactive-image");
  images[i].classList.remove("on")
  images[i+1].classList.add("on")
  console.log(i, i+1)
}
//---------------------------------------------------------------------------------------------------------------------//

//CANVAS CLASS FOR INTERACTIVE TOP -------------------------------------------------------------------------------------//
class jsCanvas {
  constructor(canvas) {
    // console.log(canvas)
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.images = [];
    this.cur_image = -1;
    this.sliderval = 1;
    this.sliderdirection = 1;
    this.updateImage();
  }
  createCanvas(canvas, aspectratio) {
    // console.log(canvas)
    this.canvas = this.setHiDPICanvas(window.innerWidth, window.innerHeight);
    // this.ctx.font = "25px Helvetica";
  }
  pixel_ratio() {
    let ctx_pxr = this.ctx,
      dpr = window.devicePixelRatio || 1,
      bsr =
        ctx_pxr.webkitBackingStorePixelRatio ||
        ctx_pxr.mozBackingStorePixelRatio ||
        ctx_pxr.msBackingStorePixelRatio ||
        ctx_pxr.oBackingStorePixelRatio ||
        ctx_pxr.backingStorePixelRatio ||
        1;

    return dpr / bsr;
  }
  setHiDPICanvas(w, h, ratio) {
    // console.log(canv)
    if (!ratio) {
      ratio = this.pixel_ratio();
    }
    // let can = canv;
    this.canvas.width = w * ratio;
    this.canvas.height = h * ratio;
    this.canvas.style.width = w + "px";
    this.canvas.style.height = h + "px";
    this.canvas.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
    return this.canvas;
  }
  pasteImages(img) {
    // console.log("hi");
    this.images.push(img);
  }

  sliderUpdate(value) {
    console.log(value)
    this.sliderval = Number(value)
  }
  newImage() {
    // console.log(this.images, this.cur_image)
    console.log("new image")
    this.cur_image= (this.cur_image+1) % this.images.length; // 
    console.log(this.images, this.cur_image)
    this.ctx.drawImage(
      this.images[this.cur_image], 0, 0,
      this.canvas.width / 2,
      this.canvas.height / 2
    );
    this.cur_data = this.ctx.getImageData(0, 0,
      this.canvas.width,
      this.canvas.height
    );
    this.cur_data_copy = this.ctx.getImageData(0, 0,
      this.canvas.width,
      this.canvas.height
    );
  }
  updateImage() {
    if (this.cur_image > -1) {
    // console.log("called")

      let data = this.cur_data.data;
      let data_copy = this.cur_data_copy.data;
      for (let i = 0; i < data.length; i += 4) {
        let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        if (avg <= this.slider.value) {
          data_copy[i + 3] = 0;
        } else {
          data_copy[i + 3] = 255;
        }
      }
      this.ctx.putImageData(this.cur_data_copy, 0, 0);
      // console.log(this.sliderval)
      if (this.sliderval <= 0 ){
        this.sliderdirection = 1;
        // this.newImage();
        nextImageDOM(this.cur_image)

      } else if (this.sliderval >= 255){
        console.log("switch")
        this.sliderdirection = -1;
        this.newImage();


      }
  
      this.sliderval += this.sliderdirection 
      this.slider.value = Number(this.sliderval)
      // console.log(this.sliderval, this.slider.value, this.sliderdirection)
       
    }
    requestAnimationFrame(this.updateImage.bind(this));
  }
}

//---------------------------------------------------------------------------------------------------------------------//