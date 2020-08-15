import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  //@Output() newIngredient = new EventEmitter<Ingredient>()
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddIng(form: NgForm) {
    //this.newIngredient.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    const fName = form.value.name;
    const fAmount = form.value.amount;
    this.shoppingService.newIngredient(new Ingredient(fName, fAmount))
  }

}
