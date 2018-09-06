import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectsHobbiesComponent } from './proyects-hobbies.component';

describe('ProyectsHobbiesComponent', () => {
  let component: ProyectsHobbiesComponent;
  let fixture: ComponentFixture<ProyectsHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectsHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectsHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
