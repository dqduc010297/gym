import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/core/auth.service';
import { APIService } from 'src/app/core/services/api.service';
export class InbodySummarize {
  bodyFatMass: number;
  skeletalMuscleMass: number;
  weight: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myId: number;
  inbodySummarize: InbodySummarize = new InbodySummarize();
  editHomeScreen = false;
  homeScreen: string;

  constructor(
    private authService: AuthService,
    private apiService: APIService,
  ) { }

  ngOnInit(): void {
    this.homeScreen = this.authService._loginUser._homeScreen;
    this.myId = this.authService._loginUser._id;
    this.apiService.getInBodySummarize().subscribe(
      result => {
        this.inbodySummarize = result;
      }
    );
  }

  format = (value: number) => `${value} kg`;

  uploaded(event) {
    this.homeScreen = event.uploadedPath;
    this.editHomeScreen = false;
  }
}
