//interface
// interface Person {
//     firstname: string,
//     city: string,
//     appliedForCourse: boolean
// }

//type
type Person = {
    firstname: string,
    city: string,
    appliedForCourse: boolean,
    street?: string
}

const renderPerson = ({ firstname, city }: Person) => {
    return `<li>${firstname}, ${city}</li>`;
}

const person1: Person = {
    firstname: "Jonatan",
    city: "Stockholm",
    appliedForCourse: true,
    street: "Sveavägen"
}

const person2: Person = {
    firstname: "Eva",
    city: "Umeå",
    appliedForCourse: false
}