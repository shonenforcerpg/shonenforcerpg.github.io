//javascript
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