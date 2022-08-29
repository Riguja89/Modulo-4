console.log('hola mundo')
// let n=15;
// for(let i =1;i<=n;i++){
    
//     if((i % 3===0) && (i %5 ===0)){
//         console.log('FizzBuzz');
//     }else if(i%3==0) console.log('Fizz')
//     else if(i%5==0) console.log('Buzz')
//     else console.log(i);
// }

// function Misterio(a,b){
//     if(a<=0 && b<=0) return 1;
//     if(a%2==0){
//         return a + Misterio(b,b-1);
//      }else{
//         return b + Misterio(a + 1, b)
//      }
// }

// console.log(Misterio(6,2))

function fnuCalcularMCM(numero1, numero2) {
    // Write your code here
    console.log(numero1, ' + ', numero2 )
    let aux;
    if(numero1<numero2){
        aux=numero2;
        numero2=numero1;
        numero1=aux;
    }
    if(numero1%numero2==0)return numero1;
    let i=numero2;
 while(i%numero1!=0 || i%numero2!=0){
        i++;
 }
 return i;
}



 console.log(fnuCalcularMCM(13,87));
// function rar(){
// let letras=["W","A","E","F","L","H","C","J","O","O","M","T","E"];
// let n= letras.length;
// let izq=0, der=0, aux=0;
// let salida="";
// for(let i=0;i<n;i++){
//     if(aux>n) break;
//     der=aux+1;
//     while(der==izq){
//         if(der==izq){
//             salida+=letras[aux];
//             aux=aux+izq;
//         }
//         der--;
//     }
//     izq++;
// }
// return salida;
// }

// console.log(rar());
