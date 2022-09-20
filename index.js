const URL_BASE = "https://jonathan-robles.github.io/api/txt.json";
let txt =""; let checkArr ="";
fetch(URL_BASE)
.then((response) =>{return response.json()})
.then((data)=>{ 
    for(x in data){
      // txt += `<label>${x}</label>: `;
        
      if (Array.isArray(data[x]) == true) {
        txt += `<label>${x}</label>: `;
        txt += `<select>`;
        
        data[x].forEach(arr =>{
          // txt +=`${arr}<input type="checkbox">`
         txt += `<option value="${arr}"> ${arr}</option>`;
        });
        txt += `</select><br>`;
      }else{
  txt +=`<input type="text" placeholder="${x}" ><br>`;
      } 
        let div = document.querySelector(".div");
      div.innerHTML = txt;
      // console.log(txt);
}
  
})

let prueba = document.getElementsByTagName("select");
let labels = document.getElementsByTagName("lable");

console.log(prueba[0].value)
