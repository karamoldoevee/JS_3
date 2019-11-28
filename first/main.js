function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function add_element() {
    var el, s;
    el = document.getElementById('container');
    s= el.innerHTML;
    s=s+ '<div class="element"></div>' + randomInteger(0, 21);

    el.innerHTML=s;
}

setInterval(add_element, 5000);