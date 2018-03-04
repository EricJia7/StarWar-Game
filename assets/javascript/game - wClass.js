
// create CreateChar which to initiate each character
class CreateChar {
    constructor(name, health, attack, link) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.link = link;
        this.playerB = false;
        this.enemyB = false;
        this.imgIdList = this.name.replace(/\s/g, '').toLowerCase()+"Id";
    }

    get getCurrentHealth() {
        return this.health;
    }

    get getAttackPower() {
        if(this.playerB) {
        return this.attack;
        }
    }

    get getCounterPower() {
        if(this.enemyB && !this.playerB) {
        return this.attack;
        }
    }

    get getLiveStatus() {
        if(this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }

    get getHasBeenSelected() {
        if (this.playerB || this.enemyB) {
            return true;
        } else {
            return false;
        }
    }

    get getAssignedID() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    }

    get increasePower() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack*2;
            return this.attack;
        }
    }

}

const obiWan = new CreateChar("Obi Wan Kenobi", 120, 8, "assets/images/obiwan.jpg");

const luke = new CreateChar("Luke Skywalker", 100, 10, "assets/images/luke.jpg");

const darth = new CreateChar("Darth Sidious",150, 15, "assets/images/darth.jpg");

const maul = new CreateChar("Darth Maul", 180, 25, "assets/images/darth_maul.jpg");

const charPool = [obiWan, luke, darth, maul];

var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");
var imgIdList = charPool.map(obj => obj.getAssignedID);
console.log("image ID list is : " + imgIdList);


var enemyImgIdList = "";

// var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");

var playerSelected = {};
var enemySelected = "";
var defendEnemy = "";
var test = {};


//define the ID tag for images display in html;
var imgDisplayPlaceId = ["#urCharacter","#enemyCharacter","#defenderChar"];

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
                .attr("height","170px")
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



// map to initiate the char display 
$(".startBtn").click(function() {
    charPool.map(obj => addCharacter(imgDisplayPlaceId[0],obj.name,obj.health,obj.link,obj.getAssignedID,imgGpTypeClassId[0]));
    $(".startBtn").attr("disabled", true);

    // Easy way to display all the char compared with map fucntion above 
    // $('.allchar').click(function(){
    //     var index = charPool.indexOf(this.id);
    //     console.log("the index is: ", index);
    // }); 

    $(charId.map(str => "#"+str).join(", ")).click(function(){

        var tempCharPool = jQuery.extend(true, [],charPool);

        playerSelected = jQuery.extend(true,[],charPool[imgIdList.indexOf(this.id)]);

        test = jQuery.extend(true,true,[],charPool[0]);

        console.log("Hello~~~~~~~~~~",playerSelected.getAssignedID);

        playerSelected.playerB = true;

        $("."+imgGpTypeClassId[0]).remove()

        addCharacter(imgDisplayPlaceId[0],playerSelected.name,playerSelected.health,playerSelected.link,"playerImg",imgGpTypeClassId[1]);

        tempCharPool.splice(imgIdList.indexOf(this.id),1);

        enemySelected = jQuery.extend(true,[],tempCharPool);

        enemySelected.map(obj => obj.enemyB = true);

        enemySelected.map(obj => addCharacter(imgDisplayPlaceId[1],obj.name,obj.health,obj.link,obj.getAssignedID,imgGpTypeClassId[2]));

    });

    $(".enemyImg").click(function(){
        defendEnemy = jQuery.extend(true,[],enemySelected[imgIdList.indexOf(this.id)]);
        console.logg("!!!!!",defendEnemy);
    });


} );




// currentPlayer - Object.assign({},obiWan);
