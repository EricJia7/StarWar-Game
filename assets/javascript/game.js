// create object which to initiate each character
var obiWan = {
    name: "Obi Wan Kenobi",
    health: 120,
    attack: 8,
    link: "assets/images/obiwan.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

    //get this character's health 
    getCurrentHealth: function() {
        return this.health;
    },

    //get the attack power if the character is the player
    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    //get the attack power if the character is the defender
    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

    //check if the character is live or dead
    getLiveStatus: function() {
        if(this.health <= 0) {
            return false;
        } else {
            return true;
        }
    },

    getHasBeenSelected: function() {
        if (this.playerB || this.enemyB) {
            return true;
        } else {
            return false;
        }
    },

    //Assign id for the html column to control display or remove 
    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    //If it is player, increse the attack power each time the player attack the defender
    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 8;
            return this.attack;
        }
    },

    //Once player is hit by defender, lose health points
    getAttached: function(num) {
        this.health = this.health - num;
    },

    //Once player win, lose or draw, reset the game
    getReset: function() {
        this.health = 120;
        this.attack = 8;
        this.playerB = false;
        this.enemyB = false;
        this.defenderB = false;
    },

};

// create object which to initiate each character
var luke = {
    name: "Luke Skywalker",
    health: 100,
    attack: 5,
    link: "assets/images/luke.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

        //get this character's health 
    getCurrentHealth: function() {
        return this.health;
    },

    //get the attack power if the character is the player
    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    //get the attack power if the character is the defender
    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

    //check if the character is live or dead
    getLiveStatus: function() {
        if(this.health <= 0) {
            return false;
        } else {
            return true;
        }
    },

    getHasBeenSelected: function() {
        if (this.playerB || this.enemyB) {
            return true;
        } else {
            return false;
        }
    },

    //Assign id for the html column to control display or remove 
    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    //If it is player, increse the attack power each time the player attack the defender
    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 8;
            return this.attack;
        }
    },

    //Once player is hit by defender, lose health points
    getAttached: function(num) {
        this.health = this.health - num;
    },

    //Once player win, lose or draw, reset the game
    getReset: function() {
        this.health = 100;
        this.attack = 5;
        this.playerB = false;
        this.enemyB = false;
        this.defenderB = false;
    },

};

// create object which to initiate each character
var darth = {
    name: "Darth Sidious",
    health: 150,
    attack: 20,
    link: "assets/images/darth.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

    //get this character's health 
    getCurrentHealth: function() {
        return this.health;
    },

    //get the attack power if the character is the player
    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    //get the attack power if the character is the defender
    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

    //check if the character is live or dead
    getLiveStatus: function() {
        if(this.health <= 0) {
            return false;
        } else {
            return true;
        }
    },

    getHasBeenSelected: function() {
        if (this.playerB || this.enemyB) {
            return true;
        } else {
            return false;
        }
    },

    //Assign id for the html column to control display or remove 
    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    //If it is player, increse the attack power each time the player attack the defender
    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 8;
            return this.attack;
        }
    },

    //Once player is hit by defender, lose health points
    getAttached: function(num) {
        this.health = this.health - num;
    },

    //Once player win, lose or draw, reset the game
    getReset: function() {
        this.health = 150;
        this.attack = 15;
        this.playerB = false;
        this.enemyB = false;
        this.defenderB = false;
    },

};

// create object which to initiate each character
var maul = {
    name: "Darth Maul",
    health: 180,
    attack: 25,
    link: "assets/images/darth_maul.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

    //get this character's health 
    getCurrentHealth: function() {
        return this.health;
    },

    //get the attack power if the character is the player
    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    //get the attack power if the character is the defender
    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

    //check if the character is live or dead
    getLiveStatus: function() {
        if(this.health <= 0) {
            return false;
        } else {
            return true;
        }
    },

    getHasBeenSelected: function() {
        if (this.playerB || this.enemyB) {
            return true;
        } else {
            return false;
        }
    },

    //Assign id for the html column to control display or remove 
    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    //If it is player, increse the attack power each time the player attack the defender
    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 8;
            return this.attack;
        }
    },

    //Once player is hit by defender, lose health points
    getAttached: function(num) {
        this.health = this.health - num;
    },

    //Once player win, lose or draw, reset the game
    getReset: function() {
        this.health = 180;
        this.attack = 20;
        this.playerB = false;
        this.enemyB = false;
        this.defenderB = false;
    },
};

// create the list of all characters. 
const charPool = [obiWan, luke, darth, maul];

// get the list of ids for all the characters. 
var allCharIdList = charPool.map(obj => obj.getAssignedID());

console.log("image ID list is : " + allCharIdList);

var enemyImgIdList = "";

// var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");

var playerSelected = {};
var enemySelected = {};
var defenderSelected = {};


