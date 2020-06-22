import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadprodutoComponent } from './cadproduto.component';

describe('CadprodutoComponent', () => {
  let component: CadprodutoComponent;
  let fixture: ComponentFixture<CadprodutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadprodutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
