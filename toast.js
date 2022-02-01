var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}




function edinToast(x) {
    var el = document.createElement("div");    
    var y = document.getElementById("toast-container");
    var c = document.createElement("closebtn");
    var ProgressBar = document.getElementById("myBar");

    c.className="toast_close";
    el.className = "toast";
    
 
    
    el.innerHTML = x;
    c.innerText = "X";


    y.append(el, ProgressBar);
    el.append(c);
    

    el.className = "toast show";
    setTimeout(function() {el.remove();}, 5000);

    c.onclick = (event) => {
        el.remove();

        
    };    
}




