var p =document.getElementsByTagName ('p');

p[0].innerHTML = 'manipulado via js';

for (var i = 0; i < p.length; i++){
    p[i].innerHTML = 'manipulado via js!' + i ;
}