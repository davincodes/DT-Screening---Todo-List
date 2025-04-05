const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value == '') {
        alert("Put a task first");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        let img = document.createElement("img");

        img.src = "https://png.pngtree.com/png-vector/20230527/ourmid/pngtree-red-cross-paint-clipart-transparent-background-vector-png-image_7110618.png";
        img.alt = "Delete Task";

        img.style.width = "30px";
        img.style.height = "30px";

        span.appendChild(img);
        li.appendChild(span);

        img.addEventListener("click", function(e) {
            li.remove();
            e.stopPropagation();
        });
    }

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
        }
    }, false);
}
