let x = document.querySelector('input[name="left"]');
let y = document.querySelector('input[name="right"]');
let p = document.querySelector('span');

let b = document.querySelector('button#calc');
let A;
let a;

b.addEventListener('click', greeting); 

function greeting(){
    a = Number(x.value) + Number(y.value);
    A = Math.floor(a);
    p.textContent = A;
}