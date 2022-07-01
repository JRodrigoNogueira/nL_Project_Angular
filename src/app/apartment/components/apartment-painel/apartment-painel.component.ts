import { ApartmentService } from './../../services/apartment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { Apartment } from './../../models/apartment';

@Component({
  selector: 'app-apartment-painel',
  templateUrl: './apartment-painel.component.html',
  styleUrls: ['./apartment-painel.component.scss']
})
export class ApartmentPainelComponent implements OnInit {

  apartments: Apartment[] = [];

  constructor(
    private apartmentService: ApartmentService,
    private form: FormBuilder,
  ) { }

  filterControl = new FormControl('');
  totalLength!: number;
  pageSize = 10;
  page = 0;

  apartmentDataTable = new MatTableDataSource();
  displayedColumns = [
    'numeroAp',
  ];

  apartmentsForm = this.form.group({
    numero: [null,[Validators.required]],
  });

  pageChange(pageEvent: PageEvent) {
    this.apartmentService
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.apartmentDataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
        error: () => console.log('Erro ao carregar tabela.'),
      });
  }

  consultar() {
    console.log(this.apartments);
  }

  ngOnInit(): void {

    this.apartmentService.findAll().subscribe(dados => {
      this.apartments = dados;
    })

    this.filterControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((query) => {
        this.apartmentService
          .findAllPaginated(
            {
              pageIndex: this.page,
              pageSize: this.pageSize,
              length: this.totalLength,
            },
            query
          )
          .subscribe((response) => {
            this.apartmentDataTable.data = response.content;
          });
      });

      this.pageChange({
        pageIndex: this.page,
        pageSize: this.pageSize,
        length: this.totalLength,
      });

  }

}
