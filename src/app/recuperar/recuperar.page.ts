import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioRecuperar: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioRecuperar = this.fb.group({
      'correo' : new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }

}