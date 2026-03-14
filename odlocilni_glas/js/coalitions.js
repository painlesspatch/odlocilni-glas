
export function possibleCoalitions(seats){

const parties=Object.keys(seats)
let res=[]

for(let i=0;i<(1<<parties.length);i++){

let list=[]
let total=0

for(let j=0;j<parties.length;j++){

if(i&(1<<j)){
list.push(parties[j])
total+=seats[parties[j]]
}

}

if(total>=46){
res.push({members:list,seats:total})
}

}

return res

}
