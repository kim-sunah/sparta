const myMap = new Map();
myMap.set('one',1)
myMap.set('two',2)
myMap.set('three',3)

console.log(myMap.keys())

for(const key of myMap.keys()){
    console.log(key)
}

console.log(myMap.entries())    //[Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }

for (const entry of myMap.entries()){
    console.log(entry)
    // [ 'one', 1 ]
    // [ 'two', 2 ]
    // [ 'three', 3 ]
}

console.log(myMap.size)     //3
console.log(myMap.has("two"))       //true