import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base-footer',
  standalone: true,
  imports: [],
  templateUrl: './base-footer.component.html',
  styleUrl: './base-footer.component.scss'
})
export class BaseFooterComponent {

  constructor(private viewportService: ViewportScroller) {}

  /**
   * 返回頁面頂部
   */
  public returnToTop() {
    this.viewportService.scrollToPosition([0, 0]);
  }
}
