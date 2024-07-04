#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player{
    name: string;
    fuel: number = 100
constructor(name:string){
    this.name = name;
}
fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel
}
fuelIncrease(){
    this.fuel = 100
}
};

class Opponent{
    name: string;
    fuel: number = 100
constructor(name:string){
    this.name = name;
}
fuelDecrease(){
    let fuel = this.fuel - 25
    this.fuel = fuel
}
};

let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter Your Name"
});
let opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select Your Opponent",
    choices:["Skeleton", "Zombie", "Robot"]
})

let p1 = new Player(player.name)
let o1 = new Opponent (opponent.select)

do{
if (opponent.select == "Skeleton"){};
let option = await inquirer.prompt({
    name:"option",
    type: "list",
    message: "Select Your Opponent",
    choices:["Attack", "Drink Portion", "Run For Your Life"]

});
if(option.option == "Attack"){
    let num = Math.floor(Math.random() * 2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`)),
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }
    }
    if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`)),
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if (o1.fuel <= 0){
            console.log(chalk.green.bold.italic("You Won!"))
            process.exit()
        }
    
    }
}
if(option.option == "Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.green.italic(`You Drink Health Portion, Your fuel is ${p1.fuel}`))
}
if(option.option == "Run For Your Life"){
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    process.exit()
}
// for robot
if (opponent.select == "Robot"){};
let opt = await inquirer.prompt({
    name:"option",
    type: "list",
    message: "Select Your Opponent",
    choices:["Attack", "Drink Portion", "Run For Your Life"]

});
if(opt.option == "Attack"){
    let num = Math.floor(Math.random() * 2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`)),
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }
    }
    if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`)),
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if (o1.fuel <= 0){
            console.log(chalk.green.bold.italic("You Won!"))
            process.exit()
        }
    
    }
}
if(opt.option == "Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.green.italic(`You Drink Health Portion, Your fuel is ${p1.fuel}`))
}
if(opt.option == "Run For Your Life"){
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    process.exit()
}
// for zombie
if (opponent.select == "Zombie"){};
let ask = await inquirer.prompt({
    name:"option",
    type: "list",
    message: "Select Your Opponent",
    choices:["Attack", "Drink Portion", "Run For Your Life"]

});
if(ask.option == "Attack"){
    let num = Math.floor(Math.random() * 2)
    if(num > 0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`)),
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
            process.exit()
        }
    }
    if(num <= 0){
        o1.fuelDecrease()
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`)),
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        if (o1.fuel <= 0){
            console.log(chalk.green.bold.italic("You Won!"))
            process.exit()
        }
    
    }
}
if(ask.option == "Drink Portion"){
    p1.fuelIncrease()
    console.log(chalk.bold.green.italic(`You Drink Health Portion, Your fuel is ${p1.fuel}`))
}
if(ask.option == "Run For Your Life"){
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"))
    process.exit()
}

}
while(true)