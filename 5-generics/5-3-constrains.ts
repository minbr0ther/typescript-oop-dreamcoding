interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log(`part time!!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 리턴하는 함수 💩
// employee에게 월급을 주고 다시 employee를 반환
function badPay(employee: Employee): Employee {
  employee.pay();

  return employee; // 이렇게 반환하면 FullTime의 정보 잃음
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();

  return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();

ellie.workFullTime();
bob.workPartTime();

// Employee -> FullTimeEmployee (Type Casting: 근데 잘 안씀 💩)
const ellieAfterPay = pay(ellie); //as FullTimeEmployee;
const bobAfterfPay = pay(bob);
