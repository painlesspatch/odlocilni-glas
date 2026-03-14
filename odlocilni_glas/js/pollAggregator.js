export async function loadPolls(){

const response = await fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQpWjzIcpLf9PoJ-Q80b4o3RC-sSbVozv18WwS-waLURUetX6spuAJdf2pLRZLFbvA0-66bGzifkFPB/pub?output=csv")
const text = await response.text()
const rows=text.split("\n").slice(1)

let polls=[]

rows.forEach(r=>{

const c=r.split(",")

polls.push({
date:c[1],
pollster:c[2],
sample:Number(c[3]),

results:{
SDS:Number(c[4]),
GibanjeSvoboda:Number(c[5]),
LevicaVesna:Number(c[6]),
NSiFokusSLS:Number(c[7]),
SD:Number(c[8]),
Demokrati:Number(c[9]),
Resnica:Number(c[10]),
PiratskaStranka:Number(c[11]),
SNS:Number(c[12]),
Prerod:Number(c[13]),
GlasUpokojencev:Number(c[14]),
MiSocialisti:Number(c[15]),
Neodloceni:Number(c[17]),
Nikogar:Number(c[18]),
Drugo:Number(c[19]),
NeZelimOdgovoriti:Number(c[20]),
PraznaGlasovnica:Number(c[21])}

})

})

return polls

}
