// implemente aqui as funções de teste
//k1
function testeReverseString1() {
    let result = reverseString("Kenzie Academy");
    let expected = "ymedacA eizneK";
    console.assert(result === expected,
         `esperado: ${expected}, 
         obtido: ${result}`)
}
testeReverseString1()

function testeReverseString2() {
    let result = reverseString(125);
    let expected = "521";
    console.assert(result === expected,
         `esperado: ${expected}, 
         obtido: ${result}`)
}
testeReverseString2()

function reverseString(str){ 
    str = str.toString()   
    let output = str.split('').reverse().join('')
    // for(let i=str.length; i>=0;i--){
    //     output+=str[i]
    // }
    return output
}

//k2
function testReverseSentence1(){
    let resultado= reverseSentence("bob likes dogs");
    let esperado = "dogs likes bob";
    console.assert(resultado === esperado,`
    esperando: ${esperado}
    obtido: ${resultado}`)
}
testReverseSentence1()

function testReverseSentence2(){
    let resultado= reverseSentence("tenho uns 7 bixos");
    let esperado = "bixos 7 uns tenho";
    console.assert(resultado === esperado,`
    esperando: ${esperado}
    obtido: ${resultado}`)
}
testReverseSentence2()

function reverseSentence (str) {
    str= str.toString()
    let output = str.split(' ').reverse().join(" ")
    return output
}
//k3
const testMinimumValue1 =() =>{

    let resultado= minimunValue([2,3,6,5,5,8,9,4,9,1]);
    let esperado = 1;
    console.assert(resultado === esperado,`
    esperando: ${esperado}
    obtido: ${resultado}`)
}
testMinimumValue1()

const testMinimumValue2 =() =>{
    let resultado= minimunValue([-5,-2,-8,-4,-1,5,6,9,-71]);
    let esperado = -71;
    console.assert(resultado === esperado,`
    esperando: ${esperado}
    obtido: ${resultado}`)
}
testMinimumValue2()

function minimunValue(arr){
    let out = arr[0]
    for(let i=0;i<arr.length;i++){
        if(out>arr[i]){
            out = arr[i]
        }
    }

    return out
    // return Math.min(...arr)
}

//k4
const testMaximumValue1 =() =>{
    let resultado= maximunValue([-5,-2,-8,-4,-1,5,6,9,-71]);
    let esperado = 9;
    console.assert(resultado === esperado,`
    esperando: ${esperado}
    obtido: ${resultado}`)
}
testMaximumValue1()

const testMaxinumValue2 =()=>{
    let resultado= maximunValue([2,3,6,5,5,8,9,4,9,1]);
    let esperado = 9;
    console.assert(resultado === esperado,`
    esperando: ${esperado}
    obtido: ${resultado}`)
}
testMaxinumValue2()

function maximunValue(arr) {
    let out = arr[0]
    for(let i=0;i<arr.length;i++){
        if(out<arr[i]){
            out = arr[i]
        }
    }

    return out
    // return Math.max(...arr)
}
//k5
const testCalculateRemainder1 =()=>{
    let resultado= calculateRemainder(19,2);
    let esperado= 1;
    console.assert(resultado === esperado,`
    esperando:${esperado}
    obtido:${esperado}`)
}
testCalculateRemainder1()

const testCalculateRemainder2 =()=>{
    let resultado= calculateRemainder(1222,2);
    let esperado= 0;
    console.assert(resultado === esperado,`
    esperando:${esperado}
    obtido:${esperado}`)
}
testCalculateRemainder2()

function calculateRemainder(numero,divisor){
    let out = numero%divisor
    return out
}

//k6
const testDistinctValues1=()=>{
    let resultado= distinctValues([1,3,5,3,7,3,1,1,5])
    let esperado= [1,3,5,7]
    console.assert(resultado.toString()===esperado.toString(),`
    esperando:${esperado}
    obtido:${resultado}`)
}
testDistinctValues1()
const testDistinctValues2=()=>{
    let resultado= distinctValues('135373115')
    let esperado= [1,3,5,7]
    console.assert((resultado===esperado,`
    esperando:${esperado}
    obtido:${resultado}`))
}
testDistinctValues2()

function distinctValues(list){

    let out=[]   
    if (typeof list === "string") {
        let arr= list.split('')
        for(let i= 0;i<arr.length;i++){
            if(arr.indexOf(list[i])=== -1){
                out.push(Number(arr[i]))
            }
        }
    } 
    for(let i=0;i<list.length;i++){
        if(out.indexOf(list[i])=== -1){
            out.push(list[i])
        }
    }
    return out
}
//k7
const testCountValues1 = ()=>{
    let resultado = countValues([1,3,5,3,7,3,1,1,5])
    let esperado = ['1(3)','3(3)','5(2)','7(1)']
    console.assert(resultado.toString() === esperado.toString(),`
    esperado: ${esperado}
    obtido: ${resultado}`)

}

const testCountValues2 = ()=>{
    let resultado = countValues([12,3,5,3,7,3,12,12,5,5,9,3,8,-1,8,-1]);
    let esperado = ['12(3)','3(4)','5(3)','7(1)','9(1)','8(2)','-1(2)']
    console.assert(resultado.toString() === esperado.toString(),`
    esperado: ${esperado}
    obtido: ${resultado}`)
}
testCountValues2()

function countValues (list){
    let ind = 0
    let out = []
    let arr= []
    for(let i =0;i<list.length;i++){
        ind= 0
        let lt = list[i]
        
        for(let j=0;j<list.length;j++){
            if(lt === list[j]){
                ind++
            }
        };
        if(arr.indexOf(lt) === -1){
            out.push(`${lt}(${ind})`)
        }
        arr.push(lt);
    
    }


    return out
}

//k8

const testEvaluateExpression1=()=>{
    let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
    let expected = -3
    console.assert(result === expected,
         `esperado: ${expected},
          obtido: ${result}`)

}
testEvaluateExpression1()

const testEvaluateExpression2=()=>{
    let result = evaluateExpression("a + b + c - d", {a: 11, b: 17, c: 31, d: 114});
    let expected = -55
    console.assert(result === expected,
         `esperado: ${expected},
          obtido: ${result}`)
}
function evaluateExpression(str,obj){
    let keys = ''
    let out = 0
    for(let i=0;i<str.length;i++){
        if(obj[str[i]] !== undefined){
            keys+= str[i]
        }
    }
    for(let i =0;i<keys.length;i++){
        if(keys[i]==='d'){
            out-= obj[keys[i]]
        }else{
            out+= obj[keys[i]]
        }
    }
    return out
}
testEvaluateExpression2()