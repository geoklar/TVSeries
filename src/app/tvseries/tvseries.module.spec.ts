import { TVSeriesModule } from './tvseries.module';

describe('TVSeriesModule', () => {
  let tVSeriesModule: TVSeriesModule;

  beforeEach(() => {
    tVSeriesModule = new TVSeriesModule();
  });

  it('should create an instance', () => {
    expect(tVSeriesModule).toBeTruthy();
  });
});
