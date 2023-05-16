var h1=document.createElement("h1");
h1.innerHTML="Thirukkural";
h1.style.textAlign="center";
h1.style.marginTop="50px";
document.body.append(h1);

var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","thiru");
input.style.margin="10px";
input.style.width="20%";
input.setAttribute("placeholder","Enter the kural number :");


var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.style.margin="10px";
button.innerHTML="Search";
button.addEventListener("click",startfu);
var disp =document.createElement("div");
        disp.setAttribute("type","text");
        disp.style.textAlign="center";
       disp.style.marginTop="10px";
async function startfu() {
    
    let num= document.getElementById("thiru").value;
    let numvalue=parseInt(num);
  try{
        let res = await fetch(`https://api-thirukkural.vercel.app/api?num=${num}`);
        let res1 = await res.json();
        
        disp.innerHTML=   `<span>Thirukkural Number :${num}</span><br><br>
        <span class="fw-bold fs-3 bg-info-subtle">${res1.line1}</span><br>
        <span class="fw-bold fs-3 bg-info-subtle">${res1.line2}</span><br><br><br>
        <span class="fw-bold fs-5 ">Tamil meaning :   ${res1.tam_exp}</span><br><br>
        <span class="fw-bold fs-5">English meaning :  ${res1.eng_exp}</span><br>` ;
    }catch{
        disp.innerHTML=`<span>Thirukkural Number :${num} is not valid number</span><br><br>`;
      
      
    }

  
}
var img =document.createElement("img");
img.src="thiruvalluvar.png";
img.width = 150;
document.body.setAttribute("class","bg-warning-subtle p-2 text-dark bg-opacity-25");

div.append(img,input,button);
document.body.append(div);
document.body.append(disp);


