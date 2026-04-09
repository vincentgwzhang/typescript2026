{
    // 类型守卫

    // 1, 类型收缩
    // typeof 是有缺陷的, 因为无论数组, 对象, 函数都是返回 object
    let fn = function (val: number | string): void {
        if (typeof val === 'number') {
            console.log(val.toFixed(2));
        } else {
            console.log(val.length);
        }
    }

    const isArr = (arr: any) => arr instanceof Array;

    // fn(123);
    // fn('hello');
    // console.log(isArr([1, 2, 3]));
}

{
    // 2, 类型谓词
    const fn = (val : any) => {
        if (typeof val === 'number') {
            return val.toFixed(2);
        } else {
            return false;
        }
    }

    // ({}) 是语法糖, 相等于 Object.prototype.toString.call(val), 因为 ({}) 就是一个对象.
    const isObj = (val: any) => ({}).toString.call(val) === '[object Object]';
    const isNumber = (val: any): val is number => ({}).toString.call(val) === '[object Number]';

    const checkAndExecute = (data: any) => {
        if (isObj(data)) {
            let val;

            Object.keys(data).forEach(key => {
                val = data[key];
                if (typeof val === 'number') {
                    return val.toFixed(2);
                } else if (typeof val === 'string') {
                    return val.length;
                } else if (typeof val === 'boolean') {
                    return val.toString();
                } else if (typeof val === 'function') {
                    data[key]();
                    return val.toString();
                } else if (typeof val === 'symbol') {
                    return val.toString();
                } else if (typeof val === 'undefined') {
                    return undefined;
                } else {
                    return val.length;
                }
            });
            return data.name;
        } else {
            return data.length;
        }
    }

    checkAndExecute({fn: () => {console.log('hello')}});
}