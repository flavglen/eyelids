import { Component ,OnInit,} from '@angular/core';
import {TreeNode} from 'primeng/primeng';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit{

  title = 'app';
  cars: any[];
  data: TreeNode[];

  ngOnInit() {
    this.data = [{
          label: 'Integrated',
          expanded: true,
          children: [
                       {
                           label: 'Montessari'
                       },
                       {
                           label: 'Kindergarten'
                       }
                   ]

         }];

    this.cars = [
         {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
         {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
         {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
         {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'}
       ]
  }


}
