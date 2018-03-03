
// create CreateChar which to initiate each character
class CreateChar {
    constructor(name, health, attack, link, playerB, enemyB) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.playerB = false;
        this.enemyB = false;
        this.link = link;
    }

    get currentHealth() {
        return this.health;
    }

    get attackPower() {
        if(this.playerB) {
        return this.attack;
        }
    }

    get counterPower() {
        if(this.enemyB && !this.playerB) {
        return this.attack;
        }
    }

    get liveStatus() {
        if(this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }

    get assignID() {
        return this.name.replace(/\s/g, '').toLowerCase()+"Id";
    }

    increasePower() {
        if (this.playerB && !this.enemyB) {
            this.attack = this.attack*2;
            return this.attack;
        }
    }

    setAsPlayer() {
        this.playerB = true;
        this.enemyB = false;
    }

    setAsEnemy() {
        this.playerB = false;
        this.enemyB = true;
    }

    damge(num) {
        return this.health - num;
    }
}

const obiWan = new CreateChar("Obi Wan Kenobi", "120", "8", "assets/images/obiwan.jpg");

const luke = new CreateChar("Luke Skywalker", "100", "10", "assets/images/luke.jpg");

const darth = new CreateChar("Darth Sidious","150","15", "assets/images/darth.jpg");

const maul = new CreateChar("Darth Maul", "180", "25", "assets/images/darth_maul.jpg");

var charPool = [obiWan, luke, darth, maul];

// var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");

const currentPlayer = {};

const currentEnemy = {};

// currentPlayer - Object.assign({},obiWan);

function addCharacter(charname,charhealth,charlink,charid) {

    var newColumn = $("<div>");
    newColumn.addClass("col-md-2 border border-success")
    newColumn.css("z-index", "1")
    newColumn.attr("id", charid)

    console.log("name is : " + charid);

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
                .attr("height","150px")
            )
        )
    )
    console.log("the img URL link is: " + charlink);

    newColumn.append($("<row>")
                .append($("<div>")
                    .addClass("col-md-12 text-center font-weight-bold")
                    .attr("font-size","2em")
                    .text(charhealth)
                )
    )
    $("#urCharacter").append(newColumn);
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
    charPool.map(obj => addCharacter(obj.name,obj.health,obj.link,obj.assignID));
    $(".startBtn").attr("disabled", true);
} );
// var charId = charPool.map(obj => obj.name.replace(/\s/g, '').toLowerCase()+"Id");


