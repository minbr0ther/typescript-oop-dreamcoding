{
  /**
   * Enum (가능한 쓰지 않는 것이 좋다 💩)
   */
  // JavaScript
  const MAX_NUM = 6;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
  });

  // TypeScript
  // 앞 글자만 대문자로 적는다 🚨
  enum Days {
    Monday = 1, //default: 0
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    /* 이렇게 문자열도 가능 (대신 다 입력해야 함)
    Monday = mon
    Tuesday = tue,
    Wednesday = wed,
    Thursday = thu,
    Friday = fri,
    Saturday = sat,
    Sunday = sun,
    */
  }
  console.log(Days.Monday);
}
