// const generateErrorMessage = (errorCode: number, errorMessage: string) => {
//     console.error(`Det har blivit fel. Felkod: ${errorCode}. Felmeddelande: ${errorMessage}`);
// }

const isEmailValid = (email: string): boolean => {
  return email.indexOf("@") > -1;
}

//Valfria parametrar
const generateErrorMessage = (errorCode: number, errorMessage: string, uppercase?: boolean) => {
  const combinedErrorMessage = `Det har blivit fel. Felkod: ${errorCode}. Felmeddelande: ${errorMessage}`;
  console.error(uppercase ? combinedErrorMessage.toLocaleUpperCase() : combinedErrorMessage);
}

generateErrorMessage(5, "fem");
