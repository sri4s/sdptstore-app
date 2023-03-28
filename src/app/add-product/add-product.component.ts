import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  isSB:boolean=false;
  constructor(private fb:FormBuilder, private common:CommonService){

  
  }
  
  ngOnInit(){
    console.log("test ok")
  this.getproducts();
  }
  addproduct(){
    this.isSB=true;
    if(!this.addForm.valid){
      return
    }else{
      let body=this.addForm.value;
      this.addForm.reset();
      this.isSB=false;
      console.log(body)
      this.common.addproduct(body).subscribe((res:any)=>{
        console.log(res);
        if(res.status == "success"){
          console.log("success")
        }else if(res.status == "error"){
          console.log("something went wrong");
        } 
      });
    }
  }
  addForm=this.fb.group({
    Product_name:["",Validators.required],
    category:["",Validators.required],
    location:["",Validators.required],
    specialization:["",Validators.required],
    contact_number:["",Validators.required],
    description:["",Validators.required]
  });
  
  get addformcontrols(){
    return this.addForm.controls
  }
  products:any;
  getproducts(){
    this.common.getproduct().subscribe(data=>{
      this.products=data;
      console.log(this.products)
    })
  }
}
