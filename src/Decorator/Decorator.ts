// 装饰器 本身是一种特殊的函数 除类装饰器外 需要开发者手动配置配置项
// 打开装饰器配置 "experimentalDecorators": true,

// 定义装饰器 装饰器在声明对象时即被立即执行
function Dec<T extends {new(...args:any[]):{}}>(target:T){
    // 使用鉴权用例
    // @ts-ignore
    target.prototype.check = function (){
        if (this.name !== "test"){
            let canUse : boolean = false
            return canUse;
        }
    }
    // console.log(target);
    // @ts-ignore
    // Object.seal(target.prototype); // 使对象不轻易可变
    // 如果一个装饰器返回了一个新的类 则这个新的类会替代被装饰的类
}
@Dec
// 类装饰器 在类声明时使用 可以对
class PersonToDecorator {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const testType = new PersonToDecorator("test1")
// @ts-ignore
if (testType.check() !== true){
    console.log("No");
}
// 装饰器常用于判断类型


// 定义构造类型
// new 该类型必须可以用 new 来操作
// ... args 构造器可以接受任意数量的参数、
// any[] 构造器可以接收任意类型的参数
// {} 构造器返回非空和非undefined的对象
type Constructor = {
    new (...args: any[]):{
        // 够造类型可以限定属性
        name: string;
    }
}
function isTypeRight(i:Constructor){}
// class Test{}
// isTypeRight(Test)

// 装饰器类替换
// 创建一个构造器为类型添加实例创建时间
function SetDate<T extends {new(...args:any[]):{}}>(target:T){
    return class extends target{
        CreateTime : string
        constructor(...args:any[]) {
            super(...args);
            this.CreateTime = new Date().toLocaleDateString()
        }
    }
}
// @SetDate
// class Test{}
//
// const C = new Test()
// // @ts-ignore
// console.log(C.CreateTime)

// 装饰器工厂
// 两个装饰器函数互相嵌套 进行功能的增加
function FAC(num:number){
    return function SetDate<T extends {new(...args:any[]):{}}>(target:T){
        for (let i=0; i<num; i++){
            console.log(i);
        }
        return class extends target{
            CreateTime : string
            constructor(...args:any[]) {
                super(...args);
                this.CreateTime = new Date().toLocaleDateString()
            }
        }
    }
}

@FAC(1)
class Test{}
let C = new Test();

// 装饰器组合 一个对象可以被多个装饰器函数装饰

// 属性装饰器 装饰类属性 可以用于添加默认值
// 此时参数为类和属性名
function DEC(target:any,props:any){
    console.log(target,props);
}
class PersonToDecorate {
    @DEC name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

// let P = new PersonToDecorate("Asashishi",19)

// 类方法装饰器
function Logger(target: any, props: string, descriptor: PropertyDescriptor) {
    // 存储原始方法
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
        // 新增功能：方法执行前
        console.log(new Date());
        // 保留属性并执行原函数
        const res = original.apply(this, args);
        // apply 调用方法 但使用数组形式传参
        // call 调用方法 但使用解构传参
        // 新增功能：方法执行后
        console.log(new Date());

        return res;
    };
    return descriptor;
}

// 应用方法装饰器到类的方法
class MyClass {
    @Logger
    myMethod() {
        console.log("Method execution");
    }
}

const myClassInstance = new MyClass();
myClassInstance.myMethod();

// 访问装饰器
// 参数装饰器