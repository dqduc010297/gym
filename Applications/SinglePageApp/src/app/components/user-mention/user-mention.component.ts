import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { UserMentionRequest } from 'src/app/requests/user/user-mention.request';
import { LoaderService } from 'src/app/services/core/loader.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-mention',
  templateUrl: './user-mention.component.html',
  styleUrls: ['./user-mention.component.scss']
})
export class UserMentionComponent implements OnInit, OnChanges {
  @Input() inputValue?: string;
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() mentioned: number[]=[];
  @Output() mentionedChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  suggestions: any[] = [];
  userMentionRequest: UserMentionRequest = new UserMentionRequest();

  constructor(
    private userService: UserService,
    public loaderService: LoaderService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.mentioned.currentValue) {
      console.log(changes.mentioned.currentValue);
    }
  }

  
  ngOnInit(): void {

  }

  valueWith = (data: { id: number, fullname: string; avatarURL: string }) => data.fullname;

  onSearchChange({ value }: MentionOnSearchTypes): void {
    if(value === '') {
      return;
    }
    this.userMentionRequest.fullname = value;
    this.userService.getMentionUser(this.userMentionRequest).subscribe(
      result => {
        this.suggestions = result;
      }
    );
  }

  onSelectedMention(event) {
    this.mentioned.push(event.id);
    this.mentionedChange.emit(this.mentioned);
  }
}

