import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDocumentationComponent } from './base-documentation.component';

describe('BaseDocumentationComponent', () => {
  let component: BaseDocumentationComponent;
  let fixture: ComponentFixture<BaseDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BaseDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
