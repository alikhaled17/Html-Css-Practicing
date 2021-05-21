




// inspired from Jquery selectors
const $ = q => document.querySelector(q);  
const $$ = q => document.querySelectorAll(q); 
const print = q => console.log(q); 

let x = (200 - $('.box').style.width) / $$(".box").length;
$('.box div').style.width = ($('.box').style.width - x) / $$(".box").length;

print(x);

let wid = $('.box div').style.width;
var imgs = $$(".box div");

imgs.forEach(element => {
    element.addEventListener("click", () => {
        let ac = $$(".active")[0];
        element.classList.add('active');
        ac.classList.remove('active');
    })
});




