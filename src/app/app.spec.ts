import { TestBed } from '@angular/core/testing';
import { App } from './app';
// csr *** ssr *** ssg  
// app route injecte en html  

// router outerlet : affiche content par demande 
// cabab case 
//component : ng g c component 
//ng g class  
// vue scc test classe

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, tp1_angular');
  });
});
