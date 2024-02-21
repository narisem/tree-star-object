const yourName = 'Jun';
{

    const yourName = 'Nini';
    // console.log(yourName);

}

// console.log(yourName);

//------------------------------------------------------

let userName = 'N';
{

    userName = 'ini';
    // console.log(userName);

}

// console.log(userName);

//------------------------------------------------------


function outerFunction() {
    var outerVariable = 'I am outside!';

    function innerFunction() {
        // console.log(outerVariable);
    }

    return innerFunction;
}

var inner = outerFunction();
inner(); // "I am outside!"

//------------------------------------------------------


const myName = 'Takumi';

{
    const myName = 'Kenji';
    // console.log('제 이름은' + myName + '입니다');
    {
        const myName = 'Siori';
        // console.log('제 이름은' + myName + '입니다');
    }
}

// console.log('제 이름은' + myName + '입니다');

//------------------------------------------------------

const yourAge = 20;
const yourJob = 'student';
let discount;

// yourAge 25살 이하 & 학생인 경우 :30%
// yourAge 25살 이하 & 학생이 아닌 경우 :10%
// yourAge 60살 이상 :20%
// yourAge 니머지 :no discount

if(yourAge <= 25) {
    if(yourJob === 'student'){
        discount = '30%OFF';
    } else {
        discount = '10%OFF';
    }
} else if (yourAge >= 60) {
    discount = '20%OFF';
} else {
    discount = 'no discount';
}

console.log(`You are : ${discount}`);
