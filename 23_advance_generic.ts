interface User {
    address: string,
    name: string,
    age: number
}

{
    // Partial
    type PartialUser = Partial<User>;
    let user: PartialUser = {
        address: '123 Main St',
        name: 'John Doe'
    }


    type CustomPartial<T> = {
        [key in keyof T]?: T[key]
    }

    let user2: CustomPartial<User> = {
        address: '123 Main St',
        name: 'John Doe'
    }
}

{
    // Required
    type RequiredUser = Required<User>;
    let user: RequiredUser = {
        address: '123 Main St',
        name: 'John Doe',
        age: 20
    }

    // -? 是去掉可选属性
    type CustomRequired<T> = {
        [key in keyof T]-?: T[key]
    }

    let user2: CustomRequired<User> = {
        address: '123 Main St',
        name: 'John Doe',
        age: 20
    }
}

{
    // Readonly
    type ReadonlyUser = Readonly<User>;
    let user: ReadonlyUser = {
        address: '123 Main St',
        name: 'John Doe',
        age: 20
    }

    type CustomReadonly<T> = {
        readonly [key in keyof T]: T[key]
    }

    let user2: CustomReadonly<User> = {
        address: '123 Main St',
        name: 'John Doe',
        age: 20
    }
}

{
    // Pick
    type PickUser = Pick<User, 'name' | 'age'>;
    let user: PickUser = {
        name: 'John Doe',
        age: 20
    }

    type CustomPick<T, K extends keyof T> = {
        [key in K]: T[key]
    }
    let user2: CustomPick<User, 'name' | 'age'> = {
        name: 'John Doe',
        age: 20
    }
}

{
    // Exclude
    type ExcludeUser = Exclude<User, 'address'>;
    let user: ExcludeUser = {
        name: 'John Doe',
        age: 20
    }

    type CustomExclude<T, K extends keyof T> = {
        [key in keyof T as key extends K ? never : key]: T[key]
    }
    let user2: CustomExclude<User, 'address'> = {
        name: 'John Doe',
        age: 20
    }
}

{
    // omit
    type OmitUser = Omit<User, 'address'>;
    let user: OmitUser = {
        name: 'John Doe',
        age: 20
    }

    type CustomOmit<T, K extends keyof T> = {
        [key in keyof T as key extends K ? never : key]: T[key]
    }
    let user2: CustomOmit<User, 'address'> = {
        name: 'John Doe',
        age: 20
    }
}

{
    // Record
    type RecordUser = Record<string, User>;
    let user: RecordUser = {
        '1': {
            address: '123 Main St',
            name: 'John Doe',
            age: 20
        }
    }

    type CustomRecord<K extends keyof any, T> = {
        [key in K]: T
    }
    let user2: CustomRecord<string, User> = {
        '1': {
            address: '123 Main St',
            name: 'John Doe',
            age: 20
        }
    }
}

{
    // ReturnType
    type ReturnTypeUser = ReturnType<() => User>;
    let user: ReturnTypeUser = {
        address: '123 Main St',
        name: 'John Doe',
        age: 20
    }

    // infer 关键字是推断返回值的类型
    type CustomReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any
    let user2: CustomReturnType<() => User> = {
        address: '123 Main St',
        name: 'John Doe',
        age: 20
    }
}