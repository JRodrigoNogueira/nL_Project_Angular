import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { pj } from './../../models/pj';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-pj-login',
  templateUrl: './pj-login.component.html',
  styleUrls: ['./pj-login.component.scss']
})
export class PjLoginComponent implements OnInit {

  pjs: pj[] = [];

  pessoaJuridicaId: Number = 0

  emailV: boolean = false;
  senhaV: boolean = false;

  public email!: String;
  public senha!: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
    private authenticationService: AuthenticationService,
  ) { }

  changePage(x: string){
    this.router.navigate([x])
  }

  ngOnInit(): void {

    this.authenticationService.findAllPj().subscribe(dados => {
      this.pjs = dados;
    })

  }

  loginFormPF = this.form.group({
    email: [null,[Validators.required, Validators.email]],
    senha: [null,[Validators.required]],
  });

  login(){
    for(let i=0; i<this.pjs.length; i++){
      if(this.email == this.pjs[i].email){
        this.emailV = true;
        if(this.senha == this.pjs[i].senha){
          this.senhaV = true;
          console.log("logado")
          this.router.navigate([`/pJ/painel/${this.pjs[i].id}`]);
        } else {
          this.senhaV = false;
        }
      } else {
        this.emailV = false;
      }
    }
    if(!this.emailV) alert("O Email digitado está incorreto.")
    else if(!this.senhaV) alert("A Senha digitada está incorreta.")
  }

}
