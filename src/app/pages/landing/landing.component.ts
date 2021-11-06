import { Component, OnInit } from '@angular/core';
// import { WoocommerceProductsService } from 'ngx-wooapi';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  public PopularCatList1 = [
    {
      category: 'Covid Essentials',
      img: '../../../assets/images/CovidEssentials.png',
    },
    {
      category: 'Sexual Wellness',
      img: '../../../assets/images/SexualWellness.png',
    },
    {
      category: 'Vitamins And Supplements',
      img: '../../../assets/images/Vitamins&Supplements.png',
    },
    {
      category: 'Homeopathy',
      img: '../../../assets/images/Homeopathy.png',
    },
    {
      category: 'Ayurvedic',
      img: '../../../assets/images/Ayurvedic.png',
    },
  ];
  public PopularCatList2 = [
    {
      category: 'Baby Care',
      img: '../../../assets/images/BabyCare.png',
    },
    {
      category: 'Face Care',
      img: '../../../assets/images/FaceCare.png',
    },
    {
      category: 'Feminine Hygiene',
      img: '../../../assets/images/FeminineHygiene.png',
    },
    {
      category: 'Weight Management',
      img: '../../../assets/images/WeightManagement.png',
    },
    {
      category: 'Skin Care',
      img: '../../../assets/images/SkinCare.png',
    },
  ];
  public PersonalCare = [
    {
      category: 'Mom & Baby Care',
      img: '../../../assets/images/Mom&BabyCare.png',
    },
    {
      category: 'Body Care',
      img: '../../../assets/images/FaceCare.png',
    },
    {
      category: 'Mom & Baby Care',
      img: '../../../assets/images/FaceCare.png',
    },
    {
      category: 'Skin Treatment',
      img: '../../../assets/images/SkinTreatment.png',
    },
    {
      category: "Men's Care",
      img: '../../../assets/images/MenCare.png',
    },
  ];

  public ExploreList = [
    {
      category: 'Facial Kits',
      img: '../../../assets/images/FacialKits.png',
    },
    {
      category: 'Skin Care',
      img: '../../../assets/images/SkinCare.png',
    },
    {
      category: 'Lip Care',
      img: '../../../assets/images/SkinTreatment.png',
    },
    {
      category: "Men's Care",
      img: '../../../assets/images/MenCare.png',
    },
    {
      category: 'Fragrances',
      img: '../../../assets/images/Shampoos&Conditioners.png',
    },
  ];

  public shopCategory = [
    {
      date: '02 July, 2019',
      des: 'Lorem ipsum dolor sit amet',
      category: 'FOOD & LIFESTYLE',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
    {
      date: '02 July, 2019',
      des: 'Lorem ipsum dolor sit amet',
      category: 'Healthcare',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
    {
      date: '02 July, 2019',
      des: 'Lorem ipsum dolor sit amet',
      category: 'LIFESTYLE',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
    {
      date: '02 July, 2019',
      des: 'Lorem ipsum dolor sit amet',
      category: 'FOOD & LIFESTYLE',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
  ];

  public healthConcern = [
    {
      category: 'Homeopathy',
      img: '../../../assets/images/Homeopathy.png',
    },
    {
      category: 'Homeopathy',
      img: '../../../assets/images/Homeopathy.png',
    },
    {
      category: 'Homeopathy',
      img: '../../../assets/images/Homeopathy.png',
    },
    {
      category: 'Homeopathy',
      img: '../../../assets/images/Homeopathy.png',
    },
  ];
  productSlug: string;

  constructor(
    public productService: ProductService,
    private router: Router, private route: ActivatedRoute) {
      this.route.params.subscribe( params => this.productSlug = params.slug )

    }

  ngOnInit(): void {
    

    this.productService.getAllProduct().subscribe((response) => {
      console.log("Hello..", response);
    })

    
  }
}
