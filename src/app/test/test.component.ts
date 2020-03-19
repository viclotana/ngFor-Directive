import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  cereals: any[]= [
    {
      name:'Honey Nut Cheerios',
      maker: 'General Mills'
    },
    {
      name:'Frosted Flakes',
      maker: 'Kelloggs'
    },
    {
      name:'Honey bunches of Oats',
      maker: 'Post'
    },
    {
      name:'Cheerios',
      maker: 'General Mills'
    },
    {
      name:'Cinnamon Tosat Crunch',
      maker: 'General Mills'
    },
    {
      name:'Special K',
      maker: 'Kelloggs'
    },
    {
      name:'Frosted Mini Wheats',
      maker: 'Kelloggs'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
