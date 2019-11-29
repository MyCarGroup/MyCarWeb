import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermisTypeModalComponent } from './add-permis-type-modal.component';

describe('AddPermisTypeModalComponent', () => {
  let component: AddPermisTypeModalComponent;
  let fixture: ComponentFixture<AddPermisTypeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermisTypeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermisTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
