const submitButton = document.querySelector(".submit-button");
const listData = document.querySelector(".list-items");
const mainContainer = document.querySelector(".main-container")

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
      const seeItem = document.createElement("ul");
      seeItem.innerHTML = listItem;
      listData.append(seeItem);
      mainContainer.append(listData)
  }
};
    