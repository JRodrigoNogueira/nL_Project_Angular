import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidentService } from '../../services/resident.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resident-details',
  templateUrl: './resident-details.component.html',
  styleUrls: ['./resident-details.component.scss']
})
export class ResidentDetailsComponent implements OnInit {

  isEdit = false;
  residentId!: number;

  constructor(
    private residentService: ResidentService,
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


  loadData() {

    this.residentService.getResidentById(this.residentId).subscribe({
      next: (response) =>{
        console.log(response);
        this.residentForm.patchValue(response);
      }
    });

  }

  residentForm = this.form.group({
    morador: [null,[Validators.required]],
    rg: [null,[Validators.required]],
    cpf: [null,Validators.required],
    telefone1: [null,Validators.required],
    telefone2: [],
    email: [null,[Validators.required, Validators.email]],
    contatoEmergencia: [],
    telefoneEmergencia: [],
    observacoes: [],
    idApartamento: [null,Validators.required]
  });


  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/,  '-', /\d/, /\d/];
  rgMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  telefoneMask =  ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  verForm(){
    console.log(this.residentForm.value);
  }

  criar() {
    const data = this.residentForm.value;
    this.residentService.createResident(data).subscribe({
      next: () => {
        this.router.navigate(['/vehicle/new']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  atualizar() {
    const data = this.residentForm.value;
    this.residentService.updateResident(data, this.residentId).subscribe({
      next: () => {
        this.router.navigate(['/resident']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

}
