var allproductes = document.querySelectorAll(".accordion-body .card")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#btnprice")
var div2 = document.querySelector("#div2")
var totalprice = 0

allproductes.forEach(function (item) {
    item.onclick = function () {
        totalprice += +(item.getAttribute("price"))
        div1.innerHTML += item.querySelector("p").textContent + " . "

        if (div1.innerHTML != "") {
            btn1.style.display = "block";
            div1.style.display = "block";
        }
    }
})
btn1.onclick=function () {
    div2.innerHTML = (totalprice)+"$"
    
    if (div2.innerHTML != "") {
        div2.style.display = "block";
    }
}