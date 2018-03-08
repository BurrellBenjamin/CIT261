function forCount() {
    var text = "";
    for (var i = 0; i < 11; i++)
    {
        text += i + "<br>";
    }
    document.getElementById("for").innerHTML = text;
}
function whileParse(){
    var text = "";
    var i = 0;
    var array = ["Bulbasaur","Ivysaur","Venusaur","Mega Venusaur"]
    while(array[i])
    {
        text += array[i] + "<br>";
        i++;
    }
    document.getElementById("while").innerHTML = text;
}
function displayGender(gender){
    if(gender.value == "Boy")
        document.getElementById("Gender").innerHTML = gender.value;
    else
        document.getElementById("Gender").innerHTML = gender.value;            
}
function clearText(input){
    var blank = "";
    switch(input)
        {
            case 1:
                {
                    document.getElementById("for").innerHTML = blank;
                    break;
                }
            case 2:
                {
                    document.getElementById("while").innerHTML = blank;
                    break;
                }
            case 3:
                {
                    document.getElementById("Gender").innerHTML = blank;
                    document.getElementById("boy").checked = false;
                    document.getElementById("girl").checked = false;
                    break;
                }
            case 4:
                {
                    document.getElementById("for").innerHTML = blank;
                    document.getElementById("while").innerHTML = blank;
                    document.getElementById("Gender").innerHTML = blank;
                    document.getElementById("boy").checked = false;
                    document.getElementById("girl").checked = false;
                    break;
                }
        }
}
function MyPokemon(species, nick, type1, type2, ability){
    this.species = species;
    this.nick = nick;
    this.type1 = type1;
    this.type2 = type2;
    this.ability = ability;
    this.display = function() {
        var text = "";
        for (var x in this)
            {
                    if(x != "display")
                        text+= x + ": " + this[x] + "<br>";
            }
        document.getElementById("Pokemon Display").innerHTML = "Here is your Pokemon! <br>" + text;
    };
}
function createPokemon(){
    var myPokemon = new MyPokemon(document.getElementById("Species").value, document.getElementById("Nick").value, document.getElementById("Type1").value, document.getElementById("Type2").value, document.getElementById("Ability").value);
    myPokemon.display();
}
function AttackPokemon(species, nick, type1, type2, ability, attack1, attack2, attack3, attack4){
    MyPokemon.call(this, species, nick, type1, type2, ability);
    
    this.attack1 = attack1;
    this.attack2 = attack2;
    this.attack3 = attack3;
    this.attack4 = attack4;
    this.prototype = Object.create(MyPokemon.prototype);
    this.prototype.constructor = AttackPokemon;
    this.display = function() {
        var text = "";
        text+="Species: "+this.species + "<br>";
        text+="Nickname: "+this.nick + "<br>";
        text+="Type 1: "+this.type1 + "<br>";
        text+="Type 2: "+this.type2 + "<br>";
        text+="Ability: "+this.ability + "<br>";
        text+="<pre>";
        for(var i = 1; i<5; i++)
        {
            var propertyName = "attack"+i;
            if(i%2 == 1)
                text+=" " + this[propertyName] + "      ";
            else
                text+=this[propertyName] + "</pre><pre>";
        }
        text+="</pre>";
        document.getElementById("inheritanceDisplay").innerHTML=text; 
    };
    /*this.displayAttacks = function() {
        var text = "";
        //for(x in this)
        //    {
                //if(x=!"displayAttacks" && x!="attack1" && x!="attack2" && x!="attack3" && x!="attack4")
                    text+=this.prototype.species;
        //    }
        text+="<br><pre>";
        for(var i = 1; i<5; i++)
        {
            var propertyName = "attack"+i;
            if(i%2 == 1)
                text+=" " + this[propertyName] + "      ";
            else
                text+=this[propertyName] + "</pre><pre>";
        }
        text+="</pre>";
        document.getElementById("inheritanceDisplay").innerHTML=text;
    };*/
}
function PokemonInheritance(){
    var myPokemon = new AttackPokemon(document.getElementById("SpeciesI").value, document.getElementById("Nickname").value, document.getElementById("Type 1").value, document.getElementById("Type 2").value, document.getElementById("AbilityI").value, document.getElementById("Attack 1").value, document.getElementById("Attack 2").value, document.getElementById("Attack 3").value, document.getElementById("Attack 4").value);
    myPokemon.display();
    
}