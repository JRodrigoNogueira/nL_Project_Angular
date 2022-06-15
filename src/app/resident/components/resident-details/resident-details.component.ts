import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidentService } from '../../services/resident.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resident-details',
  templateUrl: './resident-details.component.html',
  styleUrls: ['./resident-details.component.scss']
})
export class ResidentDetailsComponent implements OnInit {

  constructor(
    private residentService: ResidentService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {

  }

  changePage(x: string){
    this.router.navigate([x])
  }

  getData() {
    /* let name: string = ""
    name = document.getElementById("resident").innerText; */
    console.log("teste");
    this.residentService.getResidentByName("Rodrigo").subscribe({
      next: (response) => {
        console.log(response);
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

  verForm(){
    console.log(this.residentForm.value);
  }

  salvar() {
    this.residentService.createVehicle(this.residentForm.value).subscribe({
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
    this.residentService.getResidentByName("Mary").subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

}
