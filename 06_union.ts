// 联合类型
{
    let phone: number | string = '123-456-7890'

    // !!val 就是说把任意值转换为 boolean
    let fn = function (val: number | boolean): boolean {
        return !!val
    }

    // console.log(fn(true))
}




// 交叉类型
{
    interface People {
        name: string,
        age: number,

    }

    interface Man {
        sex: number,

    }

    const person = (man: People & Man) => {
        console.log(man.name, man.age, man.sex)
    }

    // person({name: '张三', age: 18, sex: 1})
}

// 类型断言
{
    let fn = function (val: number | string): void {
        // val as string 的意思是说 val 可能是一个字符串，我们想要把它当作字符串来处理
        console.log((val as string).length);
    }

    // fn('hello world');
    // fn(123); // 运行时会报错，因为数字没有 length 属性
}

{
    interface A {
        run: string
    }

    interface B {
        build: string
    }

    let fn = (type: A | B) => {
        console.log((type as A).run)
    }

    fn({ run: 'run' });
}