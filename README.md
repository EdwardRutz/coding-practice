# Coding Practice

> Short exercises to keep coding skills strong.



## Test
`jest directory\test.js --watch`

## Run
- Navigate to the root directory
- Run the file
    ' node index.js'

## Debugging

### Prepare the Code for Debugging
- Insert debug command into code at key debug points, ` debugger; `
- The debugger pauses at the ` debugger ` points.
- To use the debugger, make sure to manually call the function at the end of the code.
- This invokes and runs the function so the debugger can work.

### Run the Debugger
- Run the debugger type, ` node inspect index.js `
- Debugger executes code line-by-line and pauses at `debugger;` statements
- To continue type, ` c ` or ` cont `

### Switch to the REPL to View Code Values
- To look at code values start the Node REPL (Read, Evaluate, Print, Loop) 
  - Type ` node ` to start the Node REPL.
- Typing a variable name then hitting enter returns the variables value.
- Variables and functions are stored in the REPL until the session is exited
- Copy code into REPL to see how it works

### Exit REPL and Return to the Debugger
- To exit the REPL and return to the debugger type ` Ctrl + C ` twice
- When done debugging, make sure to remove the  ` debugger; ` statments and the manual function call


## Using the Node REPL 
- Read-Evaluate-Print-Loop
- To start the node REPL type, ` node `
- To exit the REPL
  - ` ctrl + c ` twice
  - ` .exit `
  - ` ctrl + D ` 
- [How to Use the Node REPL](https://www.digitalocean.com/community/tutorials/how-to-use-the-node-js-repl)


## More Info

- [The Coding Interview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)
