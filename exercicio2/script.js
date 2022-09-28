const arrayNumeros = [1,2,3,4,5,6,7,8]

 const arrayMap = arrayNumeros.map((item)=>{
     return item * 3
 })
 console.log(arrayMap)

 const arrayMultiplicacao = arrayNumeros.map((item)=>{
    return item / 2
 })
 console.log(arrayMultiplicacao)

 const comArrayMap = arrayMap.map((item)=>{
    return item / 3
 })
console.log(comArrayMap)

 /* O parâmetro item pega o valor que está na array, ele faz isso porque 
 está ocupando a primeira posição na função callback (item, indice, array)*/
 //--------------------------------------------------------------------------------------