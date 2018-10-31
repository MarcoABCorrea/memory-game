import { TestBed, inject } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';

describe('ProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutosService]
    });
  });

  it('should be created', inject([ProdutosService], (service: ProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
