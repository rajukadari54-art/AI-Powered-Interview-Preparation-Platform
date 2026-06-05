function startInterview(){

    fetch('/question')
    .then(response => response.json())
    .then(data => {

        document.getElementById("questionBox")
        .innerHTML = data.question;
    });
}

function submitAnswer(){

    const answer =
    document.getElementById("answer").value;

    fetch('/submit',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify({
            answer:answer
        })

    })

    .then(response=>response.json())

    .then(data=>{

        document.getElementById("result")
        .innerHTML =
        data.message +
        "<br>Score : " +
        data.score + "%";
    });
}