let todos = [];

let todoIndex = 0;

const alertTag = document.getElementById("myAlertId");

const modalAlertTag = document.getElementById("myModalAlertId")

let liTag = (data, index) => {
    return ` 
                        <li class="list-group-item d-flex justify-content-between align-items-center"> ${data}
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteTodo(${index})">Delete</button>
                                <button type="button" class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target="#myModalId" onclick="change(${index})">Edit</button>
                            </div>
                        </li>`;
};

/*
    1. get input by its id
    2. validation
    3. push into todos
    4. create li using loop
    5. then append it in ul
 */

const addTodo = () => {
    try {
        //remove display 
        alertTag.style.display = "";

        //getting input element by its id
        let input = document.getElementById("myInputId");

        //validation
        if (input.value === "" || input.value.trim() === "") {
            throw "Todo is required"
        }

        //pushed input into todos
        todos.push(input.value);

        //create li using loop
        let list = "";
        for (let i = 0; i < todos.length; i++) {
            list += liTag(todos[i], i)
        }

        //append into ul
        let ulTag = document.getElementById("myUlId")
        ulTag.innerHTML = "";
        ulTag.insertAdjacentHTML("beforeend", list);

        //reset input
        input.value = "";

        // get count by its id
        let countTag = document.getElementById("countId");
        countTag.innerHTML = todos.length;

        //Set alert message
        alertTag.innerHTML = "Successfully added"
        alertTag.className = "alert alert-success alert-dismissable fade show"

    } catch (error) {
        console.log(error)
        alertTag.className = "alert alert-danger alert-dismissable fade show"
        alertTag.innerHTML = error;
    } finally {
        setTimeout(() => {
            alertTag.style.display = "none"
        }, 2000)
    }
}

// 1. delete from todos
// 2. create li using loop 
// 3. append in ul
const deleteTodo = (index) => {
    try {
        //remove display 
        alertTag.style.display = "";

        //delete from todos
        todos.splice(index, 1)

        // create li using loop 
        let list = "";
        for (let i = 0; i < todos.length; i++) {
            list += liTag(todos[i], i)
        }

        //append into ul
        let ulTag = document.getElementById("myUlId")
        ulTag.innerHTML = "";
        ulTag.insertAdjacentHTML("beforeend", list);

        // get count by its id
        let countTag = document.getElementById("countId");
        countTag.innerHTML = todos.length;

        //Set alert message
        alertTag.innerHTML = "Successfully deleted"
        alertTag.className = "alert alert-success alert-dismissable fade show"
    } catch (error) {
        console.log(error)
        alertTag.className = "alert alert-danger alert-dismissable fade show"
        alertTag.innerHTML = error;
    } finally {
        setTimeout(() => {
            alertTag.style.display = "none"
        }, 1500)
    }
}

const change = (index) => {
    try {
        //get modal input by its id 
        let modalInput = document.getElementById("myModalInputId");

        //get todos index and insert it into value
        modalInput.value = todos[index];

        //update todoIndex
        todoIndex = index;
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = () => {
    try {
        console.log(modalAlertTag, "hi")
        //remove display 
        modalAlertTag.style.display = "";
    
        //get modal input by its id
        let modalInput = document.getElementById("myModalInputId");

        //validations
        if(modalInput.value === "" || modalInput.value.trim() === "") {
            throw "Todo is required";
        }

        //replacee array index by new value 
        todos[todoIndex] = modalInput.value

        //create li using loop
        let list = "";
        for (let i = 0; i < todos.length; i++) {
            list += liTag(todos[i], i)
        }

        //append into ul
        let ulTag = document.getElementById("myUlId")
        ulTag.innerHTML = "";
        ulTag.insertAdjacentHTML("beforeend", list);

        //Set alert message
        modalAlertTag.innerHTML = "Successfully updated"
        modalAlertTag.className = "alert alert-success alert-dismissable fade show"

        //close modal button
        setTimeout(() => {
            let modal = bootstrap.Modal.getInstance(document.getElementById("myModalId"));
            modal.hide();
        },2000)
    } catch (error) {
        console.log(error)
        modalAlertTag.className = "alert alert-danger alert-dismissable fade show"
        modalAlertTag.innerHTML = error;
    } finally {
        setTimeout(() => {
            modalAlertTag.style.display = "none";
        },1500)
    }
}