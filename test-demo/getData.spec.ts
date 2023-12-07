import { getData } from './getData';
import { response } from './responses/getDataResponse'

/* [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
] */

describe('getData.ts tests', () => {
  it('should return an array of 2 users', async () => {
    const actualResult = await getData();
    const expectedResult = response;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
