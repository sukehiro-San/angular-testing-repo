import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradeDirective } from './grade.directive';
import { GradePipe } from './grade.pipe';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

describe('Navigation Buttons', () => {
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HomeComponent, InfoComponent, GradeDirective, GradePipe],
      imports:[AppRoutingModule],
      providers: [
        provideRouter([
          { path: 'home', component: HomeComponent },
          { path: 'info', component: InfoComponent }
        ])
      ]
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should navigate from Info to Home when button is clicked', fakeAsync(() => {
    router.navigate(['/info']);
    tick();
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.home-nav');
    button.click();
    tick();
    fixture.detectChanges();

    expect(location.path()).toBe('/home');
  }));

  it('should navigate from Home to Info when button is clicked', fakeAsync(() => {
    router.navigate(['/home']);
    tick();
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.info-nav');
    button.click();
    tick();
    fixture.detectChanges();

    expect(location.path()).toBe('/info');
  }));
});
