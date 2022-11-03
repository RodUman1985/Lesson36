function x(y){
    return y*5;
}
//t - функция,которая принимает  один численный аргумент
// n - любое число
function f(t,n){
return n+t(n);
}
console.log(f(x,3))
// лямбда выражения 
// любую функцию можно заменить на лямбду и наоборот, кроме случаев когда эта функция либо лямбда объявлена внутри объектов
console.log( f((a) => a*a,10 ))
//ООП
// способы создания объектов
let cat = {

    name: 'Tom',
    age:5,
    
    meow: ()=> console.log('meoooooow')            //function (){}
};
cat.age=10;
console.log (cat);
cat.meow();

//каждый объект в javaScript этл ассоциативный массив (примерно как HashMap  из Java, где в качестве ключа используются названия поля объекта)
cat['name']='Bull';
cat['color'] = 'red';
cat.play= (toy)=>console.log('cat is playing  '+toy);
console.log (cat);
cat['meow']();
cat['play']('dog');
// в js вместо наследования используется прототипирование
let cat2={};
cat2.__proto__= cat;
console.log(cat2);
cat2.meow(); 

let cat3={
    meow:()=> console.log("hav")
};
//cat3.__proto__= cat2;
Object.setPrototypeOf(cat3,cat2);
cat3.play('dog');
cat3.meow();
console.log(cat3);
cat3.__proto__.meow(); // вызов метода из родительского объекта
//2 способ
function Dog(){
// конструктор

this.name = name;
this.hav=() => console.log('hav - hav')
};
let dog= new Dog();
console.log(dog); 
dog.hav();
// 3 способ
class User {
    #secret;
    name;
    age;
   
    // конструктор (может быть только 1)
    constructor(name){
        this.name=name;
        this.#secret='big secret'
    };
    pay() {
        console.log('нечем')
    }
    static info (){
        console.log ('this metod is static')
    }
}
let user= new User('Vasiyan');
console.log (user);
user.pay();
console.log();
User.info();
class Student extends User{
    constructor(){
        super('Petya');
    }
    pay(){
     super.pay();
     console.log('совсем нечем')
    }
}
let s= new Student();
console.log(s);
s.pay();
console.log(typeof[1,2,3,4])// object
console.log(typeof s)// object
console.log(typeof f );// function
console.log(typeof Student );// function