import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})

export class VehicleDetailsComponent implements OnInit {

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {

  }

  changePage(x: string){
    this.router.navigate([x])
  }

  vehicleForm = this.form.group({
    placa: [null,[Validators.required]],
    marca: [null,[Validators.required]],
    modelo: [null,Validators.required],
    cor: [null,Validators.required],
    idApartamento: [null,Validators.required]
  });

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

  ler() {
    console.log("teste");
    this.vehicleService.getVehicleByPlaca("Mary").subscribe({
      next: (response) => {
        console.log(response);
      }
    });
  }

}
