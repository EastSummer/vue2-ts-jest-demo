export default class G {
    name: string;

    age: number;

    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }

    sayHi(): void {
      console.log(this.name, '说你好')
    }
}

// export class NewG extends G {
//   sayMorning(): void {
//     console.log(this.name, '早上好')
//   }
// }
