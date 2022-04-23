// form.onsubmit = (e) =>{
//     e.preventDefault(); // preventing form from submiting
// }

let x, y, cb;
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    
    checkboxes.forEach((item) => {
        if (item !== checkbox) 
        {
            item.checked = false
            
            
        }
    })
     cb = checkbox.value
    let sugar = document.querySelector(`.${cb}`)
    sugar.innerHTML = '<div class="pot" style="margin-bottom:10px;" ><img src="../images/sugar.png" alt=""><div class="much"><p>Vrei zahar in plus?</p><div class="ps"><button type="button" class="mr" onclick="plus()">+</button><div class="adg"></div><button type="button" class="ml" onclick="minus()">-</button></div></div> </div><div class="pot" ><img src="../images/milk.png" alt=""><div class="much"><p>Vrei lapte in plus?</p><div class="ps"><button type="button" class="mr" onclick="plusM()">+</button><div class="adgm"></div><button type="button" class="ml" onclick="minusM()">-</button></div></div> </div>'
    
    x = 0;
    y = 0;
    let sg = document.querySelectorAll('.d');
    
    sg.forEach((item)=>{
        
        if(item !=sugar || (item==sugar && checkbox.checked==false ))
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
       
       let xhr = new XMLHttpRequest();
       //creating XML object
       xhr.open("POST", "errors/errcheck.php", true);
       xhr.onload = ()=>{
          if(xhr.readyState === XMLHttpRequest.DONE)
          { console.log(1);
              if(xhr.status === 200){
                  
                  let data = xhr.response;
                  console.log(data);
                  if(data=="succes")
                  {  
                    window.location.replace("list.php");
                }
                  
                  
                  
                  
              }
          }
       }
   
       
       xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       xhr.send("x="+x+"&"+"y="+y+"&"+"cb="+cb);





       
    }
   

}
 


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
    if(x>0)
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
    if(y>0)
    y--;
    let qs = ''
    for(let i =0;i<y;i++)
         qs += '<div class="patrat"></div>';
         let adgm = document.querySelector('.adgm');
    adgm.innerHTML = qs;   
}