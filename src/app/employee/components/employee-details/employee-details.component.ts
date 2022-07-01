import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/,  '-', /\d/, /\d/];
  rgMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  telefoneMask =  ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  isEdit = false;
  residentId!: number;

  constructor(
    private employeeService: EmployeeService,
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

  criar() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  loadData() {

    this.employeeService.getEmployeeById(this.residentId).subscribe({
      next: (response) =>{
        this.employeeForm.patchValue(response);
      }
    });

  }

  atualizar() {
    const data = this.employeeForm.value;
    this.employeeService.updateEmployee(data, this.residentId).subscribe({
      next: () => {
        this.router.navigate(['/employee']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }


}
