// 所有的方法和变量必须被导出才能被使用
namespace Test {
    export let a = 1

    export namespace Test2 {
        export let b = 10;
    }
}

namespace Test {
    export let b = 3;
}

console.log(Test.b)
console.log(Test.Test2.b)
