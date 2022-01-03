{
  /**
   * javaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array, ...
   */

  // number
  const num: number = -6;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = true;

  // undefined : 값이 있는지 없는지 아무것도 결정된게 없음
  let name: undefined; // 💩
  let age: number | undefined; // ✨
  function find(): number | undefined {
    return undefined;
  }

  // null : 비었다
  let person: null; // 💩
  let person2: string | null;
}
