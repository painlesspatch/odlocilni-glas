
export async function loadPolls(){

const response = await fetch("PASTE_GOOGLE_SHEET_API_HERE")
const text = await response.text()

const rows=text.split("\n").slice(1)

let polls=[]

rows.forEach(r=>{

const c=r.split(",")

polls.push({
date:c[0],
pollster:c[1],
sample:Number(c[2]),

results:{
SDS:Number(c[3]),
Svoboda:Number(c[4]),
SD:Number(c[5]),
Levica:Number(c[6]),
NSi:Number(c[7]),
Others:Number(c[8])
}

})

})

return polls

}
