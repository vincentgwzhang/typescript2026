{
    // Example 1：提取数组元素类型
    type Element<T> = T extends (infer U)[]? U : never;
    type A = Element<number[]>;

    let aObj : A = 12
    console.log("Example 1:", aObj);
}




{
    // Example 2：提取 Promise 内部类型
    type PromiseValue<T> = T extends Promise<infer U> ? U : never;
    type A = PromiseValue<Promise<string>>;

    const aObj: A = "hello";
    console.log("Example 2:", aObj);
}




{
    // Example 3：提取函数返回值类型
    type FunctionReturn<T> = T extends (...args: any[]) => infer R ? R : never;

    function getAge(): number {
        return 40;
    }

    type A = FunctionReturn<typeof getAge>; // number
    const aObj: A = getAge();

    console.log("Example 3:", aObj);
}





{
    // Example 4：提取函数的第一个参数类型
    type FirstParameter<T> = T extends (first: infer P, ...args: any[]) => any ? P : never;

    function printUser(name: string, age: number): void {
        console.log(name, age);
    }
    type A = FirstParameter<typeof printUser>; // string
    const aObj: A = "Vincent";
    console.log("Example 4:", aObj);
}



{
    type First<T extends unknown[]> = T extends [infer U, ...unknown[]] ? U : never;
    type firstType = First<[number, string]>
}



{
    // Example 9：提取对象所有属性值的联合类型

    type ValueType<T> = T extends Record<PropertyKey, infer V> ? V : never;

    type User = {
        name: string;
        age: number;
        active: boolean;
    };

    type A = ValueType<User>;

    const value1: A = "Vincent";
    const value2: A = 40;
    const value3: A = true;

    console.log("Example 9:", value1);
    console.log("Example 9:", value2);
    console.log("Example 9:", value3);

}