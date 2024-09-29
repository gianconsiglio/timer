const btn1 = document.getElementById('btn1')
btn1.addEventListener('click',start)

const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',Stop)

const btn3 = document.getElementById('btn3')
btn3.addEventListener('click',restart)

const seconds_html = document.getElementById('seconds')
const minutes_html = document.getElementById('minutes')
const hours_html = document.getElementById('hours')
let timer;
let seconds = 0
let minutes = 0
let hours = 0

function start(){
    btn1.disabled=true
    btn2.disabled=false
    changeColor('black')
    timer = setInterval(function (){
            
        if (seconds > 59 && minutes > 59){
            seconds = 0
            minutes = 0
            hours++
            seconds_html.innerText = zeroNumber(seconds)
            minutes_html.innerText = `${zeroNumber(minutes)}:`
            hours_html.innerText = `${zeroNumber(hours)}:`
        }


        else if (seconds > 59){
            seconds = 0
            seconds_html.innerText = zeroNumber(seconds)
            minutes_html.innerText = `${zeroNumber(minutes)}:`
            minutes++
            
        }
        seconds_html.innerText = zeroNumber(seconds)
        seconds++

    }, 1000)
}



function zeroNumber(num){
    return num >= 10 ? num : `0${num}`
}

function Stop(){
    btn1.disabled=false
    btn2.disabled=true
    changeColor('red')
    clearInterval(timer)
}

function restart(){
    clearInterval(timer)
    btn1.disabled=false
    btn2.disabled=false
    changeColor('black')
    seconds = 0
    minutes = 0
    hours = 0
    seconds_html.innerText = zeroNumber(seconds)
    minutes_html.innerText = `${zeroNumber(minutes)}:`
    hours_html.innerText = `${zeroNumber(hours)}:`
}

function changeColor(color){
    document.getElementById('hours').style.color = color
    document.getElementById('minutes').style.color = color
    document.getElementById('seconds').style.color = color
}