const submitButton = document.querySelector(".submit-button");

const getToDo = async () => {
    const url = "http://localhost:3000/create_todo";
    const task = document.querySelector(".task").value
    
    const toDo = {
        task
    }; 

    const createList = await fetch(url, {
        method: "POST",
        mode:"cors",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(toDo),
    });
    console.log(createList)
}

submitButton.addEventListener("click", () => {
    getToDo();
} );
