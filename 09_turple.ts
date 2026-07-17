{

    /**
     * 
     * 
     * tuple 的"结构化类型"只在声明和赋值那一刻生效，一旦调用 push/pop/splice，这种结构化的对应关系就彻底丢失了，
     * 之后 TS 只能提供"整体元素类型的联合"这种弱得多的保护，本质上退化成了"类型受限的普通数组"。
     * 
     */

    let arr: [number, boolean, string] = [1, false, 'hello'];
    arr.push(2, true, 'world');
    
    // console.log(arr.length); // 6

    // 这里说的 readonly 是指不能修改数组的元素，而不是不能修改数组的长度
    let arr2 : readonly [x: number, y: boolean, z?: string] = [1, false, 'hello'];

    let arr3: [x: number, y: boolean, z?: string] = [1, false, 'hello'];
    arr3.push(2, true);
    // console.log(arr3);

    
    console.log(typeof arr2[1]);
}