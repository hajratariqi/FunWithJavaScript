let isExpend = false
const expandText = (ele) =>{
    if(isExpend == false){
     ele.previousSibling.style.display = 'block'
     isExpend = true
     ele.innerHTML = 'read more'
     
    }else{
        ele.previousSibling.style.display = 'none'
        isExpend = false
        ele.innerHTML = 'read less'
    }
}

const makeInvisible = (image) =>{
        image.className += ' hidden'; 

} 
let backToBtn = false
const changeColor = (btn) =>{
    const allPEle = document.getElementsByTagName('p');
   

    if(backToBtn == false){
        for(let i of allPEle){
        i.style.color = 'red'
        btn.innerHTML = 'Reset'
    }
    backToBtn = true 
    }else{
        for(let i of allPEle){
        i.style.color = 'black'
        btn.innerHTML = 'Change color'
        }
        backToBtn = false
    }
} 

var size = 5;
var a = 5;
var size = 4;
for(var j=size; j>=0 ; j--){
  a = a-2;
}
