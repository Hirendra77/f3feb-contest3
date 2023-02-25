const form = document.getElementById("form")
// const username = document.getElementById('username');

// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const cnfpassword = document.getElementById('cnfpswd');
// const btn = document.getElementById('btn')
 

// btn.addEventListener('click',validate)
// function validate(e){
//     e.preventDefault();
//     if(username.value.trim()=="" || password.value.trim()=="" || email.value.trim()==""){
//   alert("please fill value");
//   return false;
//     }
    
//     else if(password.value != cnfpassword.value){
//         alert("password not matched")
//         return false;
//     }
//     else{
//         return true;
//     }
// }
let users=[]
function signupfunc(e){
  
    e.preventDefault();
const email = document.getElementById('email').value;
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const user={
    email:email,
    uername:username,
    password:password,
}
users.push(user)
 const json = JSON.stringify(user);
 localStorage.setItem('username',json);
 console.log('user added');
}

function loginfunc(e){
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const result = document.getElementById('result')
    
    const data = JSON.parse(localStorage.getItem('user'));
   
    console.log(data);
    if(users==null){
        result.innerHTML='invalid username'
    }
    else if(username==data.username && password == data.password){
        result.innerHTML = 'login successfull'
    }
    else{
        result.innerHTML ='wrong credentials'
    }
}
