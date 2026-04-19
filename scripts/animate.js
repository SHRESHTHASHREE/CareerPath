function debounce(func, timeout = 50){
    let timer=null;
    return (...args) => {
      if (timer == null){
         func.apply(this, args);
      }
        clearTimeout(timer);
      timer = setTimeout(()=>{
        timer=null;
      },timeout)
    };
  }
  function sticky(){

    if (real_start.scrollTop > 20 && real_start.scrollTop < vh(5*100)){
    // console.log("hey");
        window.scrollBy(0,real_start.getBoundingClientRect().y);}
  }
 
  const processChange = debounce(() => sticky());
real_start = document.getElementById("real_start");
function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

real_start.addEventListener("scroll",processChange);
const pirce_cut = document.querySelector(".price_cut");
const scroll = document.getElementById("real_start");
let ct=1;
const pirce_real = document.querySelector(".price_real");
const feature_card = document.querySelectorAll("section");
const type_text = document.querySelectorAll(".type-text");

let l=0;
function scrollup(type) {
    l+=0.35;
    if (type=="up") {
        
    window.scrollBy({
        top: -200*Math.E**l,
        behavior: "smooth",
      });
    }
    else {

        window.scrollBy({
            top: 100*Math.E**l,
            behavior:"smooth"
          });
    }
      setTimeout(()=>{
        l=0
      },2000)
    
}

const dec_scrollup = debounce(scrollup);

scroll.addEventListener("scroll", (e)=>{

if (e.target.scrollTop ==0) {
    
    scrollup("up")
    real_start.removeEventListener("scroll", processChange);
    setTimeout(()=>{
        real_start.addEventListener("scroll",processChange);
    },1000);
    }
if (Math.abs(real_start.scrollHeight-real_start.clientHeight-real_start.scrollTop)<9) {
    dec_scrollup();
}

// console.log((e.target.childElementCount-2)*vh(100)-e.target.scrollTop)
// console.log(e.target.scrollTop, vh(5*100),e.target.scrollTop > vh(5*100))
})

const options = {
    root:null,
    threshold: 0.35
};
const options2 = {
    root:null,
    threshold: 0.5
};
const options3 = {
    root:null,
    threshold: 0.2
};

const observer = new IntersectionObserver((entries,observers)=>{
entries.forEach(entry=>{
    if (entry.isIntersecting){

    if (entry.target.getAttribute("class")=="feature-card") {
    document.querySelectorAll(".card").forEach((entr)=>{
entr.classList.add("showup");
    })
    }
}
else {

}
})
  
},options)
    let count_c =1;
const tyobs = new IntersectionObserver((entries,tyobs)=>{
entries.forEach((entry)=>{
console.log(entry)
})
},options2)
function getStarted() {
    feature_card.forEach(entry=>{
        observer.unobserve(entry);
        })

        setTimeout(()=>{
            document.querySelectorAll(".card").forEach((entr)=>{
                entr.classList.add("showup");
            
            })
        },100);

    }
feature_card.forEach(entry=>{
    observer.observe(entry);
    })




const canvas_top_decor = document.getElementById("top-decor"), canvas_top_decor_w = canvas_top_decor.width, canvas_top_decor_h = canvas_top_decor.height;
const ctx_top_decor = canvas_top_decor.getContext("2d");

async function animate() {
    ctx_top_decor.clearRect(0,0,canvas_top_decor_w,canvas_top_decor_h);
    for (let i =0;i<=10;i++) {
    let width_random = Math.random()*canvas_top_decor_w;
    let height_random = Math.random()*canvas_top_decor_h;
    let radius_random = Math.random()*10.5;
    ctx_top_decor.beginPath();
    ctx_top_decor.arc(width_random,height_random,radius_random,0,Math.PI*2);
    ctx_top_decor.fillStyle = `rgb(255,255,255,${Math.random()*0.1})`;
    ctx_top_decor.fill();    
    }
    await new Promise((r)=>{
        setTimeout(()=>{
            r();

        },80)
    })
        animate();
}
animate();
const type =document.getElementById("prof");
const size_arr = ["Engineer","Doctor","Lawyer","Manager"]
let count = 0;
let size =1;

setInterval(()=>{
    
type.style.width = size +"ch";
if (size<=size_arr[count].length) {
size +=1;
}
else {
    size=0;
    if (count<size_arr.length-1) {
    count+=1;
    }
    else {
        count=0;
    }
    type.style.width = 0 +"ch";
    type.textContent = size_arr[count]
}
},200)