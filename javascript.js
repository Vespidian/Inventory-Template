document.onkeydown = checkKey;

function checkKey(e) {
  var inv = document.getElementById("invhide");
    e = e || window.event;

    if (e.keyCode == '69') {
        // e key
        if (inv.style.display == !'block') {
            inv.style.display = 'block'
        } else if (inv.style.display == 'none'){
            // toggle (also e key)
            inv.style.display = 'block';
        } else if (inv.style.display == 'block') {
          inv.style.display = 'none';
        }
    }
}
