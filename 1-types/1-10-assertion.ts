{
  /**
   * Type Assertions ๐ฉ
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  const result = jsStrFunc();
  // ๋๋ result๋ผ๋ ๋ณ์๋ ๋ถ๋ชํ ์คํธ๋ง ํ์์ธ ๊ฑธ ์๊ณ  ์์ด (์บ์คํ)
  console.log((result as string).length); // ์ฒซ๋ฒ์งธ ๋ฐฉ๋ฒ
  console.log((<string>result).length); // ๋๋ฒ์งธ ๋ฐฉ๋ฒ

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);
  // !๋ ์ ๋์ ์ผ๋ก ๊ฐ์ด ์๋ค๊ณ  ํ์ ํ ๋ ์ฌ์ฉ ๐ฑ => ๋ฌด์กฐ๊ฑด null์ด ์๋์ผ! => ์ค์๊ฐ์ผ๋ก ์ดํ๋ฆฌ์ผ์ด์ ์ฃฝ์
}
