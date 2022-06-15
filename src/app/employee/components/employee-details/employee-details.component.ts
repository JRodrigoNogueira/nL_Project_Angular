import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  changePage(x: string){
    this.router.navigate([x])
  }

  employeeForm = this.form.group({
    funcionario: [null,[Validators.required]],
    rg: [null,[Validators.required]],
    cpf: [null,Validators.required],
    telefone1: [null,Validators.required],
    telefone2: [],
    observacoes: [],
    idApartamento: [null,Validators.required]
  });

  verForm(){
    console.log(this.employeeForm.value);
  }

  salvar() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe({
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
    this.employeeService.getEmployeeByName("Mary").subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }


}
