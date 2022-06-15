import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from '../../services/visitor.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.scss']
})
export class VisitorDetailsComponent implements OnInit {

  constructor(
    private visitorService: VisitorService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  changePage(x: string){
    this.router.navigate([x])
  }

  visitorForm = this.form.group({
    visitante: [null,[Validators.required]],
    rg: [null,[Validators.required]],
    cpf: [null,Validators.required],
    telefone1: [null,Validators.required],
    telefone2: [],
    observacoes: [],
    idApartamento: [null,Validators.required]
  });

  verForm(){
    console.log(this.visitorForm.value);
  }

  salvar() {
    this.visitorService.createVisitor(this.visitorForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  ler() {
    console.log("teste");
    this.visitorService.getVisitorByName("Mary").subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

}
