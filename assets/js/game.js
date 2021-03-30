// "WIN" - Player robot has defeated all enemy robots
//      * Fight al enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less



var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

      // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
        }
    }

      // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

      // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');

        // award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

      // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

      // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
    }
};

// fucntion to start game

var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
  for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      // let player know what round they are in
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

      // pick new enemy to fight based on the index of enemyNames array
      var pickedEnemyName = enemyNames[i];

      // reset enemyHealth before starting new fight
      enemyHealth = 50;

      //use debugger to pause script from running and check what's going on in the code
      // debugger;

      // pass pickedEnemyName value into fight function where it will assume the value of enemyName parameter
      fight(pickedEnemyName);

    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(pickedEnemyName);

  endGame();
};
var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job, you survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You have lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}


startGame();



