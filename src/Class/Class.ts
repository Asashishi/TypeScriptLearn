// 创建类
class Hito{

    // 实现任意参数的构造函数

    name: string | undefined;
    age: number | undefined;

    // 使用三目运算实现任意参数的构造
    constructor(name? :string, age? :number){
        name ? this.name = name : null;
        age ? this.age = age : null;
    }

    // 简写够造器 不用在类中声明属性 在够造函数中声明即可
    // constructor(public name:string, public age:number){}
    info(){
        console.log(`name:${this.name},age:${this.age}`);
    }
}

const hito = new Hito("hito", 18);
hito.info();

// 类继承
class Gakuse extends Hito{
    static identity : "Gakuse" = "Gakuse";
    // 简写构造器
    constructor(name:string, age:number){
        super(name, age); // 使用父类属性作为属性 不用单独声明
    }
    // 多态
    override info(){
        super.info();
        console.log(`identity:${Gakuse.identity}`);
    }
}
console.log(Gakuse.identity);
const gakuse = new Gakuse("gakuse", 18);
gakuse.info();

/*
* 类属性修饰
* public 类类外都能访问 不写修饰符的情况下默认为 public
* protected 仅类内部和子类能访问
* private 仅内内部能访问
* static 静态的 不用实例化也可调用
* readonly 只能在初始化和够造函数中赋值 一旦赋值就不能修改
* */

// 抽象类 无法被实例化 专门用于定义结构和行为 抽象类的属性和抽象方法必须被完整实现 普通方法继承抽象类的普通方法可以选择实现
// 抽象类的够造器子类可以使用 抽象类中已经实现的普通属性和方法也可以被直接使用
abstract class Animal{
    protected name : string
    constructor(name:string) {
        this.name = name;
    }
    abstract eat():void;
}
class Leo extends Animal{
    eat(){
        console.log("eat");
    }
}
const leo = new Leo("Asashishi");
leo.eat();

// 接口 继承接口的类必须实现接口中的方法 接口无法定义具体方法 接口的属性不能使用修饰符修饰
// Ts 中 接口可以当作类型使用
interface IAnimal{
    name : string;
    age : number;
    eat():void;
    sleep():void;
}
class InuAsashishi implements IAnimal{
    public name : string = "Inu";
    public age : number = 18;
    eat():void{
        console.log("eat");
    }
    sleep():void{
        console.log("sleep");
    }
}
const inuAsashishi = new InuAsashishi();
inuAsashishi.eat();
inuAsashishi.sleep();
// 接口可以定义函数结构
interface CountInterface{
    (a:number, b:number):number;
}
const counter: CountInterface = (x,y) => {
    return x + y;
}
// 接口之间是可以继承的 继承多个接口的类必须实现所有接口的属性和方法
interface Human {
    name : string;
    age : number;
}
interface Dog extends Human{
    identity : "MesuInu";
}
// 可合并 被重新声明的接口会合并之前的声明

// 一个类只能继承一个抽象类但可以继承多个接口
