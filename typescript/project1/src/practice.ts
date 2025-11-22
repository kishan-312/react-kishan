let name: string = "kishan" ;
let age: number = 23 ;
let data: null | string = null
let isKishan: boolean = true 

let datas: undefined | string ;
let bigint1: bigint = 123455n ;

//  any
let any2: any = "kishan" ;
let typesUnknown: unknown = "hhello";

if(typeof typesUnknown === "string") {

    console.log(typesUnknown.toUpperCase());
    

}

let obj1: {name: string; no: number  } = {

    name : "kishan",
    no : 12

}

console.log(obj1);

let names: string[] = ["kishan","rony"] ;
let nos: Array<number> = [12,1,23,4] ;

let userTuple: [string,number] = ["kishan",23]


type alias = {

    name : string;
    age : number

}











