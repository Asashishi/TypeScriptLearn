// 类型声明

// 限制变量类型
let str : string
let num : number

// 官方建议写法 类型声明使用全小写 大写开头时声明的为类对象 内存消耗大
let str1 : String
str1 = String("Hello")

// 使用 typeof 方法可以查看类型变量
console.log(typeof str1)

str = "Hello";
num = 107;

// 限制函数参数类型和返回类型
function count(x : number, y : number) : number{
    return x + y;
}
// 定义一个函数声明 接收两个整数返回一个整数
let counts : (x : number, y : number) => number;

// 字面量类型 声明的变量仅能存储被预定义的值 类似于枚举
let limitType : 1 | 2 | 3;
// limitType = 5

// 类型断言
let x;
x = <string> str

// 限定一个数组的值
let arr1 : string[]
let arr2 : Array<string>
