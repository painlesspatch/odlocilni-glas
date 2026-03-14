
export function createSliders(votes,callback){

const container=document.getElementById("sliders")
container.innerHTML=""

Object.entries(votes).forEach(([party,val])=>{

const row=document.createElement("div")
row.className="slider-row"

const label=document.createElement("label")
label.innerText=party+" "+val.toFixed(1)

const input=document.createElement("input")
input.type="range"
input.min=0
input.max=50
input.step=0.1
input.value=val

input.oninput=()=>{

label.innerText=party+" "+input.value
votes[party]=Number(input.value)
callback(votes)

}

row.appendChild(label)
row.appendChild(input)

container.appendChild(row)

})

}
