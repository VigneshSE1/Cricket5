var scoreThreeOver_team1 = [];
var scoreThreeOver_team2 = [];
var totalScore_team1;
var totalScore_team2;
var play = 1;
var splay = 1;

var wick_count_team1 = 0;
var wick_count_team2 = 0;

function genTeamOneScore() {
  const scoreforball = [1, 2, 3, 4, 6, 0];
  const playerlist = ["player1", "player2", "player3", "player4", "player5"];

  var randomNum = Math.floor(Math.random() * 6);

  if (scoreforball[randomNum] == 0) {
    wick_count_team1++;
  }

  var length = scoreThreeOver_team1.length;

  if (wick_count_team1 < 5) {
    if (length <= 17) {
      document.getElementById("team2").disabled = true;

      scoreThreeOver_team1.push(scoreforball[randomNum]);

      console.log(scoreThreeOver_team1);

      totalScore_team1 = scoreThreeOver_team1.reduce((acc, cv) => {
        return acc + cv;
      }, 0);
      console.log(totalScore_team1);

      document.getElementById("team1score").innerHTML = totalScore_team1;

      if (length < 6) {
        document.getElementById("over1").innerHTML =
          document.getElementById("over1").innerHTML +
          scoreforball[randomNum] +
          " ";
      }
      if (length >= 6 && length < 12) {
        document.getElementById("over2").innerHTML =
          document.getElementById("over2").innerHTML +
          scoreforball[randomNum] +
          " ";
      }
      if (length >= 12 && length < 18) {
        document.getElementById("over3").innerHTML =
          document.getElementById("over3").innerHTML +
          scoreforball[randomNum] +
          " ";
      }

      if (scoreforball[randomNum] == 0) {
        document.getElementById("p" + play).innerHTML =
          document.getElementById("p" + play).innerHTML + "w" + " ";
        play++;
      } else {
        document.getElementById("p" + play).innerHTML =
          document.getElementById("p" + play).innerHTML +
          scoreforball[randomNum] +
          " ";
      }
    } else {
      document.getElementById("team2").disabled = false;
    }
  } else {
    document.getElementById("team1").disabled = true;
    document.getElementById("team2").disabled = false;
  }
}

function genTeamTwoScore() {
  const scoreforball = [1, 2, 3, 4, 6, 0];
  const playerlist = [
    "Splayer1",
    "Splayer2",
    "Splayer3",
    "Splayer4",
    "Splayer5"
  ];

  var randomNum = Math.floor(Math.random() * 6);

  var length = scoreThreeOver_team2.length;
  if (scoreforball[randomNum] == 0) {
    wick_count_team2++;
  }
  if (wick_count_team2 < 5) {
    if (length <= 17) {
      document.getElementById("team1").disabled = true;
      scoreThreeOver_team2.push(scoreforball[randomNum]);

      console.log(scoreThreeOver_team2);

      totalScore_team2 = scoreThreeOver_team2.reduce((acc, cv) => {
        return acc + cv;
      }, 0);
      console.log(totalScore_team2);

      document.getElementById("team2score").innerHTML = totalScore_team2;

      if (length < 6) {
        document.getElementById("sover1").innerHTML =
          document.getElementById("sover1").innerHTML +
          scoreforball[randomNum] +
          " ";
      }
      if (length >= 6 && length < 12) {
        document.getElementById("sover2").innerHTML =
          document.getElementById("sover2").innerHTML +
          scoreforball[randomNum] +
          " ";
      }
      if (length >= 12 && length < 18) {
        document.getElementById("sover3").innerHTML =
          document.getElementById("sover3").innerHTML +
          scoreforball[randomNum] +
          " ";
      }

      if (scoreforball[randomNum] == 0) {
        document.getElementById("sp" + splay).innerHTML =
          document.getElementById("sp" + splay).innerHTML + "w" + " ";
        splay++;
      } else {
        document.getElementById("sp" + splay).innerHTML =
          document.getElementById("sp" + splay).innerHTML +
          scoreforball[randomNum] +
          " ";
      }
    } else {
      document.getElementById("team1").disabled = false;
    }
  } else {
    document.getElementById("team2").disabled = true;
    document.getElementById("team1").disabled = false;
  }
}

function generateResult() {
  localStorage.setItem("scorecard_team1", scoreThreeOver_team1);
  localStorage.setItem("scorecard_team2", scoreThreeOver_team2);
  localStorage.setItem("total_team1", totalScore_team1);
  localStorage.setItem("total_team2", totalScore_team2);

  window.open("file:///D:/cricket/result.html", "_blank");
}
