import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

describe("calc.service.spec.ts", () => {
  let sharedService: SharedService;
  let calcService: CalcService;
  beforeEach(() => {
    sharedService = jasmine.createSpyObj(SharedService, ["sharedFunction"]);
    TestBed.configureTestingModule({
      providers: [CalcService,{
        provide: SharedService,
        useValue: sharedService,
      }],  
    });
    sharedService = TestBed.inject(SharedService);
    calcService = TestBed.inject(CalcService);
  })
  it("should multiply two numbers", () => {
    const result = calcService.multiply(2, 3);
    expect(result).toBe(6);
  });

  it("should add two numbers", () => {
    const result = calcService.add(2, 3);
    expect(result).toBe(5);
  });

  // it("should call shared function", () => {
  //   const shared = jasmine.createSpyObj(SharedService, ["sharedFunction"]);
  //   // const shared = new SharedService();
  //   const calc = new CalcService(shared);
  //   // spyOn(shared, "sharedFunction");
  //   calc.multiply(2, 3);
  //   expect(shared.sharedFunction).toHaveBeenCalled();
  // });
});