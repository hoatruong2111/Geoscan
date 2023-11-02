import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aboutUs = 'Tiêu chí kinh doanh hàng đầu của chúng tôi là tạo ra sản phẩm nội thất độc đáo, cung cấp giải pháp tối ưu cho khách hàng và đảm bảo hoàn thành dự án theo đúng ý tưởng thiết kế, chất lượng và tiến độ đã đề ra.'
  products = [];
  responsiveOptions;
  constructor() { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  this.products = [
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOY44sJtbkjkAUWC7IQoqyzS7HK0yNBSgVLA&usqp=CAU'
    },
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYIicRzkODaiIJbytW5IsWSREBkWQaVXqwLQ&usqp=CAU'
    }
    ,
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XXGx3vRnbFKOA_y5eT3MMpZRansMD0mhVA&usqp=CAU'
    },
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4l9MntIvuwTeWuH-nfJud5c6Y7srrHCd7A&usqp=CAU'
    },
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-puFldcxiBySJjlTLhB_nHKGk4gtDzjCjRA&usqp=CAU'
    },
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEgygPNq8-lgEec1w1Zk91jPYHQHYwwFAwA&usqp=CAU'
    },
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAxTm4cZyPrKFhxwSD-LvngORtMgRyTXZmQ&usqp=CAU'
    },
    {
      name: '',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5c-kJ6gwgY2dA2AusRILHIoLIA9msuk25RQ&usqp=CAU'
    }
  ]
  }

}
