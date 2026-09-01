//console.log("Hello I am using JS")


//function sum(a, b) {
//    return a + b;
//}


//function sqrtOfSum(a, b) {
//    const total = sum(a, b);
//    return Math.sqrt(total);
//}


// var a=23
// if(a<40){
//     var a=40;
//     console.log("value of a inside block="+a);
// }
// console.log("value of a outside block="+a);


// let a=23
// if(a<40){
//     let a=40;
//     console.log("value of a inside block="+a);
// }
// console.log("value of a outside block="+a);


// function sum(a, b) {
//     return a + b;
// }

// function msgWithSum(clbk,msg) {
//     const result=clbk(40,50);
//     console.log("Will,"+ msg + "your result is: " + result);
// }
// msgWithSum(sum,"Shorya");


// function loginHandler(username, password, clbk) {
//     if (username === "shorya" && password === "1234") {
//         clbk(null, "Login successful");
//     } else {
//         clbk("Username or password is incorrect", null);
//     }
// }


// console.log("One");
// for (let i = 0; i < 100000; i++) {
//     console.log("Value of i:", i);
// }
// // set Timeout(()=>{console.log("Two")}, 1000);
// console.log("Three");


const container = document.getElementById("container");
const button = document.getElementById("btn");
const loader = document.getElementById("loader");

button.addEventListener("click", ping);

const h1 = document.createElement("h1");
h1.innerText = "ABES Engineering College";
// console.log(button);
// console.log(container);

        function ping(){
    try{
        loader.innerHTML='<h2>Loading...</h2>';
        //alert('ping');
        container.innerHTML='<h2 style="color: blue;">Ping</h2>';
        h1.style.backgroundColor = 'cyan';
        h1.style.color = 'red';
        container.appendChild(h1);
        const img = document.createElement("img");
        img.src='https://i.giphy.com/3oEjI6SIIHBdRxXI40.gif';   
        img.setAttribute('height','200px');
        container.appendChild(img);
    }
    catch(error){
        loader.innerHTML='<h2 style="color: red;">Error: '+error+'</h2>';
    }
    finally{
        loader.innerHTML='';
    }
}