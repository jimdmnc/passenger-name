//document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7

// let count = 5
// count = count + 5

// console.log(count)

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)
// let count= 0
// function increment(){
//     count = count + 1
//     console.log(count)
// }
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function totalLap(){
//     let total = lap1 + lap2 + lap3
//     console.log(total)
// }
// totalLap()
// let countEl= document.getElementById("count-el")
// let count = 0
// let saveEl= document.getElementById("save-el")

// function add(){
//     count += 1
//     countEl.innerText = count
// }
// function minus(){
//     count -= 1
//     countEl.innerText = count
// }

// function zero(){
//     count = 0
//     countEl.innerText = count
// }
// function save(){
//   let entry = count + " - "
//   saveEl.innerText += entry
  
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function add(){
    count += 1
    countEl.innerText = count
}
function save(){
    let entry = count + " - "
    saveEl.textContent += entry
    count = 0
    countEl.textContent = 0
}


// let message = "You have a three Notification!"
// let username = "doms"
// let messageToUser = message + ","+username
// console.log(messageToUser)

// let name = "Riyelle"
// let greeting = "Hi, my name is " 
// let myGreeting = greeting + name
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name = "Rei"
// let greeting = "Oh!, your back. Hi "
// welcomeEl.innerText = greeting + name + "👋"