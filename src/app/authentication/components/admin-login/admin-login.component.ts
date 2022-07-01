import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  loginFormPF = this.form.group({
    email: [null,[Validators.required, Validators.email]],
    senha: [null,[Validators.required]],
  });

}
