import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { maxNumberValidator } from './shared/maxNumber.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  // data: any;

  // chartOptions: any;

  // subscription: Subscription;

  // config: AppConfig;

  // constructor( private configService: AppConfigService ){}


  // myForm : FormGroup | number | any;
  // inputBox1 : any;
  // inputBox2 : any;

  ngOnInit():void{
    // this.myForm = new FormGroup({
    //   box1 : new FormControl('',[Validators.required, maxNumberValidator.maxNumber]),
    //   box2 : new FormControl('',[Validators.required, maxNumberValidator.maxNumber])
    // })



//     this.data = {
//       labels: ['A','B','C'],
//       datasets: [
//           {
//               data: [300, 50, 100],
//               backgroundColor: [
//                   "#42A5F5",
//                   "#66BB6A",
//                   "#FFA726"
//               ],
//               hoverBackgroundColor: [
//                   "#64B5F6",
//                   "#81C784",
//                   "#FFB74D"
//               ]
//           }
//       ]
//   };

//   this.config = this.configService.config;
//   this.updateChartOptions();
//   this.subscription = this.configService.configUpdate$.subscribe(config => {
//       this.config = config;
//       this.updateChartOptions();
//   });
// }

// updateChartOptions() {
//   this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
// }

// getLightTheme() {
//   return {
//       plugins: {
//           legend: {
//               labels: {
//                   color: '#495057'
//               }
//           }
//       }
//   }
// }

// getDarkTheme() {
//   return {
//       plugins: {
//           legend: {
//               labels: {
//                   color: '#ebedef'
//               }
//           }
//       }
//   }
// }




  // }
  // onSubmit(){
  //   console.log(this.myForm)
  // }

  // onBlur(){
  //   this.inputBox1 = this.myForm.controls.box1.value;
  //   this.inputBox2 = this.myForm.controls.box2.value;
  //   // console.log(this.inputBox1)
  //   // console.log(this.inputBox2)
  //   if(this.inputBox1 && !this.inputBox2){
  //     this.myForm.patchValue({
  //       box2 : 100 - this.inputBox1
  //     })
  //   }else{
  //     this.myForm.patchValue({
  //       box1 : 100 - this.inputBox2
  //     })
  //   }
  // }
  




}

}

