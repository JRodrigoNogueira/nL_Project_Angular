import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaFisicaService } from '../../services/pessoa-fisica.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa-fisica-details',
  templateUrl: './pessoa-fisica-details.component.html',
  styleUrls: ['./pessoa-fisica-details.component.scss']
})
export class PessoaFisicaDetailsComponent implements OnInit {

  isEdit = false;
  pessoaFisicaId!: number;

  constructor(
    private pessoaFisicaService: PessoaFisicaService,
    private router: Router,
    private route: ActivatedRoute,
    private form: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (params) => {
        this.isEdit = params['id'] !== 'new';
        this.pessoaFisicaId = params['id'];
      },
    });

    if (this.isEdit) {
      this.loadData();
    }

  }

  changePage(x: string){
    this.router.navigate([x])
  }

  loadData() {

    this.pessoaFisicaService.getPfById(this.pessoaFisicaId).subscribe({
      next: (response) =>{
        console.log(response);
        this.pessoaFisicaForm.patchValue(response);
      }
    });

  }

  pessoaFisicaForm = this.form.group({
    nome: [null,[Validators.required]],
    rg: [null,[Validators.required]],
    cpf: [null,Validators.required],
    telefone1: [null,Validators.required],
    telefone2: [],
    email: [null,[Validators.required, Validators.email]],
    senha: [null,[Validators.required]],
    cep: [null,[Validators.required]],
    endereco: [null,[Validators.required]],
    numero: [null,[Validators.required]],
    bairro: [null,[Validators.required]],
    cidade: [null,[Validators.required]],
    estado: [null,[Validators.required]],
  });

  cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.',/\d/, /\d/, /\d/,  '-', /\d/, /\d/];
  rgMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/];
  telefoneMask =  ['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  criar() {
    const data = this.pessoaFisicaForm.value;
    this.pessoaFisicaService.createPf(data).subscribe({
      next: () => {
        this.router.navigate(['']);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  atualizar() {
    const data = this.pessoaFisicaForm.value;
    this.pessoaFisicaService.updatePf(data, this.pessoaFisicaId).subscribe({
      next: () => {
        this.router.navigate([`pF/painel/${this.pessoaFisicaId}`]);
      },
      error: (x) => {
        console.log(`Não foi possível salvar as informações. ${x}`)
      }
    });
  }

  limpar() {
    this.pessoaFisicaForm.reset()
  }

  excluir() {
    if (
      confirm(
        `Tem certeza que deseja Excluir a conta? (Essa ação não pode ser revertida)`
      )
    ) {
      this.pessoaFisicaService.deletePF(this.pessoaFisicaId).subscribe({
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
