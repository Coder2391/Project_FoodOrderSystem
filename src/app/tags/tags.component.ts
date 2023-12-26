import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/Models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  
  @Input()
  justifyContent:string='center';

  tags?:Tag[] = [];
  constructor(private fs:FoodService) {}
  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.fs.getAllTag();
  }
}
