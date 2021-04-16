import { Component, OnInit } from '@angular/core';
import {Aggregate2Service} from '../../services/aggregate2.service';

@Component({
  selector: 'app-aggregate2',
  templateUrl: './aggregate2.component.html',
  styleUrls: ['./aggregate2.component.css']
})
export class Aggregate2Component implements OnInit {

  constructor(public aggregate2Service: Aggregate2Service) { }

  ngOnInit(): void {
    this.getAggregate2();
  }


  getAggregate2() {
    this.aggregate2Service.getAggregate2().subscribe(
      res => {
        this.aggregate2Service.aggregate2 = res;
      },
      err => console.error(err)
    );

  }
}
