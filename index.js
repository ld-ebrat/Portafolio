const divMenu = document.querySelector(".div-menu")

const divPro1 = document.querySelector(".pro-1");
const divPro2 = document.querySelector(".pro-2");
const divPro3 = document.querySelector(".pro-3");
const btn1_before = document.querySelector(".btn1-before");
const btn1_after = document.querySelector(".btn1-after");

const divEdu1 = document.querySelector(".edu-1");
const divEdu2 = document.querySelector(".edu-2");
const divEdu3 = document.querySelector(".edu-3");
const btn2_before = document.querySelector(".btn2-before");
const btn2_after = document.querySelector(".btn2-after");

btn1_after.addEventListener("click", (e) => {

    if ((divPro1.querySelector("h3").textContent == "Project 1") &&
        (divPro2.querySelector("h3").textContent == "Project 2") && (divPro3.querySelector("h3").textContent == "Project 3")) {

        divPro1.querySelector(".pro-img").src = "Multimedia/pro-4.jpg"
        divPro1.querySelector(".pro-img").alt = "img-project 4"
        divPro1.querySelector("h3").textContent = "Project 4"

        divPro2.querySelector(".pro-img").src = "Multimedia/pro-5.jpg"
        divPro2.querySelector(".pro-img").alt = "img-project 5"
        divPro2.querySelector("h3").textContent = "Project 5"

        divPro3.querySelector(".pro-img").src = "Multimedia/pro-6.jpg"
        divPro3.querySelector(".pro-img").alt = "img-project 6"
        divPro3.querySelector("h3").textContent = "Project 6"
    }
})

btn1_before.addEventListener("click", (e) => {
    if ((divPro1.querySelector("h3").textContent == "Project 4") && (divPro2.querySelector("h3").textContent == "Project 5") && (divPro3.querySelector("h3").textContent == "Project 6")) {

        divPro1.querySelector(".pro-img").src = "Multimedia/pro-1.jpg"
        divPro1.querySelector(".pro-img").alt = "img-project 1"
        divPro1.querySelector("h3").textContent = "Project 1"

        divPro2.querySelector(".pro-img").src = "Multimedia/pro-2.jpg"
        divPro2.querySelector(".pro-img").alt = "img-project 2"
        divPro2.querySelector("h3").textContent = "Project 2"

        divPro3.querySelector(".pro-img").src = "Multimedia/pro-3.jpg"
        divPro3.querySelector(".pro-img").alt = "img-project 3"
        divPro3.querySelector("h3").textContent = "Project 3"
    }
})

btn2_after.addEventListener("click", (e) => {

    if ((divEdu1.querySelector("h3").textContent == "Education 1") &&
        (divEdu2.querySelector("h3").textContent == "Education 2") && (divEdu3.querySelector("h3").textContent == "Education 3")) {

        // document.querySelector(".cont-edu").classList.add("slide-right");

        divEdu1.querySelector(".img-edu").src = "Multimedia/pro-4.jpg";
        divEdu1.querySelector(".img-edu").alt = "img-education 4"
        divEdu1.querySelector("h3").textContent = "Education 4"

        divEdu2.querySelector(".img-edu").src = "Multimedia/pro-5.jpg"
        divEdu2.querySelector(".img-edu").alt = "img-education 5"
        divEdu2.querySelector("h3").textContent = "Education 5"

        divEdu3.querySelector(".img-edu").src = "Multimedia/pro-6.jpg"
        divEdu3.querySelector(".img-edu").alt = "img-edution 6"
        divEdu3.querySelector("h3").textContent = "Education 6"
    }
})

btn2_before.addEventListener("click", (e) => {

    if ((divEdu1.querySelector("h3").textContent == "Education 4") &&
        (divEdu2.querySelector("h3").textContent == "Education 5") && (divEdu3.querySelector("h3").textContent == "Education 6")) {

        // document.querySelector(".cont-edu").classList.add("slide-left")

        divEdu1.querySelector(".img-edu").src = "Multimedia/pro-1.jpg";
        divEdu1.querySelector(".img-edu").alt = "img-education 1"
        divEdu1.querySelector("h3").textContent = "Education 1"

        divEdu2.querySelector(".img-edu").src = "Multimedia/pro-2.jpg"
        divEdu2.querySelector(".img-edu").alt = "img-education 2"
        divEdu2.querySelector("h3").textContent = "Education 2"

        divEdu3.querySelector(".img-edu").src = "Multimedia/pro-3.jpg"
        divEdu3.querySelector(".img-edu").alt = "img-edution 3"
        divEdu3.querySelector("h3").textContent = "Education 3"
    }
})



divMenu.addEventListener("click", () => {
    const nav = document.querySelector("nav")

    if (divMenu.classList.contains("alter1")) {
        nav.style.left = "0px"
        divMenu.style.left = "280px"
        divMenu.classList.remove("alter1")
        divMenu.classList.add("alter2")
        divMenu.querySelector("img").src = "Multimedia/menu-x.png"
    } else {
        nav.style.left = "-300px"
        divMenu.style.left = "20px"
        divMenu.classList.remove("alter2")
        divMenu.classList.add("alter1")
        divMenu.querySelector("img").src = "Multimedia/menu.png"
    }
    // if(nav.style.display == "flex"){
    //     nav.style.left = "-300px"
    //     nav.style.display = "none"
    //     divMenu.style.left = "-280px"
    // }else{
    //     nav.style.display = "flex"
    //     nav.style.left = "0px"
    //     divMenu.style.left = "280px"
    // }
    console.log(divMenu.classList.contains("alter2"))
    // if(!(nav.style.display = "none")){
    //     nav.style.display = "none"
    //     nav.style.left = "-300px"
    //     divMenu.style.left = "-280px"

    // }else if(!(nav.style.display = "none")){
    //     nav.style.display = "flex"
    //     nav.style.left = "0px"
    //     divMenu.style.left = "280px"
    // }


})