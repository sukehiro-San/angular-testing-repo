import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  it('create an instance', () => {
    const pipe = new GradePipe();
    expect(pipe).toBeTruthy();
  });

  it ('should return "A" for 90 and above', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(90)).toBe('A');
  });
  it ('should return "B" for 80 to 89', () => { 
    const pipe = new GradePipe();
    expect(pipe.transform(85)).toBe('B');
  });
  it ('should return "C" for 70 to 79', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(75)).toBe('C');
  });
  it ('should return "D" for 60 to 69', () => { 
    const pipe = new GradePipe();
    expect(pipe.transform(65)).toBe('D');
  });
  it ('should return "Fail" for below 60', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(50)).toBe('Fail');
  });
  it ('should return "Fail" for negative numbers', () => {
    const pipe = new GradePipe();
    expect(pipe.transform(-10)).toBe('Fail');
  });
});
