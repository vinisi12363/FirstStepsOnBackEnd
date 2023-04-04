import fs from "fs";

function criarLista(){
    console.log ("criando lista...")
    for (let i=1; i<= 100; i++){
        fs.writeFileSync(`${i}.txt`, `Lista 1 - Cálculo 1 - Exercício ${i}`)
    }
}

export default criarLista;

