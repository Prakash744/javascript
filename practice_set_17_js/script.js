let DATA="secret information";
class user{
constructor(name,email){
    this.name=name;
    this.email=email;
}
viewData(){
    console.log("data=",DATA);
}
}
let stu1=new user("krishna","abc@email.com");
let stu2=new user("Radha", "def@gmail.com");