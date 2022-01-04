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

  // unkwown (겸손 모드: 가능하면 쓰지말자 💩)
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any (당당 모드: 가능하면 쓰지말자 💩)
  let anything: unknown = 0;
  anything = 'he';
  anything = true;

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'ellie' });
}
