var data, currency1, currency2, value1, value2;
function createElement(tagName,classAttributeValue,attribute1,AttributeValue1,content){
    var element = document.createElement(tagName);
    element.setAttribute("class",classAttributeValue);
    element.setAttribute(attribute1,AttributeValue1);
    element.innerHTML=content;
    return element;
}
function fetchAPI(){
    var promise1 = fetch(` https://foodish-api.herokuapp.com/api/`);
    promise1.then(
        (readableStreamValue)=>readableStreamValue.json()
        ).then(
            (array)=>{
            data = array;
            getFood();
        }).catch(
            (err)=>`The error is : ${err}`
        );
}


var bodyEnclosure = document.getElementsByClassName("bodyEnclosure")[0];
function getFood(){
    var image = createElement("img","image","src",data.image);
    bodyEnclosure.append(image);
}

var selectButton = document.getElementsByClassName("select1")[0];
var clearButton = document.getElementsByClassName("clear")[0];

selectButton.addEventListener("click",()=>{
    bodyEnclosure.innerHTML="";
    fetchAPI();
});

clearButton.addEventListener("click",()=>{
    bodyEnclosure.innerHTML="";
});