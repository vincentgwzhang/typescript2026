{
    // set
    let set: Set<number> = new Set([6, 5, 4, 3, 2, 1]);
    set.add(1);
    set.add(2);
    set.add(3);
    //console.log(set);

    set.forEach((value) => {
        // console.log(value);
    });

    set.clear();

}

{
    // map 的 key 可以是任何类型，value 也可以是任何类型
    let map: Map<string, number> = new Map([['a', 1], ['b', 2], ['c', 3]]);
    map.set('d', 4);
    map.set('e', 5);
    map.set('f', 6);
    // console.log(map);

    map.forEach((value, key) => {
        // console.log(value, key);
    });

    map.clear();
}


{
    // weakmap 的 key 必须是对象，value 可以是任何类型
    let weakmap: WeakMap<object, number> = new WeakMap();
    let obj = {a: 1};

    weakmap.set(obj, 1);
    weakmap.set({b: 2}, 2);
    weakmap.set({c: 3}, 3);
    // console.log(weakmap);

    console.log(weakmap.get(obj));
    console.log(weakmap.has(obj));
}