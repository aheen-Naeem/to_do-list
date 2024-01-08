#!/usr/bin/env node

import inquirer from "inquirer"

let todos :string[] = ["Maheen","Naeem"]

 async function createTodo (todos:string[]){
       do{
           let ans = await inquirer.prompt({
               type: "list",
               name: "select",
               message: "Select an operation !",
               choices: ["add", "update", "view", "delete"]
           })
           if (ans.select == "add") {
               let addTodo = await inquirer.prompt({
                   type: "input",
                   name: "todo",
                   message: "Add item"
               })
               
               todos.push(addTodo.todo)
               console.log(todos)

           }
           if (ans.select == "update") {
               let updateTodo = await inquirer.prompt({
                   type: "list",
                   message: "select item for update",
                   choices: todos.map(item => item),
                   name: "todo"
               })
               let addTodo = await inquirer.prompt({
                   type: "input",
                   name: "todo",
                   message: "Add item"
               })
               let newTodos = todos.filter(val => val != updateTodo.todo)
               todos = [...newTodos, addTodo.todo]
               console.log(todos)
           }
           if (ans.select == "view") {
               console.log(todos)
           }
           if (ans.select == "delete") {
               let deleteTodo = await inquirer.prompt({
                   type: "list",
                   message: "select item for delete",
                   choices: todos.map(item => item),
                   name: "todo"
               })
               let newTodos = todos.filter(val => val != deleteTodo.todo)
               todos = [...newTodos]
               console.log(todos)
           }
       }while(false)
}
createTodo(todos)