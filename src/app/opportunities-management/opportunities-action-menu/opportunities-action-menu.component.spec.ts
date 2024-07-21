import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunitiesActionMenuComponent } from './opportunities-action-menu.component';

describe('OpportunitiesActionMenuComponent', () => {
  let component: OpportunitiesActionMenuComponent;
  let fixture: ComponentFixture<OpportunitiesActionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpportunitiesActionMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunitiesActionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
