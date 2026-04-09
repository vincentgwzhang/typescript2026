{
    function* gen() {
        yield Promise.resolve('123')
        yield 'abc'
        yield 'def'
    }

    let man = gen();
    // console.log(man.next())
    // console.log(man.next())
    // console.log(man.next())
}

{
    let set: Set<number> = new Set([1, 1, 2, 2, 3, 3]);
    // console.log(set.size)

    const each = (value: any) => {
        let it: any = value[Symbol.iterator]()
        let next: any = {done: false}

        while (!next.done) {
            next = it.next();

            if (!next.done) {
                console.log(next.value)
            }
        }
    }

    const each2 = (value: any) => {
        for (let val of value) {// 可以这么做是因为set 有 Symbol.iterator
            // console.log(val)
        }
    }

    each2(set);
}

{
    let map: Map<any, any> = new Map();
    map.set('ads', 11);
}

{
    // 解构的底层原理就是调用 Symbol.iterator
    let a = [1, 2, 3]
    let copy = [...a]

    // console.log(copy[0], copy[1], copy[2]);
}

{
    let obj = {
        max: 5,
        current : 0,
        [Symbol.iterator]() { // 自己写! 
            return {
                max: this.max,
                current: this.current,
                next () {
                    if (this.current == this.max) {
                        return {
                            value: undefined,
                            done: true
                        }
                    } else {
                        return {
                            value: this.current++,
                            done: false
                        }
                    }
                }
            }
        }
    }

    for (let val of obj) {// 可以这么做是因为set 有 Symbol.iterator
        console.log(val)
    }

    console.log([...obj])
}