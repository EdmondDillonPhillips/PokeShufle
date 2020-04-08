import { Component, OnInit } from '@angular/core';
import { AvatarService } from '../avatar.service';
import { Avatar } from '../avatar.model';

@Component({
  selector: 'app-avatar-tile',
  templateUrl: './avatar-tile.component.html',
  styleUrls: ['./avatar-tile.component.css']
})
export class AvatarTileComponent implements OnInit {

  avatarArr: Avatar[];
  response: any;
  avatar: Avatar;

  constructor(private avatarService: AvatarService) { }

  ngOnInit(): void {
    this.populateSprite();
  }

  populateSprite(){
    this.avatarService.getAvatar().subscribe((res)=>{
      this.response = res;
      console.log(this.response.sprites.front_default);
      this.avatar = this.response.sprites.front_default;
      
    });
  }

}
