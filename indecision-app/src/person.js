
//name function to export
const isAdult = (x) => (x < 18) ? false : true;

//default export 
export const canDrink = (x) => (x <= 21) ? false : true;

//named export
export { isAdult };