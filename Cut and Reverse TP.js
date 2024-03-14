function solve(str){
    let leftSide = str.split('').reverse().slice(0,str.length/2).join('');
    let rightSide = str.split('').reverse().slice(str.length/2, str.length).join('')
    console.log(`${rightSide}\n${leftSide}`);
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');