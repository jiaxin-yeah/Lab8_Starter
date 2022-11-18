// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// phone
test('1st true phone', () => {
    expect(functions.isPhoneNumber('626-814-5773')).toBe(true);
});
  
test('2nd true phone', () => {
    expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('1st false phone', () => {
  expect(functions.isPhoneNumber(123)).toBe(false);
});

test('2nd false phone', () => {
    expect(functions.isPhoneNumber('string')).toBe(false);
});

// email
test('1st true email', () => {
    expect(functions.isEmail('jiye@ucsd.edu')).toBe(true);
});
  
test('2nd true email', () => {
    expect(functions.isEmail('jiaxinbehappy@gmail.com')).toBe(true);
});

test('1st false email', () => {
  expect(functions.isEmail('@ucsd.edu')).toBe(false);
});

test('2nd false email', () => {
    expect(functions.isEmail('jiye')).toBe(false);
});

// pwd
test('1st true pwd', () => {
    expect(functions.isStrongPassword('Aaaaaaaaa')).toBe(true);
});
  
test('2nd true pwd', () => {
    expect(functions.isStrongPassword('jiaxinbehappy')).toBe(true);
});

test('1st false pwd', () => {
  expect(functions.isStrongPassword('20030408')).toBe(false);
});

test('2nd false pwd', () => {
    expect(functions.isStrongPassword('Aaaaaaaaaaaaaaaa')).toBe(false);
});

// date
test('1st true date', () => {
    expect(functions.isDate('04/08/2003')).toBe(true);
});
  
test('2nd true date', () => {
    expect(functions.isDate('11/18/2022')).toBe(true);
});

test('1st false date', () => {
  expect(functions.isDate('2003')).toBe(false);
});

test('2nd false date', () => {
    expect(functions.isDate('1234567890')).toBe(false);
});

// hex
test('1st true hex', () => {
    expect(functions.isHexColor('#aaa')).toBe(true);
});
  
test('2nd true hex', () => {
    expect(functions.isHexColor('#AAAaaa')).toBe(true);
});

test('1st false hex', () => {
  expect(functions.isHexColor('2003')).toBe(false);
});

test('2nd false hex', () => {
    expect(functions.isHexColor('1234567890')).toBe(false);
});