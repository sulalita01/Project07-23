import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QueuebackPage } from './queueback.page';

describe('QueuebackPage', () => {
  let component: QueuebackPage;
  let fixture: ComponentFixture<QueuebackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuebackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
