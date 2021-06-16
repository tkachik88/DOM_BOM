let elemBody = document.body;
console.log(elemBody);

let elemChilds = elemBody.childNodes;
  console.log(elemChilds);


let allChilds = document.querySelectorAll('li');
console.log(allChilds.length);

let arr = [];
       for(let elem of allChilds){
         arr.push(elem.innerHTML);
       }
   
       console.log(arr);