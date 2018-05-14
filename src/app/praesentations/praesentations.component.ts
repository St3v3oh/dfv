import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-praesentations-component',
  templateUrl: './praesentations.component.html',
  styleUrls: ['./praesentations.component.css']
})
export class PraesentationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit() {
// do the datasubmits
    console.log('submitted data nomnom');
  }
}
