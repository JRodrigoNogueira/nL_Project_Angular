import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { debounceTime } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-painel',
  templateUrl: './vehicle-painel.component.html',
  styleUrls: ['./vehicle-painel.component.scss']
})
export class VehiclePainelComponent implements OnInit {

  constructor(
    private vehicleService: VehicleService,
    private form: FormBuilder,
  ) { }

  filterControl = new FormControl('');
  totalLength!: number;
  pageSize = 10;
  page = 0;

  vehicleDataTable = new MatTableDataSource();
  displayedColumns = ['placa', 'marca', 'modelo', 'cor', 'idApartamento', 'action'];

  vehicleForm = this.form.group({
    placa: [null,[Validators.required]],
    marca: [null,[Validators.required]],
    modelo: [null,Validators.required],
    cor: [null,Validators.required],
    idApartamento: [null,Validators.required]
  });

  pageChange(pageEvent: PageEvent) {
    this.vehicleService
      .findAllPaginated(pageEvent, this.filterControl.value)
      .subscribe({
        next: (response) => {
          this.vehicleDataTable.data = response.content;
          this.totalLength = response.totalElements;
          this.pageSize = response.size;
          this.page = pageEvent.pageIndex;
        },
        error: () => console.log("Erro ao carregar tabela.")
      });
  }

  ngOnInit(): void {

      this.filterControl.valueChanges.pipe(debounceTime(1000)).subscribe(query => {
      this.vehicleService.findAllPaginated({
        pageIndex: this.page,
        pageSize: this.pageSize,
        length: this.totalLength,
      },
       query).subscribe(response => {
        this.vehicleDataTable.data = response.content;
      });
    })

    this.pageChange({
      pageIndex: this.page,
      pageSize: this.pageSize,
      length: this.totalLength,
    });

  }

  verForm(){
    console.log(this.vehicleForm.value);
  }

  salvar() {
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  deletar(n: number) {
    console.log(n);
  }

}
