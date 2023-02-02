let numbers = null
const doWhile = (num) => {
  do {
    numbers = num++
    console.log(numbers)
  } while (numbers < 1000)
}
// doWhile(0)

// ***************************

const person = {
  firstName: 'Jane', 
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}

const keyLog = () => {
  console.log(Object.keys(person))
}
// keyLog()

const keyValueLog = () => {
  console.log(Object.entries(person))
}
// keyValueLog()

// ***************************

const arrayOfPersons = [
  {
    firstName: 'Jane', 
    lastName: 'Doe',
    birthDate: 'Jan 9, 1925',
    gender: 'female'
  },
  {
    firstName: 'Jon', 
    lastName: 'Doe',
    birthDate: 'Feb 2, 1910',
    gender: 'male'
  },
  {
    firstName: 'Bob', 
    lastName: 'Doe',
    birthDate: 'Mar 5, 1945',
    gender: 'male'
  },
  {
    firstName: 'Tom', 
    lastName: 'Doe',
    birthDate: 'Dec 1, 2005',
    gender: 'male'
  }
]

const birthDays = () => {
  for (let i = 0; i < arrayOfPersons.length; i++) {
    let birth = arrayOfPersons[i].birthDate
    if (parseInt(birth.at(-1)) % 2 !== 0) {
      console.log(birth)
    }
  }
}
// birthDays()

// arrayOfPersons.map(obj => console.log(obj))

const filterArray = arrayOfPersons.filter(obj => obj.gender === 'male')
// console.log(filterArray)

const birth = (person) => parseInt(person.birthDate.slice(-4)) < 1990

const filterArray2 = arrayOfPersons.filter(birth)
// console.log(filterArray2)

const newDate = new Date()
const currentYear = newDate.getFullYear()

const thePast = (person) => parseInt(person.birthDate.slice(-4)) <= currentYear - 21

const filterArray3 = arrayOfPersons.filter(thePast)
console.log(filterArray3)