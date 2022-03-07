// this is your main.js script

//Area Function
function areaCalculation(){
    let base = prompt('Enter base:', ' ')
    let height = prompt('Enter height:', ' ')
    let area = 0.5 * base * height
    alert(area)
}

//Area Function
function PerimeterCalculation(){
    //Get the Perimeter
    let a = prompt('Enter side a:', ' ')
    let b = prompt('Enter side b:', ' ')
    let c = prompt('Enter side c:', ' ')
    // I had to add "Number()" in order to get the addition to work
    let perimeter =  Number(a) + Number(b) + Number(c)
    alert(perimeter)
}


// Now for the Level 3 Clock
function DateTime(){
    //Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    //YYY-MM-DD HH:mm eg. 20120-01-02 07:05

    const now = new Date()
    const year = now.getFullYear() // return year
    const month = now.getMonth() + 1 // return month
    const date = now.getDate() // return date
    const hours = now.getHours() // return number 
    const minutes = now.getMinutes() // return number
    const seconds = now.getSeconds() + 1// return seconds


    alert(`${year}/${month}/${date} ${hours}:${minutes}:${seconds}`) // display the time to the person
}
