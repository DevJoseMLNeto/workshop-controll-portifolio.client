import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabioComponent } from './contabio.component';

describe('ContabioComponent', () => {
  let component: ContabioComponent;
  let fixture: ComponentFixture<ContabioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContabioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContabioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
