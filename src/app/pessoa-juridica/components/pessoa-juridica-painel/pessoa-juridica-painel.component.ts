import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { pj } from './../../../authentication/models/pj';
import { avalia } from './../../../authentication/models/avalia';
import { PessoaJuridicaService } from './../../services/pessoa-juridica.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-pessoa-juridica-painel',
  templateUrl: './pessoa-juridica-painel.component.html',
  styleUrls: ['./pessoa-juridica-painel.component.scss'],
})
export class PessoaJuridicaPainelComponent implements OnInit {
  pj!: pj;

  avalia: avalia[] = [];

  video: String = '';

  url: any;

  pessoaJuridicaId: Number = 0;
  pessoaFisicaId: Number = 0;

  nota: number = 0
  totalAvaliacoes: number = 0
  mediaNota: number = 0
  stars: any[] = []

  lat: any;
  lng: any;

  responseMap: any = {
    results: [
      {
        address_components: [
          {
            long_name: '',
            short_name: '',
            types: [''],
          },
          {
            long_name: '',
            short_name: '',
            types: ['route'],
          },
          {
            long_name: '',
            short_name: '',
            types: ['', ''],
          },
          {
            long_name: '',
            short_name: '',
            types: ['', ''],
          },
          {
            long_name: '',
            short_name: '',
            types: ['', ''],
          },
          {
            long_name: '',
            short_name: '',
            types: ['', ''],
          },
          {
            long_name: '',
            short_name: '',
            types: ['postal_code'],
          },
        ],
        formatted_address: '',
        geometry: {
          location: {
            lat: 0,
            lng: 0,
          },
          location_type: '',
          viewport: {
            northeast: {
              lat: 0,
              lng: 0,
            },
            southwest: {
              lat: 0,
              lng: 0,
            },
          },
        },
        place_id: '',
        plus_code: {
          compound_code: '',
          global_code: '',
        },
        types: [''],
      },
    ],
    status: '',
  };

  isPF: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
    private pessoaJuridicaService: PessoaJuridicaService,
    public sanitizer: DomSanitizer,
    public http: HttpClient
  ) {}

  ngOnInit(): void {

    if (!navigator.geolocation) {
      console.log('Localização não suportada.');
    }

    this.pessoaJuridicaService.findAllAvalia().subscribe(dados => {
      this.avalia = dados;
      this.getMedia()
    })

    let loader = new Loader({
      apiKey: 'AIzaSyAliALvIHyUxhE0rdlSqVehNl9WaC9G8nY',
    });

    this.route.params.subscribe({
      next: (params) => {
        this.pessoaJuridicaId = params['id'];
      },
    });

    this.route.params.subscribe({
      next: (params) => {
        this.pessoaFisicaId = params['id2'];
        if (this.pessoaFisicaId != undefined) this.isPF = true;
      },
    });

    this.pessoaJuridicaService
      .getPjById(this.pessoaJuridicaId)
      .subscribe((dados) => {
        this.pj = dados;
        this.pj.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.pj.video
        );
      });

    loader.load().then(() => {

      this.url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.pj.cep}&key=AIzaSyAliALvIHyUxhE0rdlSqVehNl9WaC9G8nY`

      this.http.get(this.url)
        .subscribe((responseData) => (this.responseMap = responseData));

      const location = {
        lat: this.lat,
        lng: this.lng,
      };

      console.log(location);

      new google.maps.Map(document.getElementById('map')!, {
        center: location,
        zoom: 6,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#242f3e',
              },
            ],
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#746855',
              },
            ],
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#242f3e',
              },
            ],
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#d59563',
              },
            ],
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#d59563',
              },
            ],
          },
          {
            featureType: 'poi.business',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#263c3f',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off',
              },
            ],
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#6b9a76',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#38414e',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#212a37',
              },
            ],
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9ca5b3',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#746855',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [
              {
                color: '#1f2835',
              },
            ],
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#f3d19c',
              },
            ],
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2f3948',
              },
            ],
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#d59563',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#17263c',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#515c6d',
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#17263c',
              },
            ],
          },
        ],
      });
    });
  }

  click() {

    document.getElementById("map")!.style.display="block";
    document.getElementById("click")!.style.display="none";

    console.log(this.responseMap);

    this.lat = this.responseMap.results[0].geometry.location.lat;
    this.lng = this.responseMap.results[0].geometry.location.lng;

    const location = {
      lat: this.lat,
      lng: this.lng,
    };

    console.log(location);

    new google.maps.Map(document.getElementById('map')!, {
      center: location,
      zoom: 18,
      styles: [
        {
          elementType: 'geometry',
          stylers: [
            {
              color: '#242f3e',
            },
          ],
        },
        {
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#746855',
            },
          ],
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#242f3e',
            },
          ],
        },
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563',
            },
          ],
        },
        {
          featureType: 'poi.business',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#263c3f',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#6b9a76',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#38414e',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#212a37',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#9ca5b3',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [
            {
              color: '#746855',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#1f2835',
            },
          ],
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#f3d19c',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#2f3948',
            },
          ],
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#d59563',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#17263c',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#515c6d',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              color: '#17263c',
            },
          ],
        },
      ],
    });

  }

  getMedia() {

    console.log(this.avalia.length)

    for(let i=0; i < this.avalia.length; i++){
      if(this.pessoaJuridicaId == this.avalia[i].pessoaJuridicaId){
        this.nota = this.nota + this.avalia[i].nota
        this.totalAvaliacoes = this.totalAvaliacoes + 1
      }
    }

    this.mediaNota = Math.round((this.nota / this.totalAvaliacoes))

    for(let i=0; i < this.mediaNota; i++){
      this.stars.push(1);
    }

    console.log(this.stars.length)
  }

  changePage(x: string) {
    this.router.navigate([x]);
  }

  redirectToEdit() {
    this.router.navigate([`pJ/${this.pessoaJuridicaId}`]);
  }

  redirectToBack() {
    this.router.navigate([`pF/painel/${this.pessoaFisicaId}`]);
  }

  nt() {

  }

  avaliar(){
    this.router.navigate([`avaliar/${this.pessoaFisicaId}/${this.pessoaJuridicaId}`]);
  }
}
