import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesalunoComponent } from './detalhesaluno.component';

describe('DetalhesalunoComponent', () => {
  let component: DetalhesalunoComponent;
  let fixture: ComponentFixture<DetalhesalunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesalunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesalunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
