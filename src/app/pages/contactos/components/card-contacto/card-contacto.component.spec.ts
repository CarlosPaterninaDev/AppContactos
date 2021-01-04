import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactoComponent } from './card-contacto.component';

describe('CardContactoComponent', () => {
  let component: CardContactoComponent;
  let fixture: ComponentFixture<CardContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
