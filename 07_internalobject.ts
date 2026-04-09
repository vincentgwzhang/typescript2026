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
    let promise: Promise<String> = new Promise((resolve, reject) => {
        resolve('hello world');
    });

    promise.then((res) => {
        // console.log(res.length);
    });
}