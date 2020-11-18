let delet =document.querySelectorAll(".product0 ion-icon ")
let colorr =  document.querySelectorAll(".omg")


let d = "color mawjdo"


let addd =   document.querySelectorAll(".add")
let delll = document.querySelectorAll(".del")
let mop = document.querySelectorAll(".product0 input")
let sum =0 


//remve 
for(let i =0 ; i<delet.length ; i++) { 
  delet[i].addEventListener("click",function(){ 
    delet[i].parentElement.remove()
  })
} 
//img color 
for(let i=0 ; i<colorr.length ; i++) { 
  
  colorr[i].addEventListener("click",function(){
    if(d=="color mawjdo") { 
      colorr[i].style.filter="grayscale(0%)" 
      d="colormoch"
    } else if(d=="colormoch") { 
      colorr[i].style.filter="grayscale(100%)" 
      d="color mawjdo"
    }
  })
}

for (let i = 0; i < addd.length; i++) {
  addd[i].addEventListener('click', function () {
    addd[i].nextElementSibling.innerText++;
    total()
  });
}

for (let i = 0; i < delll.length; i++) {
  delll[i].addEventListener('click', function () {
    if(delll[i].previousElementSibling.innerText>0){
      delll[i].previousElementSibling.innerText--; 
      total()
    }
    
    
  });
} 

function total() { 
  // total chaque elem
  let mmpazd =  document.getElementsByClassName("morgd") 
  // qté
  let text = document.querySelectorAll(".moh") 
  // prix
  let morg=  document.querySelectorAll(".morg")
  let totalp = document.getElementById("wisse")
  
  for(let i=0 ; i<morg.length ; i++) { 
    console.log(mmpazd[i].innerText)
    // console.log(text[i].innerText)

    // sum+=morg[i].innerText*text[i].innerText
    sum=morg[i].innerText*text[i].innerText
     //allvprix 
     mmpazd[i].innerText=sum
    //  console.log(mmpazd[i].innerText)
  }
  for(let i=0 ; i<mmpazd.length ; i++) { 
    console.log(mmpazd)
  //let o = 0
  
  sum+= mmpazd[i].innerText
  console.log(o) 
  totalp.innerHTML=sum
  } 
 
} 