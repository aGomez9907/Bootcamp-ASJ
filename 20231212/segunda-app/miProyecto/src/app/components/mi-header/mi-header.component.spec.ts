import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHeaderComponent } from './mi-header.component';

describe('MiHeaderComponent', () => {
  let component: MiHeaderComponent;
  let fixture: ComponentFixture<MiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
