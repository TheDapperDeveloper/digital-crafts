const submitButton = document.querySelector(".submit-button");
const listInfo = document.querySelector(".list-items");
const mainContainer = document.querySelector(".main-container")
const readButton = document.querySelector(".list-button")
const updateButton = document.querySelector(".update-button")
const deleteButton = document.querySelector(".delete-button")


// Add a todo

const addToDo = async () => {
    const url = "http://localhost:3000/create_todo";
    const task = document.querySelector(".task").value
    
    const toDo = {
        task
    }; 

    const createList = await fetch(url, {
        method: "POST",
        mode:"cors",
        credenitals:"omit",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(toDo),
        
    });
};

submitButton.addEventListener("click", () => {
    addToDo();
} );

// Read all todos

const readToDo = async () => {
    const url = "http://localhost:3000/get_list";
    const listData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await listData.json();
  
  for (const task of json) {
      const listItem = task.task;
      const seeItem = document.createElement("ol");
      seeItem.innerHTML = listItem;
      listInfo.append(seeItem);
  }
};

readButton.addEventListener("click", () => {
    readToDo();
} );

//Update

const updateItem = async () => {
    
    const taskNumber = document.querySelector(".task-number").value
    const newTask = document.querySelector(".new-task").value
    const url = `http://localhost:3000/update_task/${taskNumber}`;

    const taskData = {
        task: newTask
    }

    const listData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData), 
  });
}

updateButton.addEventListener("click", () => {
    updateItem();
} );


//Delete

const deleteTask = async () => {
    const taskNumber = document.querySelector(".delete").value
    const url = `http://localhost:3000/delete_task/${taskNumber}`;


    const taskData = {
        id: taskNumber
    }
    console.log(taskData)
    const listData = await fetch (url, {
        method: "POST",
        mode: "cors",
        headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData), 
  });
  
}


deleteButton.addEventListener("click", () => {
    deleteTask();
});