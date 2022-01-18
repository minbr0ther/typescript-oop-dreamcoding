interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

// class도 마찬가지로 <T>를 정의 한다
class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>; //head는 StackNode<T>를 optional로 가르킨다

  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: T) {
    // head에 이미 정확한 타입이 명시되어 있다.
    // => 타입추론을 통해 타입이 명확하면 타입의 정보를 생략해도 좋다
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): T {
    if (this.head == null) {
      // null이 undefined를 포함한다
      throw new Error('Stack is empty!');
    }
    // 제거 하고자 하는 노드
    const node = this.head;

    // 현재 노드는 사라지기 때문에 현재의 다음 노드 가르키기
    this.head = node.next;

    this._size--;

    return node.value;
  }
}

// 명확하게 타입을 정한다 string
const stack = new StackImpl<string>(10);
stack.push('minbr0ther 1');
stack.push('bob 2');
stack.push('vivaldi 3');
while (stack.size !== 0) {
  console.log(stack.pop());
}

// 명확하게 타입을 정한다 number
const stack2 = new StackImpl<number>(10);
stack2.push(1);
stack2.push(2);
stack2.push(3);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
