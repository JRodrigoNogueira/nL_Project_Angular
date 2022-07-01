import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { pf } from './../../models/pf';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-pf-login',
  templateUrl: './pf-login.component.html',
  styleUrls: ['./pf-login.component.scss']
})
export class PfLoginComponent implements OnInit {

  pfs: pf[] = [];
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

    this.authenticationService.findAllPf().subscribe(dados => {
      this.pfs = dados;
    })

  }

  loginFormPF = this.form.group({
    email: [null,[Validators.required, Validators.email]],
    senha: [null,[Validators.required]],
  });


  login(){
    for(let i=0; i<this.pfs.length; i++){
      if(this.email == this.pfs[i].email){
        this.emailV = true;
        if(this.senha == this.pfs[i].senha){
          this.senhaV = true;
          console.log("logado")
          this.router.navigate([`/pF/painel/${this.pfs[i].id}`]);
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

