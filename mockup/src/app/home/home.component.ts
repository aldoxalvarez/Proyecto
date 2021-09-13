import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

form:FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
this.createForm();
    }

createForm(){
this.form=this.fb.group({
  nombre:['',Validators.required],
  apellido:['',Validators.required],
  telefono:['',Validators.required],
  empresa:['',Validators.required],
  cargo:['',Validators.required],
  mail:['',Validators.compose([
    Validators.required,Validators.email
  ])]
})
}

clickRegister(){
console.log(this.form.controls);
this.form.reset();
alert("Success!");
}

  }


