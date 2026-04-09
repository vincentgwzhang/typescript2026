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

// 这是利用剩余参数语法来定义一个函数，参数类型为 any[]
function aFun1(...args: any[]): void {
    // console.log(args)

    // IArguments 是一个内置的接口，表示函数调用时传入的参数对象, 他的内容其实跟上面的 ABC 接口差不多
    // let a: IArguments = arguments
    let a: ABC = arguments
    console.log(a[0], a[1], a[2])
}

aFun1(1, 2, 3);