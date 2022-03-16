player_1_name = localStorage.getItem("player1_name");
console.log(player_1_name);

player_2_name = localStorage.getItem("player2_name");
console.log(player_2_name);

player_1_score = 0;
console.log(player_1_score);

player_2_score = 0;
console.log(player_2_score);

question_turn = "player_1";
answer_turn = "player_2";




document.getElementById("p1_name").innerHTML = player_1_name;

document.getElementById("p1_score").innerHTML = player_1_score;

document.getElementById("p2_name").innerHTML = player_2_name;
document.getElementById("p2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " +  player_2_name;

function word(){

    get_word = document.getElementById("word_question").value;
    word = get_word.toLowerCase();
    //e.g.  titan - length is 5
    // first letter - t
    char_1 = word.charAt(1);

    // middle one - i
    half_length = Math.floor(word.length / 2); // 2.5 -- 2
    char_mid = word.charAt(half_length);

    //second last position - a
    
    char_last = word.charAt(word.length - 1); // 5-1 = 4

    remove_char_1 = word.replace(char_1, "_");
    remove_char_mid = remove_char_1.replace(char_mid, "_");
    question_word = remove_char_mid.replace(char_last, "_");


    question = "<h4>  Q. &nbsp; <span> "+ question_word +" </span> </h4>";

    answer_box  = "<br> <br> Answer :  <input  type = 'text' id = 'input_answer'>"; 

    check_button = "<br>  <br><button class = 'btn btn-info' onclick = 'check()'> CHECK </button> ";


    question_box = question + answer_box + check_button;
    document.getElementById("output").innerHTML = question_box;
    document.getElementById("word_question").value = "";

}

function check(){
    get_answer = document.getElementById("input_answer").value;
    answer = get_answer.toLowerCase();
    if(answer == word){
        if (answer_turn = "player_1"){

            player_1_score = player_1_score + 1;
            document.getElementById("p1_score").innerHTML = player_1_score;
        }else{
            player_2_score = player_2_score + 1;
            document.getElementById("p2_score").innerHTML = player_2_score;
        }

    }

    if(answer_turn == "player_1"){

        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " +  player_2_name;
    }else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " +  player_1_name;
    }

    if(question_turn == "player_2"){

        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " +  player_1_name;
    }else{
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " +  player_2_name;
    }
    document.getElementById("output").innerHTML = "";

}