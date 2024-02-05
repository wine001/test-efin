import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-efin';
  data:any = {};
  items = [
    { label: 'Menu 1', routerLink: ['#'], },
    { label: 'Menu 2', routerLink: ['#'], },
    { label: 'Menu 3', routerLink: ['#'] },
  ];


  constructor(private http: HttpClient) {

  }

  async ngOnInit() {
    this.http.get('https://demotrade.efintradeplus.com/ExamAPI/examdata').subscribe(Data => {
      // อ่านค่า result จาก JSON response ที่ส่งออกมา
      this.data = Data;
      console.log('this.data', this.data)
    });
    
  }

}
