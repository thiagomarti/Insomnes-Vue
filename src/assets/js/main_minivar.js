let btn = document.querySelector("#btn");
let sidebar = document.getElementById("sidebar");
let search = document.querySelector("bx-search");

function mini() {
    let chau = document.getElementById("chau");
    let menulogo = document.getElementById("logo_content");
    let chau1 = document.getElementById("chau1");
    let chau2 = document.getElementById("chau2");
    let chau3 = document.getElementById("chau3");
    let chau4 = document.getElementById("chau4");
    let chau5 = document.getElementById("chau5");
    let chau6 = document.getElementById("chau6");
    let chau7 = document.getElementById("chau7");
    let chau8 = document.getElementById("chau8");
    let chau9 = document.getElementById("chau9");
    let botton = document.getElementById("botton");
    let botton1 = document.getElementById("botton1");
    let logito = document.getElementById("logito");

    
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    chau.classList.toggle("active");
    chau1.classList.toggle("active");
    chau2.classList.toggle("active");
    chau3.classList.toggle("active");
    chau4.classList.toggle("active");
    chau5.classList.toggle("active");
    chau6.classList.toggle("active");
    chau7.classList.toggle("active");
    chau8.classList.toggle("active");
    chau9.classList.toggle("active");
    botton.classList.toggle("active");
    botton1.classList.toggle("active");
    menulogo.classList.toggle("active");


    if (logito.hasAttribute("class")) {
        console.log("caca")
        logito.removeAttribute("class")
    }
else {
    console.log("pito")
    logito.setAttribute("class", "logou")
}
    }


    const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});
