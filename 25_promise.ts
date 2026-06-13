{
    const promise = new Promise<string>((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("操作成功！");
        } else {
            reject(new Error("操作失败！"));
        }
    });
}

{
    /**
     * async 的本质规则, 就是 async 函数会把返回值用 Promise.resolve() 包一层。
     * 如果传入的值本身已经是一个 Promise，它不会再包一层，而是直接返回那个 Promise
     * 所以对于直接返回 Promise, 是否使用 async 都一样
     * 
     * 什么时候加 async 才有意义？ 当你函数内部需要用 await 的时候才会有意义
     * await 只是让函数内部的代码"看起来同步"，但函数本身对外暴露的，依然是一个 Promise。
     */
    function fetchUser(id: number, _name: string, _age: number): Promise<{ name: string; age: number }> {
        return new Promise<{ name: string; age: number }>((resolve, reject) => {
            setTimeout(() => {
                if (id > 0) {
                    return resolve({ name: _name, age: _age});
                } else {
                    return reject(new Error('Error try'));
                }
            }, 50 * _age)
        });
    }

    // 只要用 Promise 就可以 await
    const user = await fetchUser(1, 'abc', 20);
    console.log(user);

    // 这是异步调用的，程序在这里不会等待
    // fetchUser(1)
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err))
    //     .finally(() => console.log('Finish!'));

    // 添加了 await 以后，程序会等待, 此处是等待所有 Promise 完成
    // const [user1, user2] = await Promise.all([fetchUser(1, 'abc', 20), fetchUser(2, 'def', 30)]);
    // console.log(user1);
    // console.log(user2);

    // 添加了 await 以后，程序会等待, 此处是等待其中一个 Promise 完成
    // const onlyOneUser = await Promise.race([fetchUser(1, 'abc', 20), fetchUser(2, 'def', 30)]);
    // console.log(onlyOneUser);

    // const result = await Promise.allSettled([fetchUser(1, 'abc', 20), fetchUser(2, 'def', 30)]);
    // 怎么使用？
}

{
    /**
     * 使用 Promise.resolve('直接成功'); 的意义在于测试和占位
     */
    // const p1 = Promise.resolve('直接成功');
    // const p2 = Promise.reject(new Error('直接失败'));
    console.log('I should finish here');
}