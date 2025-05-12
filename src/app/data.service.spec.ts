import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { DataService } from './data.service';
import { USERS } from './mock-data';

describe('DataService', () => {
  let service: DataService;
  let testController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService, provideHttpClient(),provideHttpClientTesting()],
    });
    testController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user', () => {
    service.getUsers().subscribe((res:any[])=>{
      expect(res).toBeDefined();
      expect(res.length).toBeGreaterThan(0);
      expect(res[0].name).toBeTruthy();
    });
    const mockReq = testController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(mockReq.flush(Object.values(USERS)));
  });

  it('should return user by id', () => {
    service.getUserById(1).subscribe((res:any)=>{
      expect(res).toBeDefined();
      expect(res.name).toBe('Alice');
    });
    const mockReq = testController.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(mockReq.flush(USERS[0]));
  });

  it('should update user by id', () => {
    const changes = { name: 'Dorothy' };
    service.updateUserById(1,changes).subscribe((res:any)=>{
      expect(res).toBeDefined();
      expect(res.name).toBe('Dorothy');
    });
    const mockReq = testController.expectOne('https://jsonplaceholder.typicode.com/users/1');
    expect(mockReq.request.method).toBe('PUT');
    let modifiedUser = { ...USERS[0], ...changes };
    expect(mockReq.flush(modifiedUser));
  });
});
