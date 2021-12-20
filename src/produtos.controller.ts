import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return `Lista todos sos produtos`;
  }

  @Get(':id')
  obterUm(@Param() params): string {
    return `retornar dados do produto ${params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return `Produto Criado`;
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return `Produto Atualizado`;
  }

  @Delete(':id')
  deletar(@Param() params): string {
    return `Produto ${params.id} deletado`;
  }
}
