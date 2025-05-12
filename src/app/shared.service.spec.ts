import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log This is a shared function to console when sharedFunction is called', () => {
    const consoleSpy = spyOn(console, 'log');
    service.sharedFunction();
    expect(consoleSpy).toHaveBeenCalledWith('This is a shared function');
  });
});
