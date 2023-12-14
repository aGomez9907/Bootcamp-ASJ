import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiSideComponent } from './mi-side.component';

describe('MiSideComponent', () => {
  let component: MiSideComponent;
  let fixture: ComponentFixture<MiSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiSideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
