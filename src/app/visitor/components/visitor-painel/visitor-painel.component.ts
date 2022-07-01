import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'app-visitor-painel',
  templateUrl: './visitor-painel.component.html',
  styleUrls: ['./visitor-painel.component.scss'],
})
export class VisitorPainelComponent implements OnInit {
  constructor(
    private visitorService: VisitorService,
    private form: FormBuilder
  ) {}

  filterControl = new FormControl('');
  totalLength!: number;
  pageSize = 10;
  page = 0;

  visitorDataTable = new MatTableDataSource();
  displayedColumns = [
    'visitante',
    'rg',
    'cpf',
    'telefone1',
    'telefone2',
    'idApartamento',
    'action',
  ];

  visitorForm = this.form.group({
    visitante: [null, [Validators.required]],
    rg: [null, [Validators.required]],
    cpf: [null, Validators.required],
    telefone1: [null, Validators.required],
    telefone2: [],
    observacoes: [],
    idApartamento: [null, Validators.required],
  });

  pageChange(pageEvent: PageEvent) {
    this.visitorService
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.visitorDataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
        error: () => console.log('Erro ao carregar tabela.'),
      });
  }

  ngOnInit(): void {
    this.filterControl.valueChanges.pipe(debounceTime(1000)).subscribe((query) => {
      this.visitorService
        .findAllPaginated(
          {
            pageIndex: this.page,
            pageSize: this.pageSize,
            length: this.totalLength,
          },
          query
        )
        .subscribe((response) => {
          this.visitorDataTable.data = response.content;
        });
    });

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });
  }

  deletar(data: any) {
    if (confirm(`Confirma a deleção do(a) visitante(a) ${data.visitante}?`)) {
      this.visitorService.deleteVisitor(data.id).subscribe({
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
