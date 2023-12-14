import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNavbarComponent } from './mi-navbar.component';

describe('MiNavbarComponent', () => {
  let component: MiNavbarComponent;
  let fixture: ComponentFixture<MiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
