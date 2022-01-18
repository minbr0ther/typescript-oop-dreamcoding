// 이거 아님 저거를 뜻함
interface Either<L, R> {
  // 제네릭의 타입은 쓰는사람이 결정한다
  left: () => number;
  right: () => number;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); //4
either.right(); //5

const best = new SimpleEither({ name: 'ellie' }, 'hello');
