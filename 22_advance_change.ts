{
    interface A {
        name: string
        age: number
    }

    interface B {
        name: string
        age: number
        sex: string
    }

    let a: A = {
        name: 'Vincent 1',
        age: 20
    }

    let b: B = {
        name: 'Vincent 2',
        age: 21,
        sex: 'male'
    }

    a = b; // 协变
    

    let fna = (param: A) => {console.log('AAAAA')}
    let fnb = (param: B) => {console.log('BBBBB')}

    fnb = fna; // 逆变
    fnb({name: 'Vincent 3', age: 22, sex: 'female'});
}