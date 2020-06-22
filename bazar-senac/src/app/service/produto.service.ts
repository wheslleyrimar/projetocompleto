import { Injectable } from '@angular/core';
import { Produto } from './../model/Produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  constructor(private http: HttpClient) { }

  getAllProdutos() {
    return this.http.get('http://localhost:3000/produtos');
  }

  getByIdProduto(id: number) {
    return this.http.get('http://localhost:3000/produtos/${id}');
  }

  postProduto(produto: Produto) {
    return this.http.post('http://localhost:3000/produtos/', produto);
  }

  putProduto(produto: Produto) {
    return this.http.put('http://localhost:3000/produtos/', produto);
  }

  deleteProduto(id: number) {
    return this.http.delete('http://localhost:3000/produtos/${id}');
  }

}