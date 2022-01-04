{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // 나는 result라는 변수는 분명히 스트링 타입인 걸 알고 있어 (캐스팅)
  console.log((result as string).length); // 첫번째 방법
  console.log((<string>result).length); // 두번째 방법

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);
  // !는 절대적으로 값이 있다고 확신할때 사용 😱 => 무조건 null이 아니야! => 실시간으로 어플리케이션 죽음
}
