let nameCount=8000000000;
const body=document.getElementById('B')


body.addEventListener("click",()=>{
    console.log(nameCount);
    
   nameCount--;
   console.log(nameCount);
   
    document.getElementById('counter').innerHTML=nameCount
})
