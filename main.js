//What to wear opgave 1
function wear(temperature) {
    if (temperature > 20) {
        console.log("Shorts and t-shirt") }
    else if (temperature < 20) {
        console.log("flyverdragt") }
}
wear(15)

//Dice roll opgave 2
function rollDice(rolls) {
    var RandomNumber
    var i
    let Amountofsixes =0
    for (i=1; i<=rolls; i++){
        RandomNumber = Math.floor(Math.random() * 6+1);
        console.log(RandomNumber)
        if (RandomNumber === 6){
            console.log("You just hit 6")
            Amountofsixes++
            if(Amountofsixes === rolls) {
                console.log("JACKPOT")
            }
        }
    }
}
rollDice(2)


//Sentiment analyzer opgave 3



function sentimentScoreObject (Getsentimentscore) {
    const positiveWords = ['happy', 'awesome', 'super']
    const negativeWords = ['hate', 'boring']
    const score = 0
    const split = Getsentimentscore.split(" ");
    return split
}

console.log(sentimentScoreObject("I am happy"))

