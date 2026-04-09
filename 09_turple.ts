{
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