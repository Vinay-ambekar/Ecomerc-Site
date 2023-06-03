import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { OnInit } from '@angular/core';
import { product } from '../data-type';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.scss']
})
export class SellerHomeComponent implements OnInit{
  productList:undefined | product[]
  productMessage:undefined | string
  icon=faTrash 
  editicon=faEdit
constructor(private product:ProductService){}

ngOnInit(): void {
this.list();
}
deletProduct(id:number){
console.warn(id)
this.product.deletProduct(id).subscribe((result)=>{
 if(result){
  this.productMessage="product is deleted"
  this.list();
 }
})
setTimeout(()=>{
  this.productMessage=undefined
},3000)
}
list(){

  this.product.productList().subscribe((result)=>{
    console.warn(result)
    this.productList=result
  })
}


}
 