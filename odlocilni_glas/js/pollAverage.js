
export function computeAverage(polls){

let totals={}
let weights={}

polls.forEach(p=>{

const daysOld=(Date.now()-new Date(p.date))/86400000
const recency=1/(1+daysOld/14)
const sample=p.sample/1000
const weight=recency*sample

Object.entries(p.results).forEach(([party,val])=>{

totals[party]=(totals[party]||0)+val*weight
weights[party]=(weights[party]||0)+weight

})

})

let avg={}

Object.keys(totals).forEach(p=>{
avg[p]=totals[p]/weights[p]
})

return avg

}
