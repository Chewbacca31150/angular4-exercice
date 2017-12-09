import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageListComponent } from './personnage-list.component';

describe('PersonnageListComponent', () => {
  let component: PersonnageListComponent;
  let fixture: ComponentFixture<PersonnageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
