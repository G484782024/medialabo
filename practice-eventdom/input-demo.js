let b = document.querySelector('button#print');

b.addEventListener('click', greeting); 

let A = document.querySelector('p#message')

let i = document.querySelector('input[name="shimei"]') 

let shimei = i.value;

function greeting(){
    shimei = i.value;
    A.textContent = 'こんにちは, ' + shimei + 'さん'  ;
    }
    