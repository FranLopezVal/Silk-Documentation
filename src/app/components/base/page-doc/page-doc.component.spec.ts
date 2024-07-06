import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDocComponent } from './page-doc.component';

describe('PageDocComponent', () => {
  let component: PageDocComponent;
  let fixture: ComponentFixture<PageDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
