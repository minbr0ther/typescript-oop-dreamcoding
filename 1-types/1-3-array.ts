{
  // Array (number[] === Array<number>)
  const fruits: string[] = ['tomato', 'banana'];
  const scores: number[] = [1, 2, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체 예정
  // (권장하지 않음 💩)
  let student: [string, number];
  student = ['name', 123];
  student[0];
  student[1];

  // 튜플을 가장 잘 사용한 예시는 useState
  const [name, age] = student;
}
