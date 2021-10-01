const array = [
    {
    name: "spiderman",
    league: "otherHeroes",
   },
    {
    name: "batman",
    league: "Justice league",
   }
]

const justiceLeague = [
    "batman", "wonderwoman", "cyborg", "flash", "aquaman","spiderman", "superman", "greenlantern"
]

const theOtherHeroes = [
    "crimsonmechdude", "hammerboy", "greenguy", "hawkguy", "blackassassin","shieldbro", "captneyepatch"
]

//1. access captneyepatch  

console.log(theOtherHeroes[6])

//2. change wonderwoman to diana prince

justiceLeague.splice(1, 1, 'diana prince')
console.log(justiceLeague)


//3. use an array method to delete the last superhero in the justice league

justiceLeague.splice(-1,1)
console.log(justiceLeague)

//4. use an array method to add the word "member" to every hero in the theOtherHeroes array. (ex. crimsonmechdudemember)

const newArray = theOtherHeroes.map(i => i + 'member')
console.log(newArray)

//5. combine the justice league members and the other heroes together in a crosserOver array

const newList = justiceLeague.concat(theOtherHeroes)
console.log(newList)

//6. delete all heroes in the justice league who have the word "man" in their title

const deleteList = justiceLeague.filter(mem => !mem.includes("man"))
console.log(deleteList)


//7. iterate over both arrays so that they are no longer just strings but they are objects that are structured like this
//combine them so they are all heroes in one array





