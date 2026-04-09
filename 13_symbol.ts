{
    let a1: symbol = Symbol('string or number or nothing')
    let a2: symbol = Symbol('string or number or nothing')

    // console.log(a1); // 唯一的
    // console.log(a2);
    // console.log(a1 === a2) // false
    // console.log(Symbol.for('abc') === Symbol.for('abc')) // 在全局找有没有注册过这个key

    let obj = {
        name: 1,
        [a1]: 111,
        [a2]: 222
    }

    // console.log(obj)


    // 只有name 被输出
    for (let key in obj) {
        // console.log(key)
    }

    // 只有name 被输出
    // console.log(Object.keys(obj));

    // 只有name 被输出
    // console.log(Object.getOwnPropertyNames(obj))

    // 之输出 Symbol
    // console.log(Object.getOwnPropertySymbols(obj))

    // 终于正常输出
    // console.log(Reflect.ownKeys(obj))
}
