import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIconGeneratorComponent } from './random-icon-generator.component';

describe('RandomIconGeneratorComponent', () => {
  let component: RandomIconGeneratorComponent;
  let fixture: ComponentFixture<RandomIconGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomIconGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomIconGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
