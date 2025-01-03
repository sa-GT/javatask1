function astest() {
    document.getElementById("demo").innerHTML = "Hello world";
}


function colorr() {
    document.getElementById("demo").style.backgroundColor = "yellow";
}
function hight_width() {
    document.getElementById("demo").style.height="100px"
    document.getElementById("demo").style.width="25%"
}

function flex(){
    let element = document.getElementById("demo")
    element.style.display="flex"
    element.style.justifyContent="center"
    element.style.alignItems="center"
}

function mouseout(){
    document.getElementById("demo").innerHTML="Can i help you?"
}