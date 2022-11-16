import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListaComponent } from './dashboard-lista.component';

describe('DashboardListaComponent', () => {
  let component: DashboardListaComponent;
  let fixture: ComponentFixture<DashboardListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
