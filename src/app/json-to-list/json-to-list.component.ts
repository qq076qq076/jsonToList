import { Component, OnInit, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'app-json-to-list',
  templateUrl: './json-to-list.component.html',
  styleUrls: ['./json-to-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonToListComponent implements OnInit {

  constructor() { }
  @Input() json: any;
  @Input() tabWidth = '15px';
  @Input() titleColor: string;
  @Input() textColor: string;
  isArray = false;
  dataList: any[];

  ngOnInit() {
    this.isArray = Array.isArray(this.json);
    this.dataList = this.isArray ? this.json : Object.keys(this.json);
  }

  // 不是字串或數字就當他有
  hasSub(item: any): boolean {
    return !(typeof item === 'string' || typeof item === 'number');
  }

  objectItemHasSub(keyIndex: number): boolean {
    return this.hasSub(this.json[keyIndex]);
  }

  getObjectText(keyIndex: number): string {
    if (this.hasSub(this.json[keyIndex])) {
      return ' ' + keyIndex + '{' + Object.keys(this.json[keyIndex]).length + '}';
    } else {
      return ' ' + keyIndex + ':' + this.json[keyIndex];
    }
  }

  getArrayText(item: any): string {
    if (this.hasSub(item)) {
      return ' [' + Object.keys(item).length + ']';
    } else {
      return item.toString();
    }
  }
}


