function DisplayValue(data){  //input box always store string type data
    i1.value=i1.value+data
}
function Allclear(){
    i1.value=""
}
function output(){
    i1.value=eval(i1.value)
}
function back()
{
    
    i1.value=i1.value.slice(0,-1) //here remove last element using slice function...

}

//eval()is a function used for evaluate the string type data
//eg :  eval(3*7) o/p is 21