import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-painel',
  templateUrl: './vehicle-painel.component.html',
  styleUrls: ['./vehicle-painel.component.scss']
})
export class VehiclePainelComponent implements OnInit {

  constructor(private vehicleService: VehicleService) {  }

  ngOnInit(): void {

    this.vehicleService.getVehicleByPlaca("ABC1234").subscribe({
      next: (response) => {
        console.log(response);
      }
    });

  }

}
