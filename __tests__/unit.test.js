// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


// isPhoneNumber
const { isPhoneNumber } = functions;
test('isPhoneNumber with area code', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber without area code', () => {
    expect(isPhoneNumber('456-7890')).toBe(true);
});

test('isPhoneNumber with non-digit (negative)', () => {
    expect(isPhoneNumber('(123) 123-45aa')).toBe(false);
});

test('isPhoneNumber with 4 digits (negative)', () => {
    expect(isPhoneNumber('1234')).toBe(false);
});


// isEmail
const { isEmail } = functions;
test('isEmail 3-char domain', () => {
    expect(isEmail('who@where.com')).toBe(true);
});

test('isEmail 2-char domain', () => {
    expect(isEmail('who@where.us')).toBe(true);
});

test('isEmail 4-char domain (negative)', () => {
    expect(isEmail('who@where.site')).toBe(false);
});
    
test('isEmail missing @ (negative)', () => {
    expect(isEmail('abcds.where.site')).toBe(false);
});


// isStrongPassword
const { isStrongPassword } = functions;
test('isStrongPassword 5 chars', () => {
    expect(isStrongPassword('abcde')).toBe(true);
});

test('isStrongPassword with letters, numbers, underscores', () => {
    expect(isStrongPassword('abc_def_1234')).toBe(true);
});

test('isStrongPassword first char digit (negative)', () => {
    expect(isStrongPassword('1abcd')).toBe(false);
});

test('isStrongPassword with special chars (negative)', () => {
    expect(isStrongPassword('abc!def%')).toBe(false);
});


// isDate
const { isDate } = functions;
test('isDate 12/34/5678', () => {
    expect(isDate('12/34/5678')).toBe(true);
});

test('isDate 1/2/1999', () => {
    expect(isDate('1/2/1999')).toBe(true);
});

test('isDate 1/2/123 (negative)', () => {
    expect(isDate('1/2/123')).toBe(false);
});

test('isDate 123/45/1234 (negative)', () => {
    expect(isDate('123/45/1234')).toBe(false);
});
     
// isHexColor
const { isHexColor } = functions;
test('isHexColor #123aBC', () => {
    expect(isHexColor('#123aBC')).toBe(true);
});

test('isHexColor 123', () => {
    expect(isHexColor('123')).toBe(true);
});

test('isHexColor 12 (negative)', () => {
    expect(isHexColor('12')).toBe(false);
});

test('isHexColor #12 (negative)', () => {
    expect(isHexColor('#12')).toBe(false);
});

