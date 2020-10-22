function Load() {


    const zivot = document.querySelector(".checkbox-delka-zivota");
    const nezamestnanost = document.querySelector(".checkbox-delka-nezamestnanost");
    const ovzdusi = document.querySelector(".slider-ovzdusi");

    const arrow = document.querySelector("#arrow-icon");
    arrow.addEventListener("click", arrowClick);
    const checkBox = document.getElementsByClassName("check");
    const form = document.querySelector("#form");

    /*Counter*/
    let points = 0;

    var arr = [];


    function save(nazev) {
        arr.push(nazev);
        //arr.forEach(element => console.log(element.pocet_obyvatel));
    }

    fetch('https://hackathon.madhome.cf/api/get')
        .then(response => response.json())
        .then(data => data.forEach(element => {
            const x = {};
            x.nazev = element.nazev;
            x.znecisteni = parseInt(element.znecisteni);
            x.delkazivota = parseInt(element.delkazivota);
            x.nezamestnanost = parseFloat(element.nezamestnanost);
            x.pocet_obyvatel = parseInt(element.pocet_obyvatel);
            save(x);
        }));

    function filled() {
        //drawJaxvine();
        var obyvatele = document.getElementsByName('obyvatele');
        var min_obyvatele;
        var max_obyvatele;
        if (obyvatele[0].checked == 1) {
             min_obyvatele = 0;
             max_obyvatele = 50000;
        } else if (obyvatele[1].checked == 1) {
             min_obyvatele = 50000;
             max_obyvatele = 500000;
        } else {
             min_obyvatele = 1000000;
             max_obyvatele = 5000000;
        }
        console.log(min_obyvatele);
        console.log(max_obyvatele);
        var zmrd = [];
        drawJaxvine(zmrd);
        for (let index = 0; index < arr.length; index++) {
            if (arr[index].pocet_obyvatel >= min_obyvatele && arr[index].pocet_obyvatel <= max_obyvatele) {
                zmrd.push(arr[index].nazev)
            }
        }
        drawJaxvine(zmrd);

    }

    function arrowClick() {
        if (arrow.classList.contains("open")) {
            arrow.classList.remove("open");
            document.getElementById("form-items").style.visibility = "hidden";
            form.style.height = "8vh";
            arrow.style.bottom = "76%";
            filled();
        } else {
            arrow.classList.add("open");
            document.getElementById("form-items").style.visibility = "visible";
            arrow.style.bottom = "44%";
            form.style.height = "41vh";
        }
    }
}