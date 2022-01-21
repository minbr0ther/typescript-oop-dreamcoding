console.log(this); // Window

function simpleFunc() {
  console.log(this);
}
window.simpleFunc(); // Window

class Counter {
  count = 0;
  // 이 부분을 => 로 바꾸면 나중에 따로 bind를 하지 않아도 된다
  increase = function () {
    console.log(this);
  };
}

const counter = new Counter();
counter.increase(); //Counter

// let과 const로 이루어진 변수는 윈도우에 등록되어져 있지 않으므로
// caller를 호출하는 것은 윈도우가 아니라 어떤 오브젝트도 아니다
//const caller = counter.increase;

// 확실한 방법으로 오브젝트와 연결 하고 싶다면 bind를 사용해서 묶어줘야 한다.
const caller = counter.increase.bind(counter);
caller();

// bob이 함수를 호출했기 때문에
class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); //Bob
