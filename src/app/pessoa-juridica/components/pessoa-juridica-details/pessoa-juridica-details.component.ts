import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaJuridicaService } from '../../services/pessoa-juridica.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-juridica-details',
  templateUrl: './pessoa-juridica-details.component.html',
  styleUrls: ['./pessoa-juridica-details.component.scss'],
})
export class PessoaJuridicaDetailsComponent implements OnInit {
  isEdit = false;
  pessoaJuridicaId!: number;

  constructor(
    private pessoaJuridicaService: PessoaJuridicaService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.isEdit = params['id'] !== 'new';
        this.pessoaJuridicaId = params['id'];
      },
    });

    if (this.isEdit) {
      this.loadData();
    }
  }

  changePage(x: string) {
    this.router.navigate([x]);
  }

  loadData() {
    this.pessoaJuridicaService.getPjById(this.pessoaJuridicaId).subscribe({
      next: (response) => {
        console.log(response);
        this.pessoaJuridicaForm.patchValue(response);
      },
    });
  }

  pessoaJuridicaForm = this.form.group({
    nome: [null, [Validators.required]],
    cnpj: [null, [Validators.required]],
    inscricaoEstadual: [null, Validators.required],
    telefone1: [null, Validators.required],
    telefone2: [],
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required]],
    cep: [null, [Validators.required]],
    endereco: [null, [Validators.required]],
    numero: [null, [Validators.required]],
    bairro: [null, [Validators.required]],
    cidade: [null, [Validators.required]],
    estado: [null, [Validators.required]],
    descricao: [null, [Validators.required]],
    servico: [null, [Validators.required]],
    video: [null, [Validators.required]],
  });

  cnpjMask = [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ];
  telefoneMask = [
    '(',
    /\d/,
    /\d/,
    ')',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  criar() {
    const data = this.pessoaJuridicaForm.value;
    this.pessoaJuridicaService.createPj(data).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`);
      },
    });
  }

  atualizar() {
    const data = this.pessoaJuridicaForm.value;
    this.pessoaJuridicaService.updatePj(data, this.pessoaJuridicaId).subscribe({
      next: () => {
        this.router.navigate([`pJ/painel/${this.pessoaJuridicaId}`]);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`);
      },
    });
  }

  limpar() {
    this.pessoaJuridicaForm.reset();
  }

  excluir() {
    if (
      confirm(
        `Tem certeza que deseja Excluir a conta? (Essa ação não pode ser revertida)`
      )
    ) {
      this.pessoaJuridicaService.deletePJ(this.pessoaJuridicaId).subscribe({
        next: () => {
          this.router.navigate(['']);
        },
        error: (x) => {
          console.log(`Não foi possível excluir a conta. ${x}`);
        },
      });
    }
  }
}
