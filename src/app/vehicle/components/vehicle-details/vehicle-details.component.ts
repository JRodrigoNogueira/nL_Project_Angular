import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})

export class VehicleDetailsComponent implements OnInit {

  isEdit = false;
  residentId!: number;

  constructor(
    private vehicleService: VehicleService,
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

  vehicleForm = this.form.group({
    placa: [null,[Validators.required]],
    marca: [null,[Validators.required]],
    modelo: [null,Validators.required],
    cor: [null,Validators.required],
    idApartamento: [null, Validators.required]/* {value:1, disabled:true} */
  });

  verForm(){
    console.log(this.vehicleForm.value);
  }

  criar() {
    this.vehicleService.createVehicle(this.vehicleForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/visitor/new']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  loadData() {

    this.vehicleService.getVehicleById(this.residentId).subscribe({
      next: (response) =>{
        this.vehicleForm.patchValue(response);
      }
    });

  }

  atualizar() {
    const data = this.vehicleForm.value;
    this.vehicleService.updateVehicle(data, this.residentId).subscribe({
      next: () => {
        this.router.navigate(['/vehicle']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

}
