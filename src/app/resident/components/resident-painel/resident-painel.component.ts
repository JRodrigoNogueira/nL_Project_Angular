import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { ResidentService } from '../../services/resident.service';

@Component({
  selector: 'app-resident-painel',
  templateUrl: './resident-painel.component.html',
  styleUrls: ['./resident-painel.component.scss'],
})
export class ResidentPainelComponent implements OnInit {
  constructor(
    private residentService: ResidentService,
    private form: FormBuilder
  ) {}

  filterControl = new FormControl('');
  totalLength!: number;
  pageSize = 10;
  page = 0;

  residentDataTable = new MatTableDataSource();
  displayedColumns = [
    'morador',
    'rg',
    'cpf',
    'telefone1',
    'telefone2',
    'email',
    'contatoEmergencia',
    'telefoneEmergencia',
    'idApartamento',
    'action',
  ];

  residentForm = this.form.group({
    morador: [null, [Validators.required]],
    rg: [null, [Validators.required]],
    cpf: [null, Validators.required],
    telefone1: [null, Validators.required],
    telefone2: [],
    email: [null, [Validators.required, Validators.email]],
    contatoEmergencia: [],
    telefoneEmergencia: [],
    observacoes: [],
    idApartamento: [null, Validators.required],
  });

  pageChange(pageEvent: PageEvent) {
    this.residentService
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.residentDataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
        error: () => console.log('Erro ao carregar tabela.'),
      });
  }

  ngOnInit(): void {
    this.filterControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((query) => {
        this.residentService
          .findAllPaginated(
            {
              pageIndex: this.page,
              pageSize: this.pageSize,
              length: this.totalLength,
            },
            query
          )
          .subscribe((response) => {
            this.residentDataTable.data = response.content;
          });
      });

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });
  }

  deletar(data: any) {
    if (confirm(`Confirma a deleção do(a) morador(a) ${data.morador}?`)){
      this.residentService.deleteResident(data.id).subscribe({
        next: () => {
          this.pageChange({
            pageIndex: this.page,
            pageSize: this.pageSize,
            length: this.totalLength,
          });
        },
      });
    }
  }
}
