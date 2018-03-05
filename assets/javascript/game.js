
// create object which to initiate each character
var obiWan = {
    name: "Obi Wan Kenobi",
    health: 120,
    attack: 8,
    link: "assets/images/obiwan.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

    getCurrentHealth: function() {
        return this.health;
    },

    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

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

    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 8;
            return this.attack;
        }
    },

    getAttached: function(num) {
        this.health = this.health - num;
    }

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

    getCurrentHealth: function() {
        return this.health;
    },

    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

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

    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 5;
            return this.attack;
        }
    },

    getAttached: function(num) {
        this.health = this.health - num;
    },

};

// create object which to initiate each character
var darth = {
    name: "Darth Sidious",
    health: 150,
    attack: 10,
    link: "assets/images/darth.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

    getCurrentHealth: function() {
        return this.health;
    },

    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

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

    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 10;
            return this.attack;
        }
    },

    getAttached: function(num) {
        this.health = this.health - num;
    },

};

// create object which to initiate each character
var maul = {
    name: "Darth Maul",
    health: 180,
    attack: 15,
    link: "assets/images/darth_maul.jpg",
    playerB: false,
    enemyB: false,
    defenderB: false,

    getCurrentHealth: function() {
        return this.health;
    },

    getAttackPower: function() {
        if(this.playerB) {
        return this.attack;
        }
    },

    getCounterPower: function() {
        if(this.defenderB && !this.playerB) {
        return this.attack;
        }
    },

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

    getAssignedID: function() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    },

    increasePower: function() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack + 15;
            return this.attack;
        }
    },

    getAttached: function(num) {
        this.health = this.health - num;
    },

};

const charPool = [obiWan, luke, darth, maul];

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

function enemyImgDisplay() {
    $("."+imgDisplayCharId[2]).remove()
    enemySelected.map(obj => addCharacter(imgDisplayPlaceHolderId[1],obj.name,obj.health,obj.link,obj.getAssignedID(),imgDisplayCharId[2]));
};

function playerImgDisplay() {
    $("."+imgDisplayCharId[0]).remove();
    addCharacter(imgDisplayPlaceHolderId[0],playerSelected.name,playerSelected.health,playerSelected.link,playerSelected.getAssignedID(),imgDisplayCharId[1]);
};

function defenderImgDisplay() {
    $("."+imgDisplayCharId[3]).remove();
    addCharacter(imgDisplayPlaceHolderId[2],defenderSelected.name,defenderSelected.health,defenderSelected.link,defenderSelected.getAssignedID(),imgDisplayCharId[3]);
};

function HealthDisplay() {
    $(".healthtext").text(defenderSelected.getCurrentHealth());
    $(".healthtext").text(playerSelected.getCurrentHealth());
};


// var imgDisplayPlaceHolderId = ["#playerCharacter","#enemyCharacter","#defenderCharacter"];
// var imgDisplayCharId = ["allImg", "playerImg", "enemyImg", "defendImg"];

$(".attackBtn").attr("disabled", true);

// map to initiate the char display 
$(".startBtn").click(function() {
    charPool.map(obj => addCharacter(imgDisplayPlaceHolderId[0],obj.name,obj.health,obj.link,obj.getAssignedID(),imgDisplayCharId[0]));
    $(".startBtn").attr("disabled", true);

    // Easy way to display all the char compared with map fucntion above 
    // $('.allchar').click(function(){
    //     var index = charPool.indexOf(this.id);
    //     console.log("the index is: ", index);
    // }); 

    $(allCharIdList.map(str => "#"+str).join(", ")).click(function(){
        console.log("this id is : ", this)

        var tempCharPool = jQuery.extend(true, [],charPool);

        playerSelected = jQuery.extend(true,[],charPool[allCharIdList.indexOf(this.id)]);

        playerSelected.playerB = true;

        playerImgDisplay();

        tempCharPool.splice(allCharIdList.indexOf(this.id),1);

        enemySelected = jQuery.extend(true,[],tempCharPool);

        enemySelected.map(obj => obj.enemyB = true);

        enemyImgDisplay();

        $("#enemyCharacter").on('click', '.enemyImg', function(){
            defenderSelected = jQuery.extend(true,[],charPool[allCharIdList.indexOf(this.id)]);

            for (i=0; i<enemySelected.length; i++) {
                if(enemySelected[i].getAssignedID() == this.id) {
                    enemySelected.splice(i,1);
                    console.log("This is selected as Enemy: ",enemySelected[i]);
                    break;
                }
            };

            enemyImgDisplay();

            defenderSelected.defenderB = true;
            
            // addCharacter(imgDisplayPlaceHolderId[2],defenderSelected.name,defenderSelected.health,defenderSelected.link,defenderSelected.getAssignedID(),imgDisplayPlaceHolderId[2]);

            defenderImgDisplay();

            $(".attackBtn").attr("disabled", false);

           $(".attackBtn").click(function(){

                if (enemySelected.length >= 0 && defenderSelected) {
                // if (enemySelected.length > 0 && defenderSelected && typeof defendEnemy.getLiveStatus == 'function') {
                    if(playerSelected.getLiveStatus() && defenderSelected.getLiveStatus()) {
                        
                        console.log("playerSelected.health is", playerSelected.getCurrentHealth());
                        console.log("defenderSelected.health is", defenderSelected.getCurrentHealth());
                        console.log("playerSelected.getAttackPower : " , playerSelected.getAttackPower());
                        console.log("defenderSelected.getCounterPower : " , defenderSelected.getCounterPower());
    
                        defenderSelected.getAttached(playerSelected.getAttackPower());
                        playerSelected.increasePower();
                        playerSelected.getAttached(defenderSelected.getCounterPower());
                        HealthDisplay();

                    } else if (!defenderSelected.getLiveStatus()) {
                        $(".attackBtn").attr("disabled", true);
                        defenderSelected = {};
                        defenderImgDisplay();
                    } else if (!playerSelected.getLiveStatus()) {
                        console.log("Player dead");
                    }
                } else {
                    console.log("all done");
                } 
            });
        });

    });

});
