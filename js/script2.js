let name = document.getElementById('txt');
let alert = document.querySelector('.alert');
const form = document.querySelector(".main form");
console.log(name);

form.onsubmit = (e) =>{
    e.preventDefault(); // preventing form from submiting
}

// const DoIt = ()=>{
//     console.log(name.value);
//     let val = name.value;
//     if(val.length<3 || val.length>20)
//     alert.innerHTML="Numele trebuie sa fie intre 3 si 20 de caractere!!!";
//     else
//     alert.innerHTML="";
    



// }

const DoIt = ()=>{
    
    

    let xhr = new XMLHttpRequest();
    //creating XML object
    xhr.open("POST", "components/errors/ername.php", true);
    xhr.onload = ()=>{
       if(xhr.readyState === XMLHttpRequest.DONE)
       {
           if(xhr.status === 200){
               
               let data = xhr.response;
               if(data=="succes")
               {   
                   window.location.reload();}
               else
               alert.innerHTML = data;
               
               
               
           }
       }
    }


    let formData = new FormData(form);

    xhr.send(formData);


}


