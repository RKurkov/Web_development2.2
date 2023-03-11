//Задача №1 Функция конвертации скоростей

function convertSpeed(speed, conv) {
    if (conv == "toMS") {
        return speed/3.6;
    }
    else if (conv == "toKMH") {
        return speed*3.6;
    }
}

console.log(`convertSpeed(36, 'toMS') -> ${convertSpeed(36, 'toMS')} м/с`);
console.log(`convertSpeed(20, 'toKMH') -> ${convertSpeed(20, 'toKMH')} км/ч`);

//Задача №2 Абсолютное значение

function abs(number) {
    let result = number;
    if (number < 0) {
        result = number * -1;
    }
    return result;
}

console.log(`absValue(-2) -> ${abs(-2)}`);
console.log(`absValue(100) -> ${abs(100)}`);
console.log(`absValue(0) -> ${abs(0)}`);

//Задача №3 Работа с объектом 

function Student(group,last_name,first_name) {
    this.group = group;
    this.last_name = last_name;
    this.first_name = first_name;
}

let student = new Student("211-325","Kurkov","Ruslan");

console.log(`Список свойств: ${Object.getOwnPropertyNames(student)}`)
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//Задача №4 Случайные числа

function randomNumber (min, max) {
    let random = min + Math.random() * (max - min + 1);
    return Math.floor(random);
}

console.log(`randomNumber(0, 10) -> ${randomNumber(0, 10)}`);
console.log(`randomNumber(-10, 10) -> ${randomNumber(-10, 10)}`);

//Задача №5 Значения из массива

let arr1 = [1,2,3,4];
let num1 = 2;
let arr2 = [1,2,3,4];
let num2 = 3;

function newArr(arr, num) {
    let resArr = []
    for (let i = 0; i < num; i++) {
        //resArr.push(randomNumber(workArr[0], workArr[workArr.length - 1]));
        resArr.push(arr[randomNumber(0, arr.length - 1)]);
    }
    return resArr;
}

console.log(`sampleArray([${arr1}], ${num1}) -> [${newArr(arr1, num1)}]`);
console.log(`sampleArray([${arr2}], ${num2}) -> [${newArr(arr2, num2)}]`);
