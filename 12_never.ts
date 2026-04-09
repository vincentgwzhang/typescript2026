// never 类型

{
    type A = string & number

    // never 在这里是永远不会执行完成的
    function f1(): never {
        throw new Error('error happened');
    }

    type B = 'A' | 'B' | 'X'
    function kun(value : B) {
        switch (value) {
            case 'A': 
                break;
            case 'B': 
                break;
            case 'X': 
                break;
            default :
                const error: never = value;
                break;
        }
    }
}
