// form.onsubmit = (e) =>{
//     e.preventDefault(); // preventing form from submiting
// }


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
    sugar.innerHTML = '<img src="../images/sugar.png" alt=""><div class="much"><p>How much sugar do you want?</p><div class="ps"><button type="button" onclick="plus()">+</button><div class="adg"><div class="patrat"></div></div></div></div>'

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
let x=1;
let adg = document.querySelector('.adg');
const plus = ()=>{
    if(x<3)
    x++;
    let qs = ''
    for(let i =0;i<x;i++)
         qs += '<div class="patrat"></div>';
    adg.innerHTML = qs;     
    



}