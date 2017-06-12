import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaalunoComponent } from './listaaluno.component';

describe('ListaalunoComponent', () => {
  let component: ListaalunoComponent;
  let fixture: ComponentFixture<ListaalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
