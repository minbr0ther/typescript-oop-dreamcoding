{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected : 외부에서 접근 못하지만 상속받은 클래스에서 접근가능
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // private 외부에서 변경 못함
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // 외부에서도 클래스를 만들지 않고 사용 가능
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // 외부에서 내부의 private를 간접적으로 조작할 수 있다
      if (beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32); // constructor를 private로 만들어서 new 사용 불가능
  maker.fillCoffeeBeans(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('age should be greater than zero');
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName); // Steve Jobs
  user.age = 6;
  console.log(user.age);
}
