function add(a: number, b: number): number {
    return a + b;
}

const addd = (a: number = 10, b?: number): number => b ? a + b : a;

interface User {
    name: string
    age: number
}

function createUser(user: User): User {
    return {...user, age: user.age + 1};
}

interface Obj {
    user: number[]
    add: (num: number) => void
}

let obj: Obj = {
    user: [1, 2, 3],
    add(num: number): void {
        this.user.push(num);
    }
}

obj.add(4);
obj.add(5);
// console.log(obj.user);

let user: number[] = [7, 8, 9]

// 函数重载
function findNum(id: number[]): number[]
function findNum(id: number): number[]
function findNum(): number[]
function findNum(ids? : number[] | number): number[] {// 最后写函数体的函数的参数覆盖了前面所有函数的参数
    if (typeof ids === 'number') {
        return user.filter(val => val == ids);
    } else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    } else {
        return user;
    }
}

// console.log(findNum([10, 11]));
// console.log(findNum(8)); // [2]
// console.log(findNum());
