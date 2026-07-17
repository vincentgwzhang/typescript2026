{
    // 例子1: 构造类型
    type ID = string | number;

    let id1: ID = 1234;
    let id2: ID = 'I am ID'
}

{
    // 例子2: 构造值
    type name = 'Summer' | 'Huimin'
    let love : name = 'Summer';
}


{
    // 例子3: 类似 interface, 类
    type Point = {
        x: number
        y: number
    }

    let p1: Point = {
        x: 1,
        y: 2
    }
}

{
    // 例子4：加上泛型
    type APIResponse<T> = {
        code: number
        data: T
        message: string
    }

    type Data = {
        val: string
        error? : string
    }

    let response : APIResponse<Data> = {
        code: 12,
        data: {
            val: "",
            error: undefined
        },
        message: ""
    }

    console.log(response);
}

{
    // 例子5: 
    type PartialRecord<K extends string, V> = {
        [k in K]? : V
    }

    type Partial = PartialRecord<'ADMIN' | 'USER', number>;

    let obj : Partial = {
        ADMIN: 12
    }
}
