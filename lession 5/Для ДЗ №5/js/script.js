let li_3 = document.getElementsByTagName('li')[2],
    adv = document.querySelectorAll('.column'),
    delete_adv = document.querySelector('.adv'),
    title = document.getElementById('title'),
    que = document.getElementById('prompt'),
    menu = document.querySelector('ul');

console.log(title);
menu.insertBefore(li_3, menu.children[1]);
document.body.style.background = 'url(/lession%205/%D0%94%D0%BB%D1%8F%20%D0%94%D0%97%20%E2%84%965/img/apple_true.jpg)';
adv[1].removeChild(delete_adv);
title.innerHTML = "Мы продаем только <b>подлиную</b> технику Apple";
que.textContent = prompt("Как вы относитесь в технике Apple?", "");