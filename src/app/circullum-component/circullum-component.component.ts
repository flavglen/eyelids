import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circullum-component',
  templateUrl: './circullum-component.component.html',
  styleUrls: ['./circullum-component.component.css']
})
export class CircullumComponentComponent implements OnInit {
 circullumData:any[];
  constructor() { }

 

ngOnInit() {
    this.circullumData=[{ 
      title:'Color Concepts',
      imgurl: '/assets/img/colorConcepts.png'
    },
    {
      title:'Shapes',
      imgurl: '/assets/img/shapes.png'
    },
    { 
      title:'Numbers',
      imgurl: '/assets/img/numbers.png'
    },
    { 
      title:'Alphabets',
      imgurl: '/assets/img/alphabets.png'
    },
    { 
      title:'Rhymes',
      imgurl: '/assets/img/rhymes.png'
    },
    { 
      title:'Conversation',
      imgurl: '/assets/img/conversations.png'
    },
    { 
      title:'Writing',
      imgurl: '/assets/img/writing.png'
    },
    { 
      title:'Coloring',
      imgurl: '/assets/img/coloring.png'
    },
    { 
      title:'Greeting Making',
      imgurl: '/assets/img/greeting.png'
    }
  ]
  }




}
