let obj1 = {

    name : "kishan",
    age : 23

}
const { age : a} = obj1
console.log(a);


let obj2 = {

    name : "roshan",

}



console.log(Object.setPrototypeOf(obj1,obj2));
console.log(obj2.isPrototypeOf(obj1));

console.log(Object.prototype);
const k1 = Object.create(Object.getPrototypeOf(obj1)  )
console.log(Object.assign(k1,obj1));
console.log(obj1.__proto___ === Object.prototype);

console.log("request headers already reached to server but request body steal in process");


let my_list = [10,20,30,40] ;
for (const item in my_list) {
    
        console.log(item);
        
    
}

