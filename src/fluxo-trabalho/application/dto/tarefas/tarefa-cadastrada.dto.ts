import { NovaTarefaDto } from "./nova-tarefa.dto";

export class TarefaCadastradaDto extends NovaTarefaDto {
  constructor(public id: number, nome: string) {
    super(nome)
  }
}