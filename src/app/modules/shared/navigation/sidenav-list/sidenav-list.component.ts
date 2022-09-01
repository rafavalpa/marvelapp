import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