// create character name,img,health jumbotron image display html
//divAppendId: it is to find where to add as child of the <div>
//charname: character name assigned
//charhealth: character health assigned
//charlink: character image link
//charid: give an id to each individual character based on the object.getAssignedID
//imgGpType: base on nature of the character after player make the selection, assign each character a class based on the their types: all, player, enemy, defender

// add the characters to the webpage base on the id tag of the html
function addCharacter(divAppendId,charname,charhealth,charlink,charid,imgGpType) {

    var newColumn = $("<div>")
        .addClass("col-md-2 border border-success " + imgGpType)
        .css("z-index", "1")
        .attr("id", charid)
    console.log("id assigned is : " + charid);
    
    newColumn.append($("<row>")
                .append($("<div>")
                    .addClass("col-md-12 text-center font-weight-bold")
                    .text(charname)
                )
    )

    newColumn.append($("<row>")
        .append($("<div>")
            .addClass("col-md-12 text-center")
            .append($("<img>")
                .attr("src",charlink)
                .addClass("img-rounded")
                .attr("height","130px")
            )
        )
    )

    newColumn.append($("<row>")
                .append($("<div>")
                    .addClass("col-md-12 text-center font-weight-bold healthtext")
                    .attr("font-size","2em")
                    .text(charhealth)
                )
    )

    $(divAppendId).append(newColumn);

};

// for loop to initiate the char display 
// $(".startBtn").click(function (){
//     for (i=0; i< charPool.length; i++) {
//         addCharacter(charPool[i].name, charPool[i].health, charPool[i].link)
//     }
//     $(".startBtn").attr("disabled", true);
// });

//define the images display ID tag for image group placeholder and individual char image in html;
var imgDisplayPlaceHolderId = ["#playerCharacter","#enemyCharacter","#defenderCharacter"];
var imgDisplayCharId = ["allImg", "playerImg", "enemyImg", "defendImg"];

var noEnemyDisplayBoolean = false;

//Display all characters at the #PlayerCharacter div
function allCharDisplay() {
    $("."+imgDisplayCharId[0]).remove();
    charPool.map(obj => addCharacter(imgDisplayPlaceHolderId[0],obj.name,obj.health,obj.link,obj.getAssignedID(),imgDisplayCharId[0]));
};

//reset the HTML webpage
function resetAllDisplay() {
    
    charPool.map(obj => obj.getReset());
    imgDisplayCharId.map(id => $("."+id).remove());
    playerSelected = {};
    enemySelected = {};
    defenderSelected = {};

};

//Display selected Player at the #PlayerCharacter div and remove all others
function playerImgDisplay() {
    $("."+imgDisplayCharId[0]).remove();
    addCharacter(imgDisplayPlaceHolderId[0],playerSelected.name,playerSelected.health,playerSelected.link,playerSelected.getAssignedID(),imgDisplayCharId[1]);
};

//Display all other Enemies at the #enemyCharacter div and remove all others
function enemyImgDisplay() {
    $("."+imgDisplayCharId[2]).remove()
    enemySelected.map(obj => addCharacter(imgDisplayPlaceHolderId[1],obj.name,obj.health,obj.link,obj.getAssignedID(),imgDisplayCharId[2]));
};

//Display selected Defender at the #defenderCharacter div and remove all others
function defenderImgDisplay() {
    $("."+imgDisplayCharId[3]).remove();
    if(typeof defenderSelected.getLiveStatus === "function") {
        addCharacter(imgDisplayPlaceHolderId[2],defenderSelected.name,defenderSelected.health,defenderSelected.link,defenderSelected.getAssignedID(),imgDisplayCharId[3]);
    }
};

//update Health value for both Player and Defender after each attack
function HealthDisplay() {
    $(".playerImg .healthtext").text(playerSelected.getCurrentHealth());
    $(".defendImg .healthtext").text(defenderSelected.getCurrentHealth());
};

//reset the result text display area. 
function resultResetDisplay() {
    $("p.resultDisplay").empty();
}

function noEnemyDisplay() {
    $("p.resultDisplay").html ('<p> There is no defender, click enemy above to select defender!</p>')
};

// display how many points the player has attacked the defender and vice versa. 
function attackDisplay() {
    $("p.resultDisplay").html ('<p> You attacked ' + defenderSelected.name + ' for ' + playerSelected.getAttackPower() + ' damages </p>');
    if (defenderSelected.getLiveStatus()) {
        $("p.resultDisplay").append ('<p>' + defenderSelected.name + ' attacked you for ' + defenderSelected.getCounterPower() + ' damages </p>')
    };
};

// base on the end result, show if the player win or lose the game
function winlosedrawDisplay(defender, player) {

    if (!defender && player && enemySelected.length != 0) {
        $("p.resultDisplay").html ('<p> You have defeated  ' +defenderSelected.name + ', you can choose to fight another enemy </p>')
        $(".attackBtn").unbind("click");
    };

    if (!defender && player && enemySelected.length == 0) {
        $("p.resultDisplay").html ('<p> You WON, GAME OVER!!!!</p>')
        $(".startBtn").attr("disabled", false);
    };


    if (defender && !player) {
        $("p.resultDisplay").html ('<p> You have been defeated..... GAME OVER </p>');
        $(".startBtn").attr("disabled", false);
    };

    if (!defender && !player) {
        $("p.resultDisplay").html ('<p> You and Enemy defeated each other, this is a draw.... GAME OVER!!! </p>');
        $(".startBtn").attr("disabled", false);
    };
};


