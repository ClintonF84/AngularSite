import { Mongobase } from './mongobase';

describe('Mongobase', () => {
  it('should create an instance', () => {
    expect(new Mongobase()).toBeTruthy();
  });
});
