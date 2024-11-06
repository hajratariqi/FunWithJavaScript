let isExpend = false
const expandText = (ele, type) =>{
    if(isExpend == false){
     ele.previousSibling.style.display = 'block'
     isExpend = true
    }else{
        ele.previousSibling.style.display = 'none'
        isExpend = false
    }
}