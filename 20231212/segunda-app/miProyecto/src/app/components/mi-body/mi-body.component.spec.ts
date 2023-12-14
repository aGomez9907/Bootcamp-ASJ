import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBodyComponent } from './mi-body.component';

describe('MiBodyComponent', () => {
  let component: MiBodyComponent;
  let fixture: ComponentFixture<MiBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
