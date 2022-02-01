function edinToast(x) {
    var el = document.createElement("div");    
    var y = document.getElementById("toast-container");
    var c = document.createElement("closebtn");
    var element = document.createElement('div');

    c.className="toast_close";
    el.className = "toast";
    element.className = "div"

    el.innerHTML = x;
    c.innerText = "X";

    y.append(el, element);
    el.append(c);

    el.className = "toast show";

    setTimeout(function() {el.remove(), element.remove();}, 5000);

    c.onclick = (event) => {
        el.remove();
        element.remove();
        
    };   
    
}
