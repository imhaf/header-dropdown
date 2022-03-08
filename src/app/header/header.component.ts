import { Component, ContentChild, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @Input() cartOptions: {
    totalItems: string,
  } | undefined = undefined;

  @ContentChild('cartDropdown',{static: false}) cartDropdownRef: TemplateRef<any> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
