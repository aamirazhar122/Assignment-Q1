//Personal Message: Store a person’s name in a variable, and print a message to that person. Your 
//message should be simple, such as, “Hello Eric, 
//would you like to learn some Python today?”

export {}
let personName: string = "Eric";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
function toTitleCase(string: string): string {

    return string.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  
  
  console.log(toTitleCase(personName));