/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 31/05, até 20h50, valendo nota de participação
*/

import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

const list = new DoublyLinkedList()

function insertInList(val) {
// 1° Caso: Lista vazia
if(list.empty) list.insertTail(val)

// 2° Caso: procurando a posição de inserção
else {
    for(let i = 0; i < list.count; i++) { // loop for para percorrer a lista
        // buscar o valor do nodo da posição atual
        let valPos = list.peek(i) // da uma olhada no valor da posição atual (i)
        // Compara o valor a ser inserido (val) com o valor da posição atual
        if(valPos > val) { // Se o valor que já estava na lista for maior que o que quer entrar, inserimos antes dele (valPos)
            list.insert(i, val) // inserimos na posição i o valor de val
            return // sair da função pois já inserimos
            }
        }
        // Se rodarmos todo o for sem encontrar a posição de inserção, é porque o número a ser inserido é maior
        // do que todos que estão na lista, devemos inserí-lo no final
        list.insertTail(val)
    }
}

insertInList(25)
console.log(list.print())

insertInList(14)
console.log(list.print())

insertInList(19)
console.log(list.print())

insertInList(3)
console.log(list.print())

insertInList(37)
console.log(list.print())