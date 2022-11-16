import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboradFormComponent } from './dashborad-form.component';

describe('DashboradFormComponent', () => {
  let component: DashboradFormComponent;
  let fixture: ComponentFixture<DashboradFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboradFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboradFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
