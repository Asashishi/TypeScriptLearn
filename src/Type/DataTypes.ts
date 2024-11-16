/*
* JavaScript 数据类型
* string
* number
* boolean
* null
* undefined
* bigint
* symbol // 作为对象属性的键 防止在比较判断时重复 每个由 Symbol() 创建的 Symbol 值都是唯一的 即使它们的描述相同
 */
const symbol1 = Symbol("desc");
const symbol2 = Symbol("desc");
// 此注解可以让 TypeScript 编译器忽略被注解的变量
// @ts-ignore
console.log(symbol1 === symbol2); // false
/*
* object
*/
let Oa : object // 能存储非原始类型
let Ob : Object // 能存储一切能够调用 Object 的类型 (null undefined以外)
// 对象类型的动态结构
let Person : {
    name : string
    age : number
    [key : string] : any // 可以存储任何 key 为 string 的值
}

Person = {
    name : "Jack",
    age : 18,
    "A": 1
};
/*
* TypeScript 新增数据类型
* any 泛型 不使用类型检查
* unknown 未知类型 相当于类型安全的 any 泛型 但会触发类型检查
* never 无值类型
*/
// js 中任何函数都有返回类型 除非函数不能正常执行
function demo() : never{
    // 抛出异常终止函数执行
    throw new Error("error");
}
/*
* void 函数\方法无 undefined 之外的返回值
* tuple 不可变类型
*/
// 元组 特殊数组类型 固定数组元素的数量和类型
let turple1 : [string,number]
// 限定两种类型的元组
let turple2 : [...string[]]
/* enum */
// 定义枚举类型 整型枚举
enum Color {
    red,
    green,
    blue
}
// 反向映射 仅整型枚举使用
console.log(Color[1]) // green
// 字符串枚举
enum Color_Str{
    red = "red",
    green = "green",
    blue = "blue"
}
// 常量枚举
// const enum xxx{}
let c : Color = Color.red;
// 实例化此类型时仅能使用被定义的类型
console.log(c)
/* 自定义类型方式
* type */
// 联合类型用法 ||
type Status = number | string | boolean; // 一个限定类型的类型对象
type Gender = 'Male' | 'Female'
// 交叉类型用法 &&
type Area = {
    m : number;
    name : string;
}
type Address = {
    name : string;
    m : number;
    h : number;
}
// 类型声明函数 不会严格进行类型限定 箭头函数的简写为函数时将返回函数的返回值 将不兼容 故不限制
type LogFunc = () => void
const func : LogFunc = function (){}
type Where = Area & Address // Where 类型 必须包含 Area 和 Address 的所有属性
function getStatus(status : Status){
    return status;
}
/*
* interface
* */