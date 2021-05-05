// Images On/Off Button
document.getElementById('noImages').addEventListener('click', function () {
    document.body.classList.toggle('noImages');
}); 
// Dark Mode On/Off Button
document.getElementById('darkMode').addEventListener('click', function () {
    document.body.classList.toggle('darkMode');
}); 
// Default Button
document.getElementById('default').addEventListener('click', function () {
    document.body.classList.remove("noImages")
    document.body.classList.remove('darkMode');
}); 
