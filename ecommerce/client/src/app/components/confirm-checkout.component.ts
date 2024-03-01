import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartStore } from '../cart.store';
import { LineItem } from '../models';

@Component({
  selector: 'app-confirm-checkout',
  templateUrl: './confirm-checkout.component.html',
  styleUrl: './confirm-checkout.component.css'
})
export class ConfirmCheckoutComponent implements OnInit {

  // TODO Task 3
  private fb: FormBuilder = inject(FormBuilder)
  form!: FormGroup

  cartItems: LineItem[] = []
  totalCost: number = 0

  constructor(private cartStore: CartStore) {}

  ngOnInit(): void {
      this.form = this.createForm()
      this.cartItems = this.cartStore.getCart()
      this.calculateTotalCost()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [ Validators.required ]),
      address: this.fb.control<string>('', [ Validators.required, Validators.minLength(3) ]),
      priority: this.fb.control<boolean>(false),
      comments: this.fb.control<string>('')
    })
  }

  calculateTotalCost(): void {
    this.totalCost = this.cartItems.reduce((total, item) =>
      total + (item.price * item.quantity), 0
    )
  }

}
