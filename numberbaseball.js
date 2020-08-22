const input = document.querySelector('#input');
const check = document.querySelector('#check');
const resetbutton = document.querySelector('#reset');
const logs = document.querySelector('#logs');
const info = document.querySelector('#info');
const easy = document.querySelector('#easy');
const normal = document.querySelector('#normal');
const hard = document.querySelector('#hard');
let Level=null;
let answer =[];
let count = 1;
let gameend = 1;

function numberselect(level) {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for(let n=0; n<=level-1; n+=1) {
        const index = Math.floor(Math.random()*(10-n));
        answer.push(numbers[index]);
        numbers.splice(index, 1);
    }
    console.log(answer);   
}
function reset() {
    logs.textContent = '';
    info.textContent = '';
    input.value=null;
    count = 1;
    gameend = 1;
    answer =[]
}

function levelselect(Level) {
    reset();
    info.innerHTML=Level+'자릿수를 입력하세요'+'<br>기회는 10번 입니다.';
    numberselect(Level);
}


easy.addEventListener('click', () => {
    Level=3;
    levelselect(Level);
});

normal.addEventListener('click', () => {
    Level=4;
    levelselect(Level);
});

hard.addEventListener('click', () => {
    Level=5;
    levelselect(Level);
});

function basiccheck(Level){
    for(let n=0;n<Level;n+=1){
        for(let m=n+1;m<Level;m+=1){
            if(input.value[m]===input.value[n]){
                //console.log(value[m],value[n]);
                info.innerHTML='중복 숫자는 없습니다. 다시 입력하세요<br>';
                return true;
            } 
        }
    }
}
check.addEventListener('click', () => {
    const value = input.value ;
    info.textContent='';
    if (gameend && value.length === Level && !basiccheck(Level)) { 
        if (answer.join('') === value) {
            logs.append('HOMERUN!!', document.createElement('br'));
            gameend = 0;    //THE END
        } else {
            //console.log('다르다');
            let strike = 0;
            let ball = 0;
            for(let aIndex=0; aIndex < Level; aIndex+=1){
                for(let iIndex=0; iIndex < Level; iIndex+=1){
                    if (answer[aIndex]===Number(value[iIndex])){
                        if(aIndex===iIndex){
                            strike +=1;
                        } else {
                            ball +=1;
                        }                 
                    }
                }
            }
            if (strike===0 && ball===0){
                logs.append(`${count}회 : ${input.value}: ${strike} strike ${ball} ball OUT!! `,document.createElement('br'));
                if (count > 9) {            // 중복 삭제방법 생각해보기
                    logs.appendChild(document.createTextNode(`Game Over : ${answer.join('')}`))
                    gameend = 0;    //THE END
                } else {
                    count += 1
                }
            } else {
                logs.append(`${count}회 : ${input.value}: ${strike} strike ${ball} ball`, document.createElement('br'))
                if (count > 9) {             // 중복 삭제방법 생각해보기
                    logs.appendChild(document.createTextNode(`Game Over : ${answer.join('')}`))
                    gameend = 0;    //THE END
                } else {
                    count += 1
                }
            }   
        }
    } else if(Level && value.length !== Level){
        info.textContent=Level+'자릿수를 입력하세요!';
    } else if(!Level){
        info.textContent='난이도를 선택하세요';
    }
});

resetbutton.addEventListener('click', () => {
    Level = null;
    reset();
    numberselect(Level);
    info.textContent='난이도를 선택하세요';
});