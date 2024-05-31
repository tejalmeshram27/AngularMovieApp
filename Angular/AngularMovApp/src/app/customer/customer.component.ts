import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', 
      [Validators.required,
        Validators.minLength(4)]),
      lastName: new FormControl('', 
      [Validators.required,
        Validators.minLength(4)]),

    });
    onSave(){
      console.log(this.customerForm.value);
      
    }
  }
  customerForm:FormGroup;
}
