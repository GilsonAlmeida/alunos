import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudalunoComponent } from './crudaluno.component';

describe('CrudalunoComponent', () => {
  let component: CrudalunoComponent;
  let fixture: ComponentFixture<CrudalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
