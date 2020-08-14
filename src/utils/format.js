//Dados

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Português",
    "Matemática",
    "Química",
    "Programação"

]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-Feira",
    "Sábado",
]




//Funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hours, minutes] = time.split(":")
    return Number((hours * 60) + minutes) 
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}