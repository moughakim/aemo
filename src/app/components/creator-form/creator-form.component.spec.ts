import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorFormComponent } from './creator-form.component';

describe('CreatorFormComponent', () => {
  let component: CreatorFormComponent;
  let fixture: ComponentFixture<CreatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
