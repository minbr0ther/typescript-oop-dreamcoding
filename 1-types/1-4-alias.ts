{
  /**
   * Type Aliases
   * 우리가 타입을 정의할 수 있음 😮
   */
  type Text = string;
  const name: Text = 'ellie';

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'ellie',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let ellieName: Name;
  ellieName = 'd';
}
