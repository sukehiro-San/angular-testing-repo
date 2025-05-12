import {
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { delay, of } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ang-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ang-test');
  });

  it('should increment the counter after promise resolved', fakeAsync(() => {
    let counter = 0;
    Promise.resolve().then(() => {
      counter++;
    });
    flushMicrotasks();
    expect(counter).toBe(1);
  }));

  it('should test observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed);
    myObs.pipe(delay(1000)).subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBe(true);
  }));
});
