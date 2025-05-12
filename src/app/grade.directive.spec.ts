import { DebugElement,  } from '@angular/core';
import { AppComponent } from './app.component';
import { GradeDirective } from './grade.directive';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradePipe } from './grade.pipe';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

describe('GradeDirective', () => {

  let appComponent:AppComponent;
  let fixture:ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent, GradeDirective, GradePipe],
      imports: [AppRoutingModule]
    });

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    el = fixture.debugElement; // Assigning value to el
    fixture.detectChanges();
  }))

  let mockElementRef = {
    nativeElement: document.createElement('li')
  }
  it('should create an instance', () => {
    const directive = new GradeDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });

  it('should change color to green for grade A', ()=>{
    appComponent.studentMarks = [
      { name:"Alice", marks: 96},
    ]
    fixture.detectChanges();
    let li = el.queryAll(By.css('li'));
    li[0].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('green');
    li[0].nativeElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('black');
  });

  it('should change color to green for grade B', ()=>{
    appComponent.studentMarks = [
      { name:"Alice", marks: 83},
    ]
    fixture.detectChanges();
    let li = el.queryAll(By.css('li'));
    li[0].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('yellow');
    li[0].nativeElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('black');
  });

  it('should change color to green for grade C', ()=>{
    appComponent.studentMarks = [
      { name:"Alice", marks: 75},
    ]
    fixture.detectChanges();
    let li = el.queryAll(By.css('li'));
    li[0].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('orange');
    li[0].nativeElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('black');
  });

  it('should change color to green for grade D', ()=>{
    appComponent.studentMarks = [
      { name:"Alice", marks: 69},
    ]
    fixture.detectChanges();
    let li = el.queryAll(By.css('li'));
    li[0].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('orangered');
    li[0].nativeElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('black');
  });

  it('should change color to red for grade Fail', ()=>{
    appComponent.studentMarks = [
      { name:"Alice", marks: 23},
    ]
    fixture.detectChanges();
    let li = el.queryAll(By.css('li'));
    li[0].nativeElement.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('red');
    li[0].nativeElement.dispatchEvent(new Event('mouseleave'));
    fixture.detectChanges();
    expect(li[0].nativeElement.style.color).toBe('black');
  });  
});
