import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  addProduct(data:object){
    return this.http.post('http://localhost:3000/product',data)
  }
  productList(){
    return this.http.get<product[]>('http://localhost:3000/product')
  }
  deletProduct(id:number){
   return this.http.delete(`http://localhost:3000/product/${id}`)
  }
  getProduct(id:string){
    return this.http.get<product>(`http://localhost:3000/product/${id}`)
  }
  updateProduct(product:product){
    return this.http.put<product>(`http://localhost:3000/product/${product.id}`,product)
  }
  popularProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=3')
  }
  trendyProducts(){
    return this.http.get<product[]>('http://localhost:3000/product?_limit=30')
  }
  searchProducts(query:string){
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`)
  }
  localAddTocart(data:product){
    let cartData = []
    let localCart=localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localcart',JSON.stringify([data]))
    }else{
      console.warn('else')

    }
  }
} 
