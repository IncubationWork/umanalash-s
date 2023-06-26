class Person {
        constructor(name,age,sex)
            {
               this.name = name;
               this.age = age;
               this.sex = sex;
            }
    
     getVoiceType(){
        if(this.age===26 && this.sex === "male")
        {
            return "tenor";
        }
       else if(this.age<25)
        {
            return "soft";
        }
        else(this.age>50 && this.sex ==="male")
        {
            return "hoarse";
        }
     }
    }
class Employee extends Person {
        constructor(name,age,sex,id)
            {
                super(name,age,sex)
                this.id = id;
            }
}
let a = new Employee("rahul",26,"male",1);
let b = new Employee("ara",24,"female",2);
let c = new Employee("ragav",53,"male",3)

let output = a.getVoiceType();
console.log(output);
let output1 = b.getVoiceType();
console.log(output1);
let output2 = c.getVoiceType();
console.log(output2);
let output3 = a.getVoiceType()=== b.getVoiceType();
console.log(output3);
let answer = a.prototype ===b.prototype;
console.log(answer);

