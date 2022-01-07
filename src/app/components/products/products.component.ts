import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filterData:any;

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

  ngOnInit(): void {
  }

}
