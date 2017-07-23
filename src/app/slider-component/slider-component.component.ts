import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements OnInit {

  sliderData:any[];

  constructor() { }

  ngOnInit() {
    this.sliderData=[{
      id:1,
      title:'quote',
      body:`Children need the freedom and time to
            play.in Eyelids children learn as they play and ny child is
            safe in their hands which gives me a tension free routine.`,
      by:'Reshma',
      desig:'Mother of 2yr old kid'
    },
    {
      id:2,
      title:'quote',
      body:`Children need the freedom and time to
            play.in Eyelids children learn as they play and ny child is
            safe in their hands which gives me a tension free routine.testfgsegesgesge`,
      by:'Pooja',
      desig:'Mother of 5yr old kid'      
    }
  ]
  }

}
