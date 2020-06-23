import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {

  }

  cadastrarProduto() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp;
      this.produto = new Produto();
      this.router.navigate(['/produto']);
    });
  }

}
