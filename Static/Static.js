// Static = keyword that defines properties or methods that belong
//          to a class rather than the objects created 
//          from that class (class owns anything static, not the objects)


// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius){
//     return radius * 2;
//   }

//   static getCircumference(radius){
//     return 2 * this.PI * radius;
//     }

//   static getArea(radius){
//     return this.PI * radius * radius;
//   }
// }


// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));


class user {
  static userCount = 0;

  constructor(username){
    this.username = username;
    user.userCount++;
  }

  static getUserCount(){
    console.log(`There are ${User.userCount} users on`)
  }

  sayHello () {
    console.log(`My, username is this ${this.username}`)
  }
}


const user1 = new user ("Miles");
const user2 = new user ("Gideon");

console.log(user1);
console.log(user2);
User.getUserCount();