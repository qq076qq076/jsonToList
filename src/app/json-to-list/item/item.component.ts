import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  @Input() text: string;
  @Input() hasSub: boolean;
  @Input() subData: any;
  @Input() tabWidth: string;

  openSub: boolean;

  toggleOpen() {
    if (this.hasSub) {
      this.openSub = !this.openSub;
      this.changeDetectorRef.detectChanges();
    }
  }

}
