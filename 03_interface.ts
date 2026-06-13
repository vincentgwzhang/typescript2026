interface Person {
    name: string
    age: number
    sayHello(): void
}

interface Person {
    readonly id: number
    work? : string // 可选属性，表示该属性可以有也可以没有
    [propName: string]: any // 索引签名，表示可以有任意数量的属性，属性名为字符串，属性值为任意类型, 但不要写非any, 否则会导致无法使用其他属性
    readonly cb: () => boolean // 函数类型，表示该属性是一个函数，函数没有参数，返回值为boolean
}

let a: Person = {
    id: 1,
    name: 'Vincent',
    age: 25,
    sayHello() {
        console.log('Hello!');
    },
    cb() {
        return true;
    }
}

a.cb()


interface B {
    name: string
}

interface C extends B {
    age: number
}

let c: C = {
    name: 'Vincent',
    age: 25
}
//////////////////////////////////////

interface Fn {
    // 意思是：凡是符合 Fn 类型的值，必须是一个接受 string、返回 number[] 的函数。
    (name: string): number[]
}

// 函数本身就是一个对象。fn 现在既然继承 Fn, 就是直接输出一个函数
const fn: Fn = (name) => {
    console.log(name);
    return [1, 2, 3];
}

///////////////////////////////////////