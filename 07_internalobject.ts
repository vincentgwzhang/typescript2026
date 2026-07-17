{
    let num: Number = new Number(123);
    // console.log(num);
}

{
    let date: Date = new Date();
    // console.log(date);
}

{
    // let div = document.createElement('div');
    // console.log(typeof div);
}

{
    interface User {
        id: number;
        name: string;
        email: string;
    }

    let promise: Promise<User> = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP 请求失败');
                }

                // const user = (await response.json()) as User;
                return response.json() as Promise<User>;
            })
            .then((user) => {
                resolve(user);
            })
            .catch((error) => {
                reject(error);
            });
    });

    promise.then((res) => {
        console.log(res.name, res.email);
    }).catch((error) => {
        console.log(error);
    });
}

{
    setTimeout(() => {
        console.log('ABC');

        setTimeout(() => {
            console.log('DEF');

            setTimeout(() => {
                console.log('GHI');
            }, 1000);

        }, 1000)
    }, 1000)
}
