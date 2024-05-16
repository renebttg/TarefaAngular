import { Component } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Component({
    selector: 'app-tarefas',
    templateUrl: './tarefas.component.html',
    styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
    tarefas: Tarefa[] = [
        { descricao: 'Fazer compras no mercado', concluida: false },
        { descricao: 'Ligar para o cliente X', concluida: true },
        { descricao: 'Marcar Exames', concluida: false },
        { descricao: 'Estudar pra prova', concluida: true },
        { descricao: 'Fazer exercícios físicos', concluida: false }
    ];

    toggleConcluida(tarefa: Tarefa): void {
        tarefa.concluida = !tarefa.concluida;
    }
}