// var imgDisplayPlaceHolderId = ["#playerCharacter","#enemyCharacter","#defenderCharacter"];
// var imgDisplayCharId = ["allImg", "playerImg", "enemyImg", "defendImg"];

// map to initiate the char display 
$(".startBtn").click(function() {

    console.log("~~~~~~~~~~~~~~~~~~~~startbtn function called");
    $(".startBtn").attr("disabled", true);

    resetAllDisplay();
    allCharDisplay();
    resultResetDisplay();

    // $(".startBtn").attr("disabled", true);

    // Easy way to display all the char compared with map fucntion above 
    // $('.allchar').click(function(){
    //     var index = charPool.indexOf(this.id);
    //     console.log("the index is: ", index);
    // }); 

    //select which character will be the player
    $(allCharIdList.map(str => "#"+str).join(", ")).click(function(){

        console.log("~~~~~~~~~~~~~~~~~~~~startbtn +1  function called");

        console.log("this id is : ", this.id)

        var tempCharPool = jQuery.extend(true, [],charPool);

        playerSelected = jQuery.extend(true,[],charPool[allCharIdList.indexOf(this.id)]);

        playerSelected.playerB = true;

        playerImgDisplay();

        tempCharPool.splice(allCharIdList.indexOf(this.id),1);

        enemySelected = jQuery.extend(true,[],tempCharPool);

        enemySelected.map(obj => obj.enemyB = true);

        enemyImgDisplay();

        //select which enemy will be the defender
        $("#enemyCharacter").on('click', '.enemyImg', function(){

            console.log("~~~~~~~~~~~~~~~~~~~~startbtn +2  function called");

            defenderSelected = jQuery.extend(true,[],charPool[allCharIdList.indexOf(this.id)]);

            for (i=0; i<enemySelected.length; i++) {
                if(enemySelected[i].getAssignedID() == this.id) {
                    console.log("This is selected as Defender: ",enemySelected[i]);
                    enemySelected.splice(i,1);
                    break;
                }
            };

            enemyImgDisplay();

            defenderSelected.defenderB = true;
            
            defenderImgDisplay();

            $(".attackBtn").attr("disabled", false);

            resultResetDisplay();

            console.log("current Player:", playerSelected);
            console.log("current defender:", defenderSelected);

            // click to let Player attack the Defender. 
            $(".attackBtn").click(function(){

                resultResetDisplay();

                console.log("~~~~~~~~~~~~~~~~~~~~startbtn +3  function called");

                console.log("~~~~~~~~~~~~~~~~~~~~startbtn +4  function called");

                if(playerSelected.getLiveStatus() && typeof defenderSelected.getLiveStatus == "function") {
                           
                    defenderSelected.getAttached(playerSelected.getAttackPower());

                    if (defenderSelected.getLiveStatus()) {
                        playerSelected.getAttached(defenderSelected.getCounterPower());
                        attackDisplay()
                        playerSelected.increasePower();
                    };

                    HealthDisplay();

                    console.log("playerSelected.getCurrentHealth : " , playerSelected.getCurrentHealth());
                    console.log("defenderSelected.getCurrentHealth :" , defenderSelected.getCurrentHealth());
                    console.log("playerSelected.getAttackPower : " , playerSelected.getAttackPower());
                    console.log("defenderSelected.getCounterPower :" , defenderSelected.getCounterPower());

                    winlosedrawDisplay(defenderSelected.getLiveStatus(), playerSelected.getLiveStatus());

                    
                    if ((!defenderSelected.getLiveStatus()) && playerSelected.getLiveStatus()) {
                        console.log("defender.health : " , defenderSelected.getCurrentHealth());
                        $(".attackBtn").unbind("click");
                        defenderSelected = {};
                        defenderImgDisplay();
                        noEnemyDisplayBoolean = true;
                    }

                    else if (defenderSelected.getLiveStatus() && !playerSelected.getLiveStatus()) {
                        console.log("Player dead");
                        $(".attackBtn").unbind("click");
                    }
                        
                    else if (!defenderSelected.getLiveStatus() && !playerSelected.getLiveStatus()) {
                        console.log ("Draw");
                        $(".attackBtn").unbind("click");
                    };

                };

                if (enemySelected.length === 0 && (typeof defenderSelected.getLiveStatus === "undefined" || typeof defenderSelected.getLiveStatus === "function")) {
                    $("#enemyCharacter").unbind("click");
                }; 

                if (!playerSelected.getLiveStatus()) {
                    $("#enemyCharacter").unbind("click");
                };
            });
        });

    });

});
