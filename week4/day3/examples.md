# Promises

- What is a promise?
A promise in programming is a request that will be fulfilled or denied. If it is fulfilled the data will come at a later time. If is is denised the denial will come at a later time.

-Async behavior
A delay in data when a certain action is called. A function that fires and continues to go through the rest of the code, but then later on, it finishes.

## A promise has three statuses

- `pending`
- `fulfilled`
- `rejected`

- Fetch
A built-in function `fetch()` that is used for async behavior.
-Syntax
```const dataFrom = fetch("url")
    .then(response => response.json())
    .then(data => data)
```
-Fetch returns a promise

-ES6 Style of fetching, of handling async behavior
`Async/Await`

async function getData(){
    const getData = await fetch ("url")
    const json = await getData.json()
    return json
}

# HTTP Request Methods - HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.
- GET "Asking for data to come to you"
- POST "Sending data somewhere, typically a database"
- PUT "Used to modify existing data"
- DELETE "Delete Data" 