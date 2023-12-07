

const firstname: string = "Jonatan";
const firstnames: string[] = ["Jonatan", "Eva"];

//Listor
const years: number[] = [ 2021, 2022, 2023 ];
const bools: boolean[] = [ true, false, false, true ];

//Union types
const value: string | number = 123;
const values: (string | number)[] = [ 234, "hej", "hej", 234];

//Union types, fixed values
const colors: 'RED' | 'BLUE' | 'YELLOW' = 'BLUE';

//Enum
enum Color { Red, Blue, Yellow };
const enumColors: Color = Color.Red;

//Tuple - används inte superofta
const employee: [ number, string ] = [ 5, "hej" ];





