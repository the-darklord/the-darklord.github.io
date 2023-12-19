const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

const addB = document.querySelector("#add");
addB.addEventListener("click", function(){
    add();
});

renderList();

function add()
{
    todoList.push(document.querySelector("#input").value);
    renderList();   
    document.querySelector("#input").value = "";
    renderList();
}

function renderList() {
    let html = "";
    todoList.forEach((todo, index) => {
        const temp = `
            <div class="listItem">
                <div id="listElement">${todo}</div>
                <button class="delete">Delete</button>
            </div>
        `;
        html += temp;
    });
    document.querySelector("#list").innerHTML = html;
    document.querySelectorAll(".delete").forEach((button, index) => {
        button.addEventListener("click", function () {
            todoList.splice(index, 1);
            renderList();
        });
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
}