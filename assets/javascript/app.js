$(document).ready(function () {
    // Initializing timer variable.
    var x = 20;
    $("#restart").hide();
    $("#quiz").hide();
    $(".lead").hide();
    const quizContainer = $("#quiz");
    var totalAnswer = 0;
    var i = 0;
    var correctNum = 0, uncorrectNum = 0, unanswerNum = 0;

    const myQuestions = [
        {
            question: "Who is the strongest?",
            answers: {
                a: "Superman",
                b: "The Terminator",
                c: "Waluigi, obviously"
            },
            correctAnswer: "Waluigi, obviously",
            correctAnswerImg: 'assets/images/pink.jpg'
        },
        {
            question: "What is the best site ever created?",
            answers: {
                a: "SitePoint",
                b: "Simple Steps Code",
                // c: "Trick question; they’re both the best"
                c: "Trick question; they are both the best"
            },
            // correctAnswer: "Trick question; they‘re both the best"
            correctAnswer: "Trick question; they are both the best",
            correctAnswerImg: 'assets/images/green.jpg'
        },
        {
            question: "Where is Waldo really?",
            answers: {
                a: "Antarctica",
                b: "Exploring the Pacific Ocean",
                c: "Sitting in a tree",
                d: "Minding his own business, so stop asking"
            },
            correctAnswer: "Minding his own business, so stop asking",
            correctAnswerImg: 'assets/images/pink.jpg'
        },
        {
            question: "What is your name?",
            answers: {
                a: "Jojo",
                b: "huiying",
                c: "Miya",
                d: "Angie"
            },
            correctAnswer: "Jojo",
            correctAnswerImg: 'assets/images/green.jpg'
        },
        {
            question: "Who is your favorite singer?",
            answers: {
                a: "Jay Chou",
                b: "Wang lihong",
                c: "Begum Akhtar",
                d: "K.L Saigal"
            },
            correctAnswer: "Jay Chou",
            correctAnswerImg: 'assets/images/pink.jpg'
        }
    ];
    /**
     * build quiz
    */
    function buildQuiz() {
        $("#results").html("");
        $("#quiz").show();

        $("#question").html(myQuestions[i].question + "<br>");
        $("#answers").html('');
        $.each(myQuestions[i].answers, function (indexInArray, valueOfElement) {
            $("#answers").append("<p value='" + valueOfElement + "'>" + valueOfElement + "</p></b><br>");//if valueOfElement including '?
            // $("#answers p").attr("value", valueOfElement);//if valueOfElement including '?
        });

        /**
        * click event
        */
        $("#answers p").on("click", function () {
            //hide quiz
            $("#quiz").hide();
            i++;

            //showResult
            if ($(this).attr("value") == myQuestions[i - 1].correctAnswer) {
                correctNum++;
                $("#results").html("<h3>Correct</h3>");
            } else {
                uncorrectNum++;
                $("#results").html("<h3>Nope!</h3>");
                $("#results").append("<p>The correct answer was: <b>" + myQuestions[i - 1].correctAnswer + "</b></p>");
            }
            $("#results").append("<img style='width:220px;' src='" + myQuestions[i - 1].correctAnswerImg + "'>");
            if (i == myQuestions.length) {
                setTimeout(showResult, 1000);
                return;
            }
            setTimeout(buildQuiz, 1000);
            //   $("#quiz").show();
        });
        /**css  */
        $("#answers p").hover(function (e) {
            // over
            // $(this).css("background-color","red")
            $(this).css("background-color", e.type === "mouseenter" ? "rgb(189, 196, 91)" : "transparent");
            $(this).css("border", e.type === "mouseenter" ? "2px solid rebeccapurple" : "transparent");
            // $(this).css({"background-color":"yellow","border":"2px solid rebeccapurple"});
        },
            // function () {
            //     // out
            // }
        );
        // setTimeout(showResult, 20000);
    }
    // buildQuiz();
    function showResult() {
        $("#results").html("");
        // $("#quiz").html("");//$("#quiz").hide();?
        $("#quiz").hide();//$("#quiz").hide();?
        unanswerNum = myQuestions.length - uncorrectNum - correctNum;
        $("#showresults").html("All done, heres how you did! <br>");
        $("#showresults").append("Correct Answers:" + correctNum + "<br>");
        $("#showresults").append("Incorrect Answers:" + uncorrectNum + "<br>");
        $("#showresults").append("Unanswers:" + unanswerNum + "<br>");
        $("#restart").show();
    }
    $("#restart").on("click", function () {
        i = 0, correctNum = 0, uncorrectNum = 0, unanswerNum = 0,x=20;
        $("#restart").hide();
        $("#start").hide();
        $("#showresults").html("");
        buildQuiz();
        // setInterval(function () {
        //     if (x <= 21 && x >= 1) {
        //         x--;
        //         // y.innerHTML = '' + x + '';
        //         $("#timer").html(x);
        //         if (x == 1) {
        //             x = 21;
        //         }
        //     }
        // }, 1000);
        setTimeout(showResult, 20000);
    });
    $("#start").on("click", function () {
        i = 0, correctNum = 0, uncorrectNum = 0, unanswerNum = 0,x=20;
        $("#restart").hide();
         $("#start").hide();
        $(".lead").show();
        $("#showresults").html("");
        buildQuiz();
        setTimeout(showResult, 20000);
    });
    // $("#submit").on("click", showResult);


    // Display count down for 20 seconds
    setInterval(function () {
        if (x <= 21 && x >= 1) {
            x--;
            // y.innerHTML = '' + x + '';
            $("#timer").html(x);
            if (x == 1) {
                x = 21;
            }
        }
    }, 1000);
    // Form Submitting after 20 seconds.
    // var auto_refresh = setTimeout(showResult, 20000);

});