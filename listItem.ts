type Employee = {
    name: string;
    age: number;
}

type Student = {
    name: string;
    courses: string[];
    startYear: number;
}

// type EmployeeListItem = {
//     id: number;
//     item: Employee
// }

// type StudentListItem = {
//     id: number;
//     item: Student;
// }

const studentListItem: ListItem<Student> = {
    id: 3,
    item: {
        name: "Anna",
        courses: [],
        startYear: 2023
    }
}

const employeeListItem: ListItem<Employee> = {
    id: 5,
    item: {
        name: "Eden",
        age: 26
    }
}

type ListItem<T> = {
    id: number;
    item: T;
}

const numbers: Array<number> = [ 1, 2, 3, 4 ];

// const returnStringValue = (value: string): string => {
//     return value;
// }

// const returnNumberValue = (value: number): number => {
//     return value;
// }

// const returnBooleanValue = (value: boolean): boolean => {
//     return value;
// }

const returnValue = <T>(value: T): T => {
    return value;
}

type ValueType = string | boolean | number;

//returnBooleanValue(false);
returnValue<boolean>(false);

//returnStringValue("hej");
returnValue<string>("hej");