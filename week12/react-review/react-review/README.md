## React review

React renders out information into components
We will create a component that renders out student information

When a function returns JSX it is a functional component

Data starts in App.js

State is a place to store/hold data (any data)
-state can be thought of as a baton (it is a piece of information)
-the runners would be a component

- Passing state to another component is called props

Local state exists on one component and can only be passed to other components

Global state can be accessed by any component

How do you store state in a functional component?

- Make a hook (only used in functional components)
- store state in functional components using hooks
- useState() hook - what is inside the parentheses is the default state
- const [name of state variable, function that changes the state variable]

If state is an object, the variable in useState hook becomes a key

App.js invokes studentcontainer, student container invokes student

You have to import any component you want to invoke

If a component invokes another component it is immediately the parent of that component.

Parents pass down data. Children can't send it back to parent.

loop - does something to every element in an array

A map is a loop - you can only map over arrays - in js for of loop -
for (const i of num) {
console.log(i)
}

i = element of the array

map over an array and invoke a component:

{props.students.map((student) => (
<Students students={props.students} />
))}
