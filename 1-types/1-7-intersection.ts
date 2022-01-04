/**
 * Itersection Types: &
 */
type Student = {
  name: string;
  score: number;
};

type tWorker = {
  employeeId: number;
  work: () => void;
};

function internWork(person: Student & tWorker) {
  console.log(person.name, person.employeeId, person.work());
}

internWork({
  name: 'ellie',
  score: 1,
  employeeId: 123,
  work: () => {},
});
