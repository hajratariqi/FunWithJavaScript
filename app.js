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