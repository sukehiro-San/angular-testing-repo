import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
  waitForAsync
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        el = fixture.debugElement;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a paragraph tag with text home works!', () => {
    const paragraph = el.queryAll(By.css('p'))[0].nativeElement;
    expect(paragraph).toBeTruthy();
    expect(paragraph.textContent.trim()).toBe('home works!');
  });

  it('should have a disabled button', () => {
    const button = el.queryAll(By.css('.btn'))[0].nativeElement;
    expect(button).toBeTruthy();
    expect(button.disabled).toBe(true);
  });

  it('should have an image tag with src', () => {
    const img = el.queryAll(By.css('img'))[0].nativeElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('image.jpeg');
  });

  it('should have a subscribe button', () => {
    const button = el.queryAll(By.css('button'))[1].nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Subscribe');
  });

  it('subscribe button should disable when clicked', fakeAsync(() => {
    const button = el.queryAll(By.css('button'))[1].nativeElement;
    expect(button).toBeTruthy();
    expect(button.disabled).toBe(false);
    button.click();
    setTimeout(() => {
      fixture.detectChanges();
      // done();
    }, 10000);
    flush();
    expect(button.disabled).toBeTrue();
  }));

  it('the text should change to subscribe when subscribe function is called again after subscribed', fakeAsync(() => {
    expect(component.isSubscribed).toBeFalse();
    expect(component.btnText).toBe('Subscribe');

    // First subscribe call
    component.subscribe();
    tick(3000);
    expect(component.isSubscribed).toBeTrue();
    expect(component.btnText).toBe('Subscribed');

    // Simulate button being disabled based on isSubscribed
    expect(component.isSubscribed).toBeTrue(); // so button would be disabled in template

    // Call again (user clicks when re-enabled or from function)
    component.subscribe();
    tick(3000);
    expect(component.isSubscribed).toBeFalse();
    expect(component.btnText).toBe('Subscribe');
  }))

  it('subscribe button should change text when btnText value changes', () => {
    const button = el.queryAll(By.css('button'))[1].nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent.trim()).toBe('Subscribe');
    component.isSubscribed = true;
    component.btnText = 'Subscribed';
    fixture.detectChanges();
    expect(button.textContent.trim()).toBe('Subscribed');
  });
});
