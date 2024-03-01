import { Component, Input, OnInit, Output, inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LineItem} from '../models';
import { HtmlParser } from '@angular/compiler';
import { CartStore } from '../cart.store';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent implements OnInit {

  // NOTE: you are free to modify this component

  private fb = inject(FormBuilder)

  @Input({ required: true })
  productId!: string
  
  @Input()
  productName!: string

  @Input()
  productPrice!: number

  @Input()
  discountPrice!: number

  form!: FormGroup

  constructor(
    private cartStore: CartStore
  ) {}

  ngOnInit(): void {
    this.form = this.createForm()
  }

  addToCart() {
    const lineItem: LineItem = {
      prodId: this.productId,
      quantity: this.form.value['quantity'],
      name: this.productName,
      price: parseFloat(Math.min(this.productPrice, this.discountPrice).toFixed(2))
      
    }

    this.form = this.createForm()
    this.cartStore.addToCart(lineItem)
    this.form.reset({ quantity: 1})
    console.log(this.cartStore.getCart())
  }

  private createForm(): FormGroup {
    return this.fb.group({
      quantity: this.fb.control<number>(1, [ Validators.required, Validators.min(1) ])
    })
  }

}
