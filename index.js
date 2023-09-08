let frm = document.getElementById("info");
let val="";

function remove(el) {
    el.remove();
}

frm.addEventListener("submit", (e) => {

    e.preventDefault();  
    let input = document.getElementById("input-data");
    let lst = document.getElementById("task-list");

    if(input.value.match(/^\s*$/)){
        return alert("Please fill task name");
    }

    let ll = document.createElement("li");
    ll.innerText = input.value;
    ll.setAttribute("onclick", "remove(this)")
    ll.classList.add("list-item");
    lst.appendChild(ll);
})