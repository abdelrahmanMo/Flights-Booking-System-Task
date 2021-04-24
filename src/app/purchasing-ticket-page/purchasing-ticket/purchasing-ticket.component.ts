import { FlightsService } from './../../shared/flights.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchasing-ticket',
  templateUrl: './purchasing-ticket.component.html',
  styleUrls: ['./purchasing-ticket.component.css']
})
export class PurchasingTicketComponent implements OnInit {

  constructor(public service: FlightsService, private toaster: ToastrService, private router: Router) { }


  ngOnInit(): void {
    console.log(uuidv4())
  }

  onSubmit = (form: NgForm) => {
    this.service.purchasingFormData.id = uuidv4();
    this.service.purchasingFormData.FlightId = +this.service.selectedFlight.id;
    this.service.createPurchasing().subscribe(res => {
      this.resetForm(form);
      this.toaster.success("Submitted Successfully !", 'Purchasing Ticket')
      this.router.navigate(["/"]);
    },
      err => {
        console.log(err)
      }
    )


  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.purchasingFormData = {
      id: '',
      FlightId: 0,
      fullName: '',
      email: '',
      mobile: '',
      cardOwnerName: '',
      cardNumber: '',
      expirationDate: '',
      securityCode: ''
    };
  }
}
