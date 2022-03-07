// this is your main.js script



// 1. Write a code which can give grades to students according to theirs scores:
function studentGrade(){
    //Take in students grade
    let myGrade = prompt('Input Number Grade (1-100):', ' ')

    //Return the students grade
    switch(true){
        case myGrade <= 49: 
            alert('Study more bro, you got a F')
            break;
        case myGrade > 49 && myGrade <= 59:
            alert('Meh, you got a D')
            break;
        case myGrade > 59 && myGrade <= 69:
            alert('You passed... barely: C ')
            break;
        case myGrade > 69 && myGrade <= 89:
            alert('you got a B good job!')
            break;
        case myGrade > 89 && myGrade <=100:
            alert("Well done, A!")
            break;
    }   
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
function seasonFinder(){
    //Take in month from user
    let monthInput = prompt('Input current month (ex: May): ')

    //Format the input
    let month = monthInput.toLowerCase()

    //Determine the season based on user input
    switch(month){
        //Case Autumn
        case 'september':
            alert('The season is Autumn!')
            break;
        case 'november' :
            alert('The season is Autumn!')
            break;
        case  'october':
            alert('The season is Autumn!')
            break;   
        //Case Winter
        case 'december':
            alert('The season is Winter!')
            break;
        case 'january':
            alert('The season is Winter!')
            break;
        case 'february':
            alert('The season is Winter!')
            break;
        //Case Spring
        case 'march':
            alert('The season is Spring!')
            break;
        case  'april':
            alert('The season is Spring!')
            break;
        case 'may':
            alert('The season is Spring!')
            break;
        //Case Summer
        case 'june':
            alert('The season is Summer!')
            break;
        case 'july':
            alert('The season is Summer!')
            break;
        case 'august':
            alert('The season is Summer!')
            break;
        //Case error
        default:
            alert('Error: Please try again')
            break;
            
    }
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input:
function dayFinder(){
    //Take in month from user
    let dayInput = prompt('Input day of the week (ex: Monday): ')

    //Format the input
    let day = dayInput.toLowerCase()

    //Determine the season based on user input
    switch(day){
        //Case Workday
        case 'monday' :
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a working day, so get to it!`)
            break;
        case 'tuesday':
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a working day, so get to it!`)
            break;
        case 'wednesday':
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a working day, so get to it!`)
            break;
        case  'thursday' :
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a working day, so get to it!`)
            break;
        case   'friday':
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a working day, so get to it!`)
            break;
        //Case Weekend
        case 'saturday'  :
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a weekend, time to relax!`)
            break;
        case  'sunday' :
            //Format the day to all capital letters
            day = day.toLocaleUpperCase() //MONDAY
            //Display
            alert(`${day} is a weekend, time to relax!`)
            break;
        //Case error
        default:
            alert('Error: Please try again')
            break;
            
    }
}

// 1. Write a program which tells the number of days in a month.
function daysInMonth(){
    //Take in month from user
    let monthInput = prompt('Input current month (ex: May): ')

    //Format the input
    let month = monthInput.toLowerCase()

    //Determine the season based on user input
    switch(month){
        //Case Autumn
        case 'september':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 30 days.`)
            break;
        case 'november' :
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 30 days.`)
            break;
        case  'october':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;   
        //Case Winter
        case 'december':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;
        case 'january':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;
        case 'february':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 28 days.`)
            break;
        //Case Spring
        case 'march':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;
        case  'april':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 30 days.`)
            break;
        case 'may':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;
        //Case Summer
        case 'june':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 30 days.`)
            break;
        case 'july':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;
        case 'august':
            month = month.toLocaleUpperCase() //JANUARY
            alert(`${month} has 31 days.`)
            break;
        //Case error
        default:
            alert('Error: Please try again')
            break;
            
    }
}
