// 这段代码必须要用 ts-node 来运行，因为它使用了 TypeScript 6.0.2 的新特性
// 不能用node 来运行，因为它使用了 ESNext 的新特性
// enum 从版本 6.0 开始被废弃了，所以这里的代码只是为了演示 enum 的用法，实际开发中不建议使用 enum

{
    enum Color {
        RED = 1,
        GREEN = 5,
        BLUE = 9
    }

    // console.log(Color.RED); // Output: 0
}

{
    enum Color {
        RED = 1,
        GREEN = 'no',
        BLUE = 'string'
    }

    // console.log(Color.GREEN); // Output: 'no'
}

{
    // const enum 和普通的 enum 的区别在于，const enum 在编译时会被完全删除，编译后的代码中不会有任何关于 const enum 的信息，而普通的 enum 在编译时会被保留，编译后的代码中会有关于 enum 的信息
    const enum Color {
        success = 1,
        fail = 30
    }

    let code: number = Color.success;
    // console.log(code); // Output: 0
}

{
    // 反向映射
    enum Color {
        RED = 1,
        GREEN = 5,
        BLUE = 9
    }

    let green: number = Color.GREEN;
    let key = Color[green];

    console.log(green); // 5
    console.log(key);   // GREEN
}