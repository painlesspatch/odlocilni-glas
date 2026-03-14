
import {loadPolls} from "./pollAggregator.js"
import {computeAverage} from "./pollAverage.js"
import {allocateSeats} from "./seatSimulator.js"
import {possibleCoalitions} from "./coalitions.js"
import {runMonteCarlo} from "./monteCarlo.js"
import {drawSeatChart,drawProbChart} from "./charts.js"
import {createSliders} from "./tacticalVoting.js"

async function init(){

const polls=await loadPolls()

let avg=computeAverage(polls)

function update(votes){

const seats=allocateSeats(votes)
drawSeatChart(seats)

const mc=runMonteCarlo(votes)
drawProbChart(mc)

const coal=possibleCoalitions(seats)

document.getElementById("coalitions").innerText=
JSON.stringify(coal,null,2)

}

createSliders(avg,update)

update(avg)

}

init()
