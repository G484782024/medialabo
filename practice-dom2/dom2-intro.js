function changeDom(){
    let l = document.createElement('li');
    let u = document.querySelector("ul#kazoeuta");
    u.insertAdjacentElement("beforeend", l);
    l.textContent = "ヨット";

    let i = document.querySelector('img#bluemoon');
    i.setAttribute("src", 'bluemoon.jpg');

    l = document.querySelector('li#mochi');
    l.remove();
    u = document.querySelector('ul#kassen'); 
    u.remove();

    let p = document.querySelector("p#primary"); 
    u = document.createElement('ul');
    p.insertAdjacentElement('afterend', u);
    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '赤';

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '緑';

    l = document.createElement('li');
    u.insertAdjacentElement('beforeend', l);
    l.textContent = '青';
}


let b = document.querySelector('button#henkou');
b.addEventListener('click', changeDom);