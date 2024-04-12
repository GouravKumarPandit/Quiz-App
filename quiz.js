let question = [
    {
        '1':'1) HTML stands for -',
        'a' : 'HighText Machine Language',
        'b' : 'HyperText and links Markup Language',
        'c' : 'HyperText Markup Language',
        'd' : 'None of these',
        'answer' : 'c',
    },
    {
        '2' : '2) The correct sequence of HTML tags for starting a webpage is -',
        'a' : 'Head, Title, HTML, body',
        'b' : 'HTML, Body, Title, Head',
        'c' : 'HTML, Head, Title, Body',
        'd' : 'HTML, Head, Title, Body',
        'answer' : 'd',

    },
    {
        '3' : '3) Which of the following element is responsible for making the text bold in HTML?',
        'a' : '<pre>',
        'b' : '<a>',
        'c' : '<b>',
        'd' : '<br>',
        'answer' : 'c',
    }
];

let index = 0;
let right = 0;
let wrong = 0;
let left = 0;
let prev = index;
let next = index;
let total = question.length;

let newQuestion = () => {
    document.getElementById('queTion').innerText = question[index][index+1].concat(`${index+1}/${total}`);
    let option = document.querySelectorAll('label');
    option[0].innerText = question[index]["a"];
    option[1].innerText = question[index]["b"];
    option[2].innerText = question[index]["c"];
    option[3].innerText = question[index]["d"];
    // if(index === 0){
    //     // prevBtn.setAttribute('disabled',false);
    // }
    // else 
    if(index === total-1){
        nextBtn.setAttribute('disabled',false);
    }
    else{
        // prevBtn.removeAttribute('disabled',false);
        nextBtn.removeAttribute('disabled',false);
    }
}

// let prevBtn = document.getElementById("prev");
// prevBtn.addEventListener('click',() => {
//     index--;
//     if(index < total){
//         newQuestion();
//     }
//     checkAnsPrev();
// });

let nextBtn = document.getElementById("next");
nextBtn.addEventListener('click',() => {
    let answer = checkAns();
    if(answer === question[index]['answer']){
        right++;
        question[index]["check"] = 1;
    }
    else if(answer === undefined){
        left++;
    } 
    else{
        wrong++;
        question[index]["check"] = 1;
    }

    index++;
    if(index < total){
        newQuestion();
    }
});

let submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', () => {
    for(let i = index; i<total; i++){
        let answer = checkAns();
        if(answer === question[index]['answer']){
            right++;
        }
        else if(answer === undefined){
            left++;
        } 
        else{
            wrong++;
        }
    }

    let totalScore = document.getElementById('quiz');
    totalScore.innerHTML = `<h1 style="text-align:center">Your Score</h1>  <br> <h2>Total Question = ${total}</h2> <br> <h2 style="color:green">Right = ${right}</h2> <br> <h2 style="color:red">Wrong = ${wrong}</h2> <br> <h2 style="color:white">Left Question = ${left}</h2>`;
});

let checkAns = () => {
    let options = document.querySelectorAll('input');
    let ans;
    for(let option of options){
        if(option.checked){
            ans = option.value;
            option.checked = false;
            break;
        }
    }
    return ans;
};
// let checkAnsPrev = () => {
//     let options = document.querySelectorAll('input');
//     let ans1;
//     console.log(options);
//     if(question[index]["check"] == 0){
//         for(let option of options){
//             option.checked = false;
//         }
//     }
// };

let btnRef = document.getElementById('btnRef');
btnRef.addEventListener('click',()=>{
    location.reload();
});
newQuestion();
