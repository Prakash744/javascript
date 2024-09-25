class person{
    eat() {
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
   
}
class engineer{
    work(){
        console.log("solves problem","build something");
    }
}
 class doctor extends person{
    work(){
        console.log("treats patient");
    }
 }
 let krishnaObj=new doctor();