var team1Total = localStorage.getItem("total_team1");
var team2Total = localStorage.getItem("total_team2");
var scorecard_team1 = localStorage.getItem("scorecard_team1");
var scorecard_team2 = localStorage.getItem("scorecard_team2");

console.log(team1Total);
console.log(team2Total);
console.log(scorecard_team1[3]);
console.log(scorecard_team2);

if (parseInt(team2Total) > parseInt(team1Total)) {
    document.getElementById("mresult").innerHTML = "Match Won by Team 2"
} else {
    document.getElementById("mresult").innerHTML = "Match Won by Team 1"
}