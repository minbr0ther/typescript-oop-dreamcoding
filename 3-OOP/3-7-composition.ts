{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean; // optional 있을 수도 있고 없을 수도 있다
    hasSugar?: boolean; // 작성하지 않으면 없는거다 !
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 인터페이스와 커피머신만 있으면 모든 기능들을 사용할 수 있다
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // private 외부에서 변경 못함
    private coffeeBeans: number = 0; // instance (object) level

    // 전달받은 milkFrother, SugarProvider로 커피를 만든다
    constructor(
      coffeeBeans: number,
      private milk: milkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      // 외부에서 내부의 private를 간접적으로 조작할 수 있다
      if (beans < 0) {
        throw new Error('value for beans should be greater than zero');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine... ✨');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preHeat() {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots ... ☕️`);

      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();

      // 새로 추가된 부분
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);

      return this.milk.makeMilk(sugarAdded);
    }
  }

  //새로 추가된 부분
  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 정말 정말 좋은 우유 거품기
  class FancyMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('Fancyyyyy Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 최고급 기술로 차가운 우유 거품기
  class ColdMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('Fancyyyyy Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 우유를 사용하지 않는 거품기 -> 아무것도 하지 않음
  class NoMilk implements milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');

      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 사탕으로 만든 설탕이 아니라 진짜 슈가 믹서
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar!!!!!!');

      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 설탕을 사용하지 않는 슈가 믹서
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // CoffeeMaker 인터페이스의 배열로 타입 지정
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
  ];

  //
  machines.forEach((machine) => {
    console.log('--------------------------');
    machine.makeCoffee(1);
  });

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 위의 기계들을 사용하여 조금더 원하는 기능들을 조립해서
  // 내가 어떤 커피 기계를 만들 건지를 결정할 수 있다
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
