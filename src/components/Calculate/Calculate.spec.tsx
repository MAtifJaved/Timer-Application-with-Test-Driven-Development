import CalculateTime from './CalculateTime';

describe('calculate function test', () => {

    
  it('should return an array' ,() => {

 expect(CalculateTime.default(0)).toEqual(['00','00','00']);

   
});
})