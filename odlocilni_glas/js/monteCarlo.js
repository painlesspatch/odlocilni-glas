
import {allocateSeats} from "./seatSimulator.js"

function randomNormal(){

let u=Math.random()
let v=Math.random()

return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v)

}

export function runMonteCarlo(votes,iterations=4000){

let seatTotals={}

for(let i=0;i<iterations;i++){

let simulated={}

Object.entries(votes).forEach(([p,v])=>{

const noise=randomNormal()*1.5
simulated[p]=Math.max(0,v+noise)

})

const seats=allocateSeats(simulated)

Object.entries(seats).forEach(([p,s])=>{

seatTotals[p]=(seatTotals[p]||0)+s

})

}

let averages={}

Object.keys(seatTotals).forEach(p=>{
averages[p]=seatTotals[p]/iterations
})

return averages

}
