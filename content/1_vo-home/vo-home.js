console.log("vo-home");
var taglist =["Tops", "Bottoms", "Accessories"]
var productlabels = {}
//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
var lastKnownScrollPosition = 0;
var ticking = false;

function doSomething(scrollPos) {
  var scroll = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  // scroll = scroll - 2*window.innerHeight
  document.documentElement.style.setProperty('--scroll-var', scroll + "px");
}

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});


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
  let cur_col_count =0;
  let setup_class 
  let setup_class_num;



  // //SET BODY HEIGHT OF ORIGINAL AND CLONE MENU -------------------------------------------------------------------------------------//
  let mastheadheight = masthead.offsetHeight;
  // setbodyheight(mastheadheight)
  console.log(mastheadheight)

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



  
  

  //INTERSECTION OBSERVER FOR BIG PRODUCT IMAGES-------------------------------------------------------------------------------------//
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let id = entry.target.id;
      let idslice = id.slice(12) //"productlink-  "
      let menu_product = document.querySelector("#cloned-menuitem-"+ idslice);
      // let menu_product_bounds = menu_product.getBoundingClientRect()
      // let entry_bounds = entry.target.getBoundingClientRect();
      // console.log(id, menu_product, menu_product_bounds)
      // console.log(entry.intersectionRect, entry.rootBounds)
      // console.log(menu_product)
      if (entry.isIntersecting) {
        // menu_product.style.opacity = 1;
        // productlabels[idslice]  = "true"
        // whileIntersecting(entry.target, idslice, menu_product)
        // console.log(menu_product)
        // menu_product.style.display = "flex"
        // menu_product.style.zIndex = 2
      } else {
        // productlabels[idslice] = "false"
        // whileIntersecting(entry.target, idslice, menu_product)
        // menu_product.style.display = "none" //TOO SLOW, NEED TO INCRASE ROOT MARGINE.... 
        // menu_product.style.zIndex=0
      }
    });
  });
  big_products.forEach((el) => {
    io.observe(el);
  });


  // //MOVE PRODUCTS INTO COLUMNS -------------------------------------------------------------------------------------//
  for (let i = 0; i < products.length; i++) {
    let product = products[i];
    // let cur_class //SET IN VO-MAINMENU, TAG NAME IS ALWAYS SECOND IN CLASS LIST 
    let productheight = product.getBoundingClientRect().height
    // console.log(setup_class)
    // console.log(i+1, product.clientHeight, cur_height_total)
    //|| 


    cur_height_total += productheight + (0.25 *16); //0.5REM MARGIN BOTTOM
    // console.log(cur_height_total, i, products[i])
    if (i==0) {
      setup_class = product.classList[1]
      setup_class_num=0
    }


    if (cur_height_total >= window.innerHeight - mastheadheight ) {
        console.log("next col",  window.innerHeight - mastheadheight)
        cur_col++;
        cur_col_count=1
        cur_height_total = productheight  + (0.25 *16); //0.5REM MARGIN BOTTOM;

    }
    console.log(setup_class, product.classList[1])
    if (i==0 || product.classList[1] != setup_class) {
      let col_hed = taglist[setup_class_num]
      let hed_div = document.createElement("div")
      let hed_p = document.createElement("h6")
      let hed_content = document.createTextNode(col_hed);
      hed_p.appendChild(hed_content)
      hed_div.appendChild(hed_p)
      console.log(i, setup_class)
      cols[cur_col].appendChild(hed_div);
      // 
      hed_div.classList.add("menu-hed")
      if (i==0 || cur_col_count==1 ){
        hed_div.classList.add("top")
        cur_height_total += 1.5* 16 //1 REM = 16
      } else {
        cur_height_total += 2.5* 16 //1 REM = 16
      }
      if ( product.classList[1] != setup_class) {
        setup_class = product.classList[1]

      }
      setup_class_num++

      
    }
    cols[cur_col].appendChild(product);
    cur_col_count ++ 
  }
  precontainer.remove();
  //THUMBNAIL HOVER EVENT LISTENER -------------------------------------------------------------------------------------//
  let menuitems = menu.querySelectorAll(".product")
  // console.log(menu,menuitems)
  menuitems.forEach((item)=>{
    let curid = item.id
    let realid = curid.slice(9)
    // console.log(item, realid)
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
  // menu.id = "original";
  // let og_prods = document.querySelectorAll("#original .product");
  let thumbnail = document.querySelector("#thumbnail");
  // let menu_clone = menu.cloneNode(true);
  // menu_clone.id = "clone";
  // console.log(menu_clone)

  let labels = menu.querySelectorAll(".product-hed")
  let all_labels = document.querySelector(".all-labels")
  let label_container 
  for (let i = 0; i<labels.length; i++ ){
    let cloned = labels[i].cloneNode(true)
    cloned.id = "cloned-"+menuitems[i].id
    cloned.classList.add("clone")

    cloned_data = labels[i].getBoundingClientRect()
    // console.log(cloned_data)
    cloned.style.opacity = 1;
    cloned.style.position="absolute"
    cloned.style.width = cloned_data.width +"px"
    cloned.style.top = cloned_data.top +"px"
    cloned.style.height = cloned_data.height +"px"
    cloned.style.left = cloned_data.left +"px"

    if (i%2 ==0) {
      // console.log(i)
      label_container  = document.createElement("div")
      label_container.appendChild(cloned)
      // console.log(label_container)
      // label_container = false;
    } else {
      // console.log(i, label_container)
      label_container.appendChild(cloned)
      let label_container_outer = document.createElement("div")
      label_container_outer.appendChild(label_container)
      all_labels.appendChild(label_container_outer)

      label_container.style.top = "calc(var(--scroll-var) - " + (((i+1)/2 *100)+ 200) + "vh)"
      label_container_outer.classList.add("label-container_outer")
      label_container.classList.add("label-container")
      label_container = false;
    }
    

    // console.log(cloned)


  }

  // main.appendChild(menu_clone);
  // main.insertBefore(menu_clone, all_products);
  // menu_clone.classList.add("menu-clone");

  // let menuclone_changeids = menu_clone.querySelectorAll(".product")
  // menuclone_changeids.forEach((e)=>{
  //   let cur_id = e.id
  //   let cloned = "cloned-"+cur_id
  //   e.id = cloned
  // })


  menu.appendChild(thumbnail);

});
//END ON LOAD FUNCTIONS --------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------------------------------------//




//---------------------------------------------------------------------------------------------------------------------//

//FUNCTIONS FOR PRODUCT SCROLL -------------------------------------------------------------------------------------//
function whileIntersecting(target, targetid, label) {
  // console.log(target, label)
  let targetbounds = target.getBoundingClientRect()
  let labelbounds = label.getBoundingClientRect()
  // console.log(productlabels, target, targetbounds, labelbounds, productlabels[targetid])
  if (productlabels[targetid] =="true") {
    // console.log("check intersect")
    if (targetbounds.y < labelbounds.y + labelbounds.height && targetbounds.y+targetbounds.height > labelbounds.y) {
      label.style.opacity = 1;
      // console.log(target, label, "INTERSECTED")
    }else {
      label.style.opacity = 0;
      // console.log(target, label, "NOT INTERSECTED")
    }
    setTimeout(() => {
      whileIntersecting(target, targetid, label)
    }, 100)
  } else {
    
    return;
  }


}


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
    // console.log(window.innerWidth, )
    this.canvas = this.setHiDPICanvas(document.body.clientWidth, window.innerHeight);
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