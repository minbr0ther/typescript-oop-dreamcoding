type Video = {
  title: string;
  author: string;
};

type Optional<T> = {
  // T가 가지고 있는 키들 중에 하나의 P
  [P in keyof T]?: T[P]; // for .. in
};

//T의 모든 P를 read only로 만든다
type ReadOnly<T> = {
  readonly [P in keyof T]?: T[P];
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {};

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: 'dog',
};

// ReadOnly 타입 사용
const video: ReadOnly<Video> = {
  title: 'hi',
  author: 'ellie',
};
video.title = 'minhyung';

// Nullable 타입 사용 - null 사용이 가능하다
type Nullable<T> = { [P in keyof T]: T[P] | null };
const obj2: Nullable<Video> = {
  title: null,
  author: null,
};

// from TS Document
// => 프록시 타입을 mapped type을 활용해서 변환해줌
type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
