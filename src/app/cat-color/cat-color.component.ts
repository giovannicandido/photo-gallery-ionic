import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-color',
  standalone: true,
  templateUrl: './cat-color.component.html',
  styleUrls: ['./cat-color.component.scss'],
})
export class CatColorComponent  implements OnInit {
  
  @Input()
  color: string | null | undefined = ""

  constructor() { }

  ngOnInit() {}

}
