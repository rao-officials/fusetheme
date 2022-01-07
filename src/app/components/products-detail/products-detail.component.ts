import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  filterData:any;
  productId = "";

  constructor(private myService: CommonService) {

   

  }

  ngOnInit(): void {

    this.myService.getproductsbyid(5).subscribe((data: any) => {

      console.log(data)

      // for (let i = 0; i < data.length; i++) {
      //   console.log(data[0].image)
      //   this.filterData = data;

      //   // this.apiImage = data[0].image
      // }

    })
  }

}
