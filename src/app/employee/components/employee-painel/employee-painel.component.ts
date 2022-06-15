import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-painel',
  templateUrl: './employee-painel.component.html',
  styleUrls: ['./employee-painel.component.scss']
})
export class EmployeePainelComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private form: FormBuilder,
  ) { }

  filterControl = new FormControl('');
  totalLength!: number;
  pageSize = 10;
  page = 0;

  employeeDataTable = new MatTableDataSource();
  displayedColumns = ['funcionario', 'rg', 'cpf', 'telefone1', 'telefone2', 'idApartamento','action'];

  employeeForm = this.form.group({
    funcionario: [null,[Validators.required]],
    rg: [null,[Validators.required]],
    cpf: [null,Validators.required],
    telefone1: [null,Validators.required],
    telefone2: [],
    observacoes: [],
    idApartamento: [null,Validators.required]
  });

  pageChange(pageEvent: PageEvent) {
    this.employeeService
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.employeeDataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
        error: () => console.log("Erro ao carregar tabela.")
      });
  }

  ngOnInit(): void {

      this.filterControl.valueChanges.pipe(debounceTime(1000)).subscribe(query => {
      this.employeeService.findAllPaginated({
        pageIndex: this.page,
        pageSize: this.pageSize,
        length: this.totalLength,
      },
       query).subscribe(response => {
        this.employeeDataTable.data = response.content;
      });
    })

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });

  }

  deletar(n: number) {
    console.log(n);
  }


}
