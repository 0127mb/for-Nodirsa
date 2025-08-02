let data = [{
    id: 1,
    name: "Nodira",
    password: "Yuldasheva",
},
{
    id: 2,
    name: "Asilbek",
    password: "Xushvaqtov"
},
{
    id: 3,
    name: "Abdulaziz",
    password: "Abduqayumov"
},
{
    id: 4,
    name: "Ibrohim",
    password: "Rajaboyev"
}

]
  
 
    let inp1 = document.querySelector(".inp1");
    let inp2 = document.querySelector(".inp2");
    

    console.log(inp1.placeholder);
    console.log(inp2.placeholder);
  let btn = document.querySelector('button');

// alert('Hello my briliant teacher I created web-site for you the web-site will help your daily work I hope you will use it')
btn.addEventListener('click', () => {
    if(inp1.value == 'Nodira' && inp2.value == 'Yuldasheva'){
     window.location.href ='./Nodira.html'
} else{alert('eror write true name and surname or ask creator ')}

})