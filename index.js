/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let num = 0
let numberInput = document.querySelector("#number-inpt")
let length = document.querySelector("#length")
let volume = document.querySelector("#volume")
let mass = document.querySelector("#mass")

function enterNum() {
    num = numberInput.value;
    convertLength()
    convertVolume()
    convertMass()
}

function convertLength() {
    let meter = (num * 0.305).toFixed(3)
    let feet = (num * 3.281).toFixed(3)
    length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
}

function convertVolume() {
    let gallon = (num * 0.264).toFixed(3)
    let liter = (num * 3.785).toFixed(3)
    volume.textContent = `${num} liters =  ${gallon} gallons | ${num} gallons = ${liter} liters`
}

function convertMass() {
    let kilo = (num * 0.454).toFixed(3)
    let pound = (num * 2.204).toFixed(3)
    mass.textContent = `${num} kilos = ${pound} pounds | ${num} pounds = ${kilo} kilos`
}