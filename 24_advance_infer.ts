interface User {
    name: string,
    age: number
}

{
    type PromiseType = Promise<User>;
    type GetPromiseType<T> = T extends Promise<infer R> ? R : never;
    type T = GetPromiseType<PromiseType>;
}

{
    // infer 的协变
    let obj = {
        name: 'Zhang San',
        age: 18
    }

    type Bar<T> = T extends { a: infer U, b: infer U } ? U : T;
    type T = Bar<typeof obj>;
}

{
    // infer 的逆变
    type Bar<T> = T extends { 
        a: infer U, 
        b: infer U 
    } ? U : T;
    type T = Bar<{ a: 1, b: 2 }>;
}