function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
    
}

let cart = document.querySelector('.cart')

const Go =() =>{
    var checkboxes = document.getElementsByName('check');
    let ok=0;
    checkboxes.forEach((item) => {
        
        if(item.checked === true)
        {
          console.log(item.value);
          ok=1;
        }   
        console.log(ok);
       
        

        //console.log(item.name);
    })
    if(ok===0)
    {
        alert("You did not checked something!")
    }
    else{
        
    }
   

}