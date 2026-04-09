{
    let person = {
        name: 'Vincent',
        age: 2,
        sex: 'male'
    }

    let proxy = new Proxy(
        person, 
        {
            get(target, key, receiver) {
                if (target.age < 18) {
                    return Reflect.get(target, key, receiver);
                } else {
                    return 'not allowed';
                }
            },
            set(target, key, value, receiver) {
                return true;
            },
            apply(target, thisArg, argumentsList) {
            },
            // has() {},
            // ownKeys() {},
            // construct() {},
            // deleteProperty() {}
        }
    );

    // console.log(proxy.name);
    // console.log(Reflect.get(proxy, 'name'));
}

{
    const list: Set<Function> = new Set();
    const autorun = (fn: Function) => {
        if (list.has(fn)) {
            return;
        }
        list.add(fn);
    }
    // 观察者模式
    const observerable = <T extends object>(obj: T) => {
        return new Proxy(obj, {
            get(target, key, receiver) {
                return Reflect.get(target, key, receiver);
            },
            set(target, key, value, receiver) {
                list.forEach(fn => fn());
                return Reflect.set(target, key, value, receiver);
            },
        });
    }

    const person = observerable({
        name: 'Vincent',
        age: 20,
        sex: 'male'
    });

    autorun(() => {console.log(person.name); });
    person.name = 'John';
}