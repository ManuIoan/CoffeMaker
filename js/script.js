// form.onsubmit = (e) =>{
//     e.preventDefault(); // preventing form from submiting
// }

let x;
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    
    checkboxes.forEach((item) => {
        if (item !== checkbox) 
        {
            item.checked = false
            
            
        }
    })
    let cb = checkbox.value
    let sugar = document.querySelector(`.${cb}`)
    sugar.innerHTML = '<div class="pot" style="margin-bottom:10px;"><img src="../images/sugar.png" alt=""><div class="much"><p>How much sugar do you want?</p><div class="ps"><button type="button" onclick="plus()">+</button><div class="adg"><div class="patrat"></div></div></div></div> </div><div class="pot" ><img src="../images/milk.png" alt=""><div class="much"><p>How much milk do you want?</p><div class="ps"><button type="button" onclick="plusM()">+</button><div class="adgm"><div class="patrat"></div></div></div></div> </div>'
    
    x=1;
    y=1;
    let sg = document.querySelectorAll('.d');
    
    sg.forEach((item)=>{
        if(item !=sugar)
        item.innerHTML="";
    })
}

let cart = document.querySelector('.cart')

const Go =() =>{
    var checkboxes = document.getElementsByName('check');
    let ok=0, val;
    checkboxes.forEach((item) => {
        
        if(item.checked === true)
        {
         //console.log(item.value);
          val = item.value;
          ok=1;
        }   
        
       
        

        //console.log(item.name);
    })
    if(ok===0)
    {
        alert("You did not check something!")
    }
    else{
       console.log(val);
       window.location.replace("/components/list.html")
    }
   

}
 
let y=1;

const plus = ()=>{
    if(x<3)
    x++;
    let qs = ''
    for(let i =0;i<x;i++)
         qs += '<div class="patrat"></div>';
         let adg = document.querySelector('.adg');
    adg.innerHTML = qs;     
    



}


const minus = () => {
    if(x>1)
    x--;
    let qs = ''
    for(let i =0;i<x;i++)
         qs += '<div class="patrat"></div>';
         let adg = document.querySelector('.adg');
    adg.innerHTML = qs; 

}


const plusM = ()=>{
    if(y<3)
    y++;
    let qs = ''
    for(let i =0;i<y;i++)
         qs += '<div class="patrat"></div>';
         let adgm = document.querySelector('.adgm');
    adgm.innerHTML = qs;     
    



}
const minusM = ()=>{
    if(y>1)
    y--;
    let qs = ''
    for(let i =0;i<y;i++)
         qs += '<div class="patrat"></div>';
         let adgm = document.querySelector('.adgm');
    adgm.innerHTML = qs;   
}