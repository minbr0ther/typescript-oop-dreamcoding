{
  // 오직 숫자만 받을 수 있다 🚨💩
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  // 모든 타입을 받을  수 있지만 타입을 보장하지 않음 🚨💩
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid any!');
    }
    return arg;
  }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid any!');
    }
    return arg;
  }
  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
