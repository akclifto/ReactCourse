console.log("utils.js is running");


export const square = (x) => x*x;
const add = (x, y) =>  x + y;
const subtract = (x, y) => x - y;


//exports: default - name exports
// export { add subtract as default }

export { add, subtract };

//alt for exporting something as default
// export default subtract;

//another alt way to export subtract as a default
export default (x, y) => x - y;
