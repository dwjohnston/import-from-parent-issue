import { fileName } from "..";



export const test = "test"; 

const myData = {
    data: fileName,  // This resolves to undefined, 
    data2: fileName2 //This resolves to "bar"
}; 


export function main() {
    console.log(myData); 
    console.log(fileName);  // This resolves to "bar"
}



