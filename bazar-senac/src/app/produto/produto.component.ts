import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  items = [];
  listaProdutos: Produto[];


  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => { this.items = resp });
  }

  onChangePage(pageofItems: Array<any>){
    this.listaProdutos = pageofItems;
  }

}
