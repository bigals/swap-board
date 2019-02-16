import { OwnerNamePipe } from './owner-name.pipe';

describe('OwnerNamePipe', () => {
  it('create an instance', () => {
    const pipe = new OwnerNamePipe();
    expect(pipe).toBeTruthy();
  });
});
