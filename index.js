//variables to store the count and save data//

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


//count increment function//
function increment() {
    count += 1
    countEl.textContent = count
}


//save and reset function//
function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    countEl.textContent = 0
    count = 0
}




