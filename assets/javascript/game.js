
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

// var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");
var imgIdList = charPool.map(obj => obj.getAssignedID());
console.log("image ID list is : " + imgIdList);

var enemyImgIdList = "";

// var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");

var playerSelected = {};
var enemySelected = {};
var defendEnemy = {};

//define the ID tag for images display in html;
var imgDisplayPlaceId = ["#urCharacter","#enemyCharacter","#defenderCharacter"];

var imgGpTypeClassId = ["allImg", "playerImg", "enemyImg", "defendImg"];

function addCharacter(addId,charname,charhealth,charlink,charid,imgGpType) {

    var newColumn = $("<div>")
        .addClass("col-md-2 border border-success " + imgGpType)
        .css("z-index", "1")
        .attr("id", charid)
    console.log("id assigned is : " + charid);

    // var nameID = name.replace(/\s/g, '').toLowerCase()+"Id";
    // newColumn.attr("id",nameID)
    // console.log("ID created for each Char is : " + nameID);

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
                .addClass("img-rounded ")
                .attr("height","130px")
            )
        )
    )
    // console.log("the img URL link is: " + charlink);

    newColumn.append($("<row>")
                .append($("<div>")
                    .addClass("col-md-12 text-center font-weight-bold")
                    .attr("font-size","2em")
                    .text(charhealth)
                )
    )
    $(addId).append(newColumn);
};

// for loop to initiate the char display 
// $(".startBtn").click(function (){
//     for (i=0; i< charPool.length; i++) {
//         addCharacter(charPool[i].name, charPool[i].health, charPool[i].link)
//     }
//     $(".startBtn").attr("disabled", true);
// });

function enemyImgDisply() {
    $("."+imgGpTypeClassId[2]).remove()
    enemySelected.map(obj => addCharacter(imgDisplayPlaceId[1],obj.name,obj.health,obj.link,obj.getAssignedID(),imgGpTypeClassId[2]));
};

function playerImgDisplay() {
    $("."+imgGpTypeClassId[0]).remove();
    addCharacter(imgDisplayPlaceId[0],playerSelected.name,playerSelected.health,playerSelected.link,playerSelected.getAssignedID(),imgGpTypeClassId[1]);
};

// map to initiate the char display 
$(".startBtn").click(function() {
    charPool.map(obj => addCharacter(imgDisplayPlaceId[0],obj.name,obj.health,obj.link,obj.getAssignedID(),imgGpTypeClassId[0]));
    $(".startBtn").attr("disabled", true);

    // Easy way to display all the char compared with map fucntion above 
    // $('.allchar').click(function(){
    //     var index = charPool.indexOf(this.id);
    //     console.log("the index is: ", index);
    // }); 

    $(imgIdList.map(str => "#"+str).join(", ")).click(function(){
        console.log("this id is : ", this)

        var tempCharPool = jQuery.extend(true, [],charPool);

        playerSelected = jQuery.extend(true,[],charPool[imgIdList.indexOf(this.id)]);

        playerSelected.playerB = true;

        playerImgDisplay();

        tempCharPool.splice(imgIdList.indexOf(this.id),1);

        enemySelected = jQuery.extend(true,[],tempCharPool);

        enemySelected.map(obj => obj.enemyB = true);

        // enemySelected.map(obj => addCharacter(imgDisplayPlaceId[1],obj.name,obj.health,obj.link,obj.getAssignedID(),imgGpTypeClassId[2]));

        enemyImgDisply();

        $("#enemyCharacter").on('click', '.enemyImg', function(){
            defendEnemy = jQuery.extend(true,[],charPool[imgIdList.indexOf(this.id)]);

            for (i=0; i<enemySelected.length; i++) {
                if(enemySelected[i].getAssignedID() == this.id) {
                    enemySelected.splice(i,1);
                    console.log("This is selected as Enemy: ",enemySelected[i]);
                    break;
                }
            };

            enemyImgDisply();

            defendEnemy.defenderB = true;
            addCharacter(imgDisplayPlaceId[2],defendEnemy.name,defendEnemy.health,defendEnemy.link,defendEnemy.getAssignedID(),imgDisplayPlaceId[2]);

           $(".attackBtn").click(function(){

                if (enemySelected.length >0 && defendEnemy && typeof defendEnemy.getLiveStatus == 'function') {
                    if(playerSelected.getLiveStatus()) {

                        console.log("playerSelected.getLiveStatus is", playerSelected.getLiveStatus());
                        console.log("playerSelected.getAttackPower : " , playerSelected.getAttackPower());
                        console.log("defendEnemy.getCounterPower : " , defendEnemy.getCounterPower());
    
                        defendEnemy.getAttached(playerSelected.getAttackPower());
                        playerSelected.increasePower();
                        playerSelected.getAttached(defendEnemy.getCounterPower());
                    };
                } else {
                    defendEnemy = {};
                    console.log("Enemy died")

                };

            });
        });

    });

});
