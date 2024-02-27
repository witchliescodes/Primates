import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgeComponent } from './acknowledge.component';

describe('AcknowledgeComponent', () => {
  let component: AcknowledgeComponent;
  let fixture: ComponentFixture<AcknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcknowledgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
