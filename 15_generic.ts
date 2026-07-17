{
    function xiaoman(a: number, b: number): Array<number> {
        return [a, b];
    }

    function xiaoman2(a: string, b: string): Array<string> {
        return [a, b];
    }

    function xiaoman3<T> (a: T, b: T): Array<T> {
        return [a, b];
    }

    console.log(xiaoman3(1, 2))
}

{
    type A<T> = string | number | T

    let a: A<boolean> = 'abc'
    let v: A<number> = 123
    let b: A<string> = 'abc'
}

{
    function ob<T extends object, k extends keyof T>(obj: T, key: k): T[k] {
        return obj[key];
    }
}

{
    interface Data {
        name?: string
        age?: number
        sex?: string
    }

    type options<T extends object> = {
        readonly [key in keyof T]? : T[key]
    }

    type B = options<Data>
}