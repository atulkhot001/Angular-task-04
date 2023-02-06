import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { maxNumberValidator } from '../shared/maxNumber.validators';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  data: any;



  constructor() { }

  myForm: FormGroup | number | any;
  inputBox1: any;
  inputBox2: any;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      box1: new FormControl('', [Validators.required, maxNumberValidator.maxNumber]),
      box2: new FormControl('', [Validators.required, maxNumberValidator.maxNumber])
    })
  }
 
  onSubmit() {
    console.log(this.myForm)
    this.data = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [this.myForm.controls.box1.value, this.myForm.controls.box2.value],
          backgroundColor: [
            "#42A5F5",
            "#66BB6A",
           
          ],
          hoverBackgroundColor: [
            "#64B5F6",
            "#81C784",
            
          ]
        }
      ]
    };
  }

  // onBlur() {
  //   this.inputBox1 = this.myForm.controls.box1.value;
  //   this.inputBox2 = this.myForm.controls.box2.value;
  //   // console.log(this.inputBox1)
  //   // console.log(this.inputBox2)
   
  //   if (this.inputBox1 && !this.inputBox2) {
  //     this.myForm.patchValue({
  //       box2: 100 - this.inputBox1
  //     })
  //   } else {
  //     this.myForm.patchValue({
  //       box1: 100 - this.inputBox2
  //     })
  //   }
  // }

  onBlur1() {
    this.inputBox1 = this.myForm.controls.box1.value;
    if (this.myForm.controls.box1.value && this.myForm.controls.box1.value > 0 ) {
      this.myForm.patchValue({
        box2: 100 - this.myForm.controls.box1.value
      })
    } 
  }
  onBlur2() {
    this.inputBox2 = this.myForm.controls.box2.value;
    if (this.myForm.controls.box2.value && this.myForm.controls.box2.value > 0 ) {
      this.myForm.patchValue({
        box1: 100 - this.myForm.controls.box2.value
      })
    } 
  }
















}
