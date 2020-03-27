//Javascript

function search_saiyan() {
    let input = document.getElementById("searchbar") .value 
    input=input.toLowerCase();
    let x=document.getElementsByClassName("saiyan");

    for (i=0; i<x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-item";
        }
    }
}

function search_ninja() {
    let input = document.getElementById("searchbar2") .value 
    input=input.toLowerCase();
    let y=document.getElementsByClassName("ninja");

    for (i=0; i<y.length; i++){
        if(!y[i].innerHTML.toLowerCase().includes(input)){
            y[i].style.display="none";
        }
        else{
            y[i].style.display="list-item";
        }
    }
}

function search_wizard() {
    let input = document.getElementById("searchbar3") .value 
    input=input.toLowerCase();
    let y=document.getElementsByClassName("wizard");

    for (i=0; i<y.length; i++){
        if(!y[i].innerHTML.toLowerCase().includes(input)){
            y[i].style.display="none";
        }
        else{
            y[i].style.display="list-item";
        }
    }
}