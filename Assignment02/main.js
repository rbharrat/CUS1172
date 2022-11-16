window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input2 = document.querySelector('#title');
    const input3 = document.querySelector('#priortyvalue');
    const input = document.querySelector('#taskinput');
    const list_el = document.querySelector('#tasks');


    form.addEventListener('submit', (e) => {
        e.preventDefault();    //prevents from refreshing page

        const task = input.value;
        const task2 = input2.value;
        const task3 = input3.value;

        if(!task || !task2 || !task3) {
            alert("Error! Please make sure all info is inputted correctly!");
            return;
        }


        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task2;

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly","readonly");

        const task_input_el2 = document.createElement("input");
        task_input_el2.classList.add("text");
        task_input_el2.type = "text";
        task_input_el2.value = "Priority: " + task3;
        task_input_el2.setAttribute("readonly","readonly");

        task_content_el.appendChild(task_input_el);
        task_content_el.appendChild(task_input_el2);


        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("mark_complete");
        task_edit_el.innerHTML = "Mark Completed";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        input.value = "";
        input2.value = "";
        input3.value = "";

        task_edit_el.addEventListener('click', () => {
            task_input_el.style.textDecoration = "line-through";
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText = "Completed";
        })
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })
    })
})