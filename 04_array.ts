// number[]
let arr: number[] = [1, 2, 3, 4, 5]

// Array<number>
let arr2: Array<number> = [1, 2, 3, 4, 5]

interface Person {
    name: string
}

let people: Person[] = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
]

let people2 : Array<Person> = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
]

// 二维数组
let metrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let metrix2: Array<Array<number>> = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let mixed: any[] = [1, 'two', true, { name: 'Alice' }, [1, 2, 3]]

let mixed2: [
    number, 
    string, 
    boolean, 
    { name: string }, 
    number[]
] = [
    1, 
    'two', 
    true, 
    { name: 'Alice' }, 
    [1, 2, 3]
]

//////////////////////////////////////////////////////////

interface ABC {
    callee: Function
    length: number
    [index: number]: any
}

// 注意：下面的 [0], [1] 不是索引签名，因为索引签名已经在 ABC 这个 interface 里面了。下面的 [0]
const abc: ABC = {
    callee: function() {},
    length: 3,
    [0]: "hello", // ← 这是 computed property，key 是数字 0
    [1]: 42,      // ← key 是数字 1
    [2]: true,    // ← key 是数字 2
}

// 这是利用剩余参数语法来定义一个函数，参数类型为 any[]
function aFun1(...args: any[]): void {
    // console.log(args)

    // IArguments 是一个内置的接口，表示函数调用时传入的参数对象, 他的内容其实跟上面的 ABC 接口差不多
    // let a: IArguments = arguments
    let a: ABC = arguments
    console.log(a[0], a[1], a[2])
}

aFun1(1, 2, 3);

// Javascript 最后都是 string
console.log(abc[0])
console.log(abc["0"])


const def: ABC = {
    callee: function(val: number) {console.log(val)},
    length: 3,
    [0]: "hello", // ← 这是 computed property，key 是数字 0
    [1]: 42,      // ← key 是数字 1
    [2]: true,    // ← key 是数字 2
}

def.callee(13);

const ghi: ABC = {
    callee: (value: number) => {console.log(value)},
    length: 3,
    [0]: "hello",
    [1]: 42,
    [2]: true,
}

ghi.callee(20);