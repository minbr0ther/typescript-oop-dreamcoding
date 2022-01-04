{
  /**
   * Type Inference (추론이 자동으로 되지만 좋은 방법은 아님 💩)
   */
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
}
