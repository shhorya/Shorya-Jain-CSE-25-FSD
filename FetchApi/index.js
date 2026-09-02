// console.log("hiii");


const root = document.getElementById("container");
const button=document.getElementById("btn");
const display=document.getElementById("disp");
const loader=document.getElementById("loader");

async function fetchData() {
    // alert("hiii");
    try {
        loader.innerHTML="<h2 style='color: blue;'>Loading...</h2>";
        const serverData= await fetch("https://fakestoreapi.com/products/")
        const jsondata= await serverData.json();
        // console.log(jsondata[0].title);
        // console.log(serverData);
        // disp.innerHTML=`${jsondata[0].title}`;
        let table=`<table border="2">
        ${
            jsondata.map((ele)=>(
                `<tr>
                <td><img src="${ele.image}" height="100" width="100"></td>
                <td>${ele.title}</td>
                <td>${ele.description}</td>
                <td>${ele.price}</td>
            </tr>`))
        }
        </table>`;
        display.innerHTML=table;
    }
    catch(e){
        console.log(e);
    }
    finally{
        loader.innerHTML="";
    }
}
button.addEventListener("click", fetchData);