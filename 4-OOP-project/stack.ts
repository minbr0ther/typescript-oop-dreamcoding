interface Stack {
  readonly size: number; // 값을 변경할 수 없고 내부적으로 결정됨
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // readonly: 불변성 유지
  readonly value: string;
  // 다음의 스텍노드를 가르키거나 첫 노드의 경우 다음이 없다
  // next: StackNode | undefined;
  readonly next?: StackNode; // optional - ts 3.7v+ 문법
};

// 보통 인터페이스를 구현할때 ~Impl을 붙인다
class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode; //head는 StackNode를 optional로 가르킨다

  get size() {
    return this._size;
  }

  push(value: string): void {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }

  pop(): string {
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

const stack = new StackImpl();
stack.push('minbr0ther 1');
stack.push('bob 2');
stack.push('vivaldi 3');

while (stack.size !== 0) {
  console.log(stack.pop());
}
