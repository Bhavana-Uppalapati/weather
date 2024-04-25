let input_city = document.getElementById("input_city")
let btn = document.getElementById("btn")
let Name = document.getElementById("Name");
let Temp = document.getElementById("Temp");
let desc = document.getElementById("desc");
const key = "9f5947d25c12a41faf47e95024e4f3fc"
btn.addEventListener('click',()=>{
    city = input_city.value
    if(city === ""){
        alert("enter valid city")
    }else{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,{
            method: 'GET'
        }).then((res)=>{
            res.json().then(data=>{
              console.log(data);
              const{name} = data;
            
              Name.innerHTML = name;
              const { temp } = data.main;
              Temp.innerHTML = Math.floor(temp - 273);
              const { description } = data.weather[0];
              desc.innerHTML = description;
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
})
