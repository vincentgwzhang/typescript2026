let a: number = 999
console.log(a)

// 1. Top type: any unknown
// 2. Object
// 3. Number, String, Boolean
// 4. number, string, boolean
// 5.1 'ok', false
// 6. never


// unknown 只能赋值给自身, 和 any
let arr: any = []
let bn: number = 5
let xiaoman: unknown = {a: 1}
// console.log(xiaoman.a) 无法使用属性

let xiaoman2: any = {a: 1}
console.log(xiaoman2.a) // 可以使用属性


let aObject1: Object = {}
let aObject2: object = []
let aObject3: Object = 123
let aObject4: Object = '123'
let aObject5: Object = true
let aObject6: Object = () => 213

// 原始类型是不支持的, 数组和函数是支持的
// let aObject7: object = '123'
// let aObject9: object = true
let aObject8: object = []
let aObject10: object = () => 213


let aEm1: {} = 123;
let aEm2: {} = '123';
let aEm3: {} = [];
let aEm4: {} = () => 123;
let aEm5: {} = {name: 1};

let aString: {} = {name: 1}
