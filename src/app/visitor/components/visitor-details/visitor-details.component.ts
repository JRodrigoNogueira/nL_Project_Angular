import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisitorService } from '../../services/visitor.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-visitor-details',
  templateUrl: './visitor-details.component.html',
  styleUrls: ['./visitor-details.component.scss']
})
export class VisitorDetailsComponent implements OnInit {

  isEdit = false;
  residentId!: number;

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/,  '-', /\d/, /\d/];
  rgMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  telefoneMask =  ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private visitorService: VisitorService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        this.isEdit = params['id'] !== 'new';
        this.residentId = params['id'];
      },
    });

    if (this.isEdit) {
      this.loadData();
    }

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

  criar() {
    this.visitorService.createVisitor(this.visitorForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/employee/new']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  loadData() {

    this.visitorService.getVisitorById(this.residentId).subscribe({
      next: (response) =>{
        this.visitorForm.patchValue(response);
      }
    });

  }

  atualizar() {
    const data = this.visitorForm.value;
    this.visitorService.updateVisitor(data, this.residentId).subscribe({
      next: () => {
        this.router.navigate(['/visitor']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

}
