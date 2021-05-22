import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatOfferComponent } from './what-offer.component';

describe('WhatOfferComponent', () => {
  let component: WhatOfferComponent;
  let fixture: ComponentFixture<WhatOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
