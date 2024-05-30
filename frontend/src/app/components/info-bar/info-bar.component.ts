import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  @Input() text: string;
  @Input() color: string;

  constructor() {
    this.color = '#5F9EA0';
  }

  ngOnInit(): void {
  }

}
