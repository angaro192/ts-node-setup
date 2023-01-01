import Person from './person';

it('test ex', () => {
  const person = new Person();
  expect(person.myName()).toBe('Augusto');
});
