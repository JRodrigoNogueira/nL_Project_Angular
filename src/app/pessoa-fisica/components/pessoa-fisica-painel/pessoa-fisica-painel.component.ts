import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { PessoaFisicaService } from '../../services/pessoa-fisica.service';

@Component({
  selector: 'app-pessoa-fisica-painel',
  templateUrl: './pessoa-fisica-painel.component.html',
  styleUrls: ['./pessoa-fisica-painel.component.scss']
})
export class PessoaFisicaPainelComponent implements OnInit {

  constructor(
    private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder
  ) { }

  filterControl = new FormControl('');
  totalLength!: number;
  pageSize = 10;
  page = 0;
  nome: String = ''
  pfId: any

  public filter: String = ''

  pFDataTable = new MatTableDataSource();
  displayedColumns = [
    'nome',
    'servico',
    'cep',
    'action',
  ];

  pageChange(pageEvent: PageEvent) {
    this.pessoaFisicaService
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.pFDataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
        error: () => console.log('Erro ao carregar tabela.'),
      });
  }

  busca(x: number){
    switch(x){
      case 1:
      this.filter = 'Salão'
      break
      case 2:
      this.filter = 'Roupa'
      break
      case 3:
      this.filter = 'Academia'
      break
      case 4:
      this.filter = 'Mercado'
      break
      case 5:
      this.filter = 'Biblioteca'
      break
    }
  }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        this.pessoaFisicaService.getPfById(params['id']).subscribe((response) =>{
          this.nome = response.nome
          console.log(this.nome)
        })
      },
    });

    this.filterControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((query) => {
        this.pessoaFisicaService
          .findAllPaginated(
            {
              pageIndex: this.page,
              pageSize: this.pageSize,
              length: this.totalLength,
            },
            query
          )
          .subscribe((response) => {
            this.pFDataTable.data = response.content;
          });
      });

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });

    this.route.params.subscribe({
      next: (params) => {
        this.pfId = params['id'];
      },
    });

  }

  changePageId(){
    this.router.navigate([`pF/${this.pfId}`])
  }

  changePageIdPj(x: number){
    this.router.navigate([`pJ/painel/${x}/${this.pfId}`])
  }

}
