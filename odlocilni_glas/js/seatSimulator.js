
export function allocateSeats(votes){

const seats=90
let quotients=[]

Object.entries(votes).forEach(([party,v])=>{

if(v<4) return

for(let i=1;i<=seats;i++){

quotients.push({party,value:v/i})

}

})

quotients.sort((a,b)=>b.value-a.value)

let result={}

quotients.slice(0,seats).forEach(q=>{
result[q.party]=(result[q.party]||0)+1
})

return result

}
