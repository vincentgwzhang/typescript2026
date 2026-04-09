// 类型推论

{
    let str = [1, 2, 4];

    let str2; // 默认是 any 类型

    str2 = 456
    str2 = 'vincent'
}

{
    type num = 1 extends number ? 1 : 0
}