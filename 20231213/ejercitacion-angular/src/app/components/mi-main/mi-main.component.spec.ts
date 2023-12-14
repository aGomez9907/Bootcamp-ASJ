import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMainComponent } from './mi-main.component';

describe('MiMainComponent', () => {
  let component: MiMainComponent;
  let fixture: ComponentFixture<MiMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
