'use strict';

const billInput = document.getElementById("bill__input")
const customInput = document.getElementById("custom__input")
const percentageBtn = document.querySelectorAll(".percent-btn")
const peopleInput = document.getElementById("people__input")
const alertMsg = document.querySelector('.alert')
const dollarAmount = document.querySelectorAll('.dollar-amount')
const resetBtn = document.querySelector('.reset-btn')


billInput.addEventListener('input', setBillValue)
percentageBtn.forEach(btn => btn.addEventListener('click', percentCalc))
customInput.addEventListener('input', customCalc)
peopleInput.addEventListener('input', peopleCalc)
resetBtn.addEventListener('click', reset)

let billValue = 0.0
let tipValue = 0.15
let people = 1
let byDefault = 0.00

function setBillValue(){
    if(billInput.value.includes(',')){
        billInput.value = billInput.value.replace(',' , '.')
    }else if(billInput.value === '', billInput.value <= 0){
        billInput.value = ''
        
    }

    billValue = parseFloat(billInput.value)
    calcTip()
}

function percentCalc(e){
    percentageBtn.forEach(btn =>{
        btn.classList.remove('active')

        if(e.target.innerHTML == btn.innerHTML){
            btn.classList.add('active')

            tipValue = parseFloat(btn.innerHTML) / 100
        }
    })
    calcTip()
   
}

function customCalc(){
    tipValue = parseFloat(customInput.value / 100)

    percentageBtn.forEach(btn => btn.classList.remove('active'))

    if(tipValue.value !== ''){

        calcTip()
    }
}


function peopleCalc(){

    if(people.value === ''){
        dollarAmount[0].innerHTML = '$' + tipAmount.toFixed(2)
        dollarAmount[1].innerHTML = '$' + totalAmount.toFixed(2)
    }

    people = parseFloat(peopleInput.value)
    calcTip()
}

function calcTip(){
    if(people >= 1){
        const tipAmount = billValue * tipValue / people
        const totalAmount = billValue * (tipValue + 1) / people

        dollarAmount[0].innerHTML = '$' + tipAmount.toFixed(2)
        dollarAmount[1].innerHTML = '$' + totalAmount.toFixed(2)
    }
}

function reset(){
    billInput.value = ''
    setBillValue()

    percentageBtn[1].click()

    peopleInput.value = ''
    peopleCalc()

    dollarAmount[0].innerHTML = `$0.00`
    dollarAmount[1].innerHTML = `$0.00`

}









