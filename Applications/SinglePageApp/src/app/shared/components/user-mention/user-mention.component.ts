import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { SharedUser } from 'src/app/album/core/models/shared-user.model';
import { UserMentionRequest } from 'src/app/core/requests/user/user-mention.request';
import { UserSystemAPIService } from 'src/app/core/services/api/user-system.api.service';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-user-mention',
  templateUrl: './user-mention.component.html',
  styleUrls: ['./user-mention.component.scss']
})
export class UserMentionComponent implements OnInit, OnChanges {
  @Input() inputValue = '';
  @Output() inputValueChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() mentioned: SharedUser[] = [];
  @Output() mentionedChange: EventEmitter<SharedUser[]> = new EventEmitter<SharedUser[]>();

  suggestions: any[] = [];
  userMentionRequest: UserMentionRequest = new UserMentionRequest();

  constructor(
    private userSystemAPIService: UserSystemAPIService,
    public loaderService: LoaderService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mentioned?.currentValue) {
      if (this.inputValue === undefined) { this.inputValue = ''; }
      this.mentioned.forEach(p => {
        this.inputValue += '@' + p.fullname + ' ';
      });
    }
  }

  ngOnInit(): void {

  }

  valueWith = (data: { id: number, fullname: string; avatarURL: string }) => data.fullname;

  onSearchChange({ value }: MentionOnSearchTypes): void {
    if (value === ''
      || (this.suggestions.length > 0 && value.length > 0)
      || this.loaderService.isShowLoader(this.userMentionRequest.getLoadingKey())
    ) {
      return;
    }
    this.userMentionRequest.fullname = value;
    this.userSystemAPIService.getMentionUser(this.userMentionRequest).subscribe(
      result => {
        this.suggestions = result;
      }
    );
  }

  onSelectedMention(event) {
    this.mentioned.push({ id: event.id, fullname: event.fullname });
    this.mentionedChange.emit(this.mentioned);
  }
}

