function Load() {
    let points = 0;

    const checkBox = document.getElementsByClassName("check");

    let btn = document.querySelector("#btn-comp");
    let arrow = document.querySelector("#arrow-icon");
    btn.addEventListener("click", myFunction);
    arrow.addEventListener("click", arrowClick);

    function myFunction() {
        document.getElementById("form").style.height = "5vh";
        document.getElementById("form-items").style.visibility = "hidden";
        arrow.style.visibility = "visible";
    }



    function arrowClick() {
        if(arrow.classList.contains("open")){
            arrow.classList.remove("open");
        }
        else{
            arrow.classList.add("open");
        }
    }




}