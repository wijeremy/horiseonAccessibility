document.getElementById('noImages').addEventListener('click', function () {
    document.body.classList.toggle('noImages');
}); 

/*
--colorText: #ffffff;
    --colorHeader: #2a607c;
    --colorBackground: #d9dcd6;
    --colorMain1: #0072bb;
    --colorMain2: #2589bd
    */
document.getElementById('darkMode').addEventListener('click', function () {
    document.documentElement.style.setProperty("--colorBackground", "#222222")
    document.documentElement.style.setProperty("--colorHeader", "#102c3a")
    document.documentElement.style.setProperty("--colorText", "#f3e3b6")
    document.documentElement.style.setProperty("--colorMain1", "#003150")
    document.documentElement.style.setProperty("--colorMain2", "#0f374d")
    ;
}); 

document.getElementById('default').addEventListener('click', function () {
    document.body.classList.remove("noImages")
    document.documentElement.style.setProperty("--colorBackground", "#d9dcd6")
    document.documentElement.style.setProperty("--colorHeader", "#2a607c")
    document.documentElement.style.setProperty("--colorText", "#ffffff")
    document.documentElement.style.setProperty("--colorMain1", "#0072bb")
    document.documentElement.style.setProperty("--colorMain2", "#2589bd");
}); 
