import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvaliarService } from '../../services/avaliar.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-avaliar-details',
  templateUrl: './avaliar-details.component.html',
  styleUrls: ['./avaliar-details.component.scss']
})
export class AvaliarDetailsComponent implements OnInit {

  isEdit = false;
  pessoaFisicaId!: number;
  pessoaJuridicaId!: number;

  constructor(
    private avaliarService: AvaliarService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        this.pessoaFisicaId = params['id'];
        this.pessoaJuridicaId = params['id2'];
      },
    });

  }

  changePage(x: string){
    this.router.navigate([x])
  }

  avaliacaoForm = this.form.group({
    comentario: [null,[Validators.required]],
    nota: [null,[Validators.required]],
    pessoaFisicaId: [],
    pessoaJuridicaId: []
  });

  criar() {

    console.log(this.pessoaFisicaId)
    console.log(this.pessoaJuridicaId)

    const data = this.avaliacaoForm.value;
    this.avaliarService.createAvaliacao(data).subscribe({
      next: () => {
        this.router.navigate([`pJ/painel/${this.pessoaJuridicaId}/${this.pessoaFisicaId}`]);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

}
