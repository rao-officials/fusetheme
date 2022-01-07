import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from './services/common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fusetheme';
  apiImage: any;
  filterData:any

  constructor(private myService: CommonService) {

    this.myService.apiData().subscribe((data: any) => {

      console.log(data)

      for (let i = 0; i < data.length; i++) {
        console.log(data[0].image)
        this.filterData = data;

        // this.apiImage = data[0].image
      }

    })

  }


}



// for(let i=0; i < this.data.length;i++){
//   for(let j=0; j < this.data[i].length;j++){
//       this.other +=  this.data[i][j].range;
//       console.log(this.data[i][j].range); // What you want to do here...
//   }   
// }