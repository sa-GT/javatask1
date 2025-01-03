function change() {
    var docs = document.getElementById("demo"); 
    let element = document.getElementById("font-family");  
    let elements = element.value;  
    if (elements === "op1") {
        docs.style.fontFamily = "Times New Roman";
    } else if (elements === "op2") {
        docs.style.fontFamily = "Georgia";
    } else {
        docs.style.fontFamily = "Arial"; 
    }
}

function changefonts(){
    let se = document.getElementById('search').value;
    const demo = document.getElementById('demo');
    if(se === "size1"){
        demo.style.fontSize='10px'
    }
    else if(se === "size2"){
        demo.style.fontSize='50px'
    }else if(se === "size3"){
        demo.style.fontSize='60px'
    }else{
        demo.style.fontSize='70px'
    }
}

function boold(){
    let boldd= document.getElementById('bold')
    let v = boldd.value;
    let demo = document.getElementById('demo')

    if(v === 'bold' && boldd.checked){
        demo.style.fontWeight='bold'
    }
}

function italics(){
    let italicss = document.getElementById('italic')
    let v = italicss.value;
    let demo = document.getElementById('demo')
    if(v == 'italic'){
        demo.style.fontStyle='italic'
    }
}

function underlines(){
    let underline = document.getElementById('underline')
    let v = underline.value;
    let demo = document.getElementById('demo')
    if(v == 'underline'){
        demo.style.textDecoration='underline'
    }
}

