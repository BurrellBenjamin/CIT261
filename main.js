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
    
}
MyPokemon.prototype.display = function() {
        var text = "";
        for (var x in this)
            {
                    if(x != "display")
                        text+= x + ": " + this[x] + "<br>";
            }
        document.getElementById("Pokemon Display").innerHTML = "Here is your Pokemon! <br>" + text;
    };
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
}
AttackPokemon.prototype = Object.create(MyPokemon.prototype);
AttackPokemon.prototype.display = function() {
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
function PokemonInheritance(){
    var myPokemon = new AttackPokemon(document.getElementById("SpeciesI").value, document.getElementById("Nickname").value, document.getElementById("Type 1").value, document.getElementById("Type 2").value, document.getElementById("AbilityI").value, document.getElementById("Attack 1").value, document.getElementById("Attack 2").value, document.getElementById("Attack 3").value, document.getElementById("Attack 4").value);
    myPokemon.display();
    
}
function PokeImportable(species, nick, type1, type2, ability, item, nature, hp, atk, def, spatk, spdef, spe, atk1, atk2, atk3, atk4){
    this.species = species;
    this.nick = nick;
    this.type1 = type1;
    this.type2 = type2;
    this.ability = ability;
    this.item = item;
    this.nature = nature;
    this.evs = {HP:hp, Atk:atk, Def:def, SpAtk:spatk, SpDef:spdef, Speed:spe};
    this.moves = {Move1:atk1, Move2:atk2, Move3:atk3, Move4:atk4};
}
function PokeString(){
    var myString = "";
    var myPoke = new PokeImportable(document.getElementById("SpeciesS").value, document.getElementById("NickS").value, document.getElementById("Type1S").value, document.getElementById("Type2S").value, document.getElementById("AbilityS").value, document.getElementById("ItemS").value, document.getElementById("NatureS").value, document.getElementById("HPS").value, document.getElementById("AtkS").value, document.getElementById("DefS").value, document.getElementById("SpAtkS").value, document.getElementById("SpDefS").value, document.getElementById("SpeedS").value, document.getElementById("Attack1S").value, document.getElementById("Attack2S").value, document.getElementById("Attack3S").value, document.getElementById("Attack4S").value);
    myString = JSON.stringify(myPoke);
    document.getElementById("PokeStringOut").innerHTML="<p>The PokeString:</p>" + myString;
    document.getElementById("ParseButton").style.visibility = "visible";
}
function PokeParse(){
    var pokeString = document.getElementById("PokeStringOut").innerHTML;
    pokeString = pokeString.replace(/<div id="PokeStringOut">/i,"");
    pokeString = pokeString.replace(/<p>The PokeString:<\/p>/i,"");
    pokeString = pokeString.replace(/<\/div>/i,"");
    var myPoke = JSON.parse(pokeString);
    var formattedPoke = printFormat(myPoke);
    document.getElementById("PokeParseOut").innerHTML = formattedPoke;
}
function printFormat(myPoke){
    var formattedPoke = "";
    for(x in myPoke){
        if(x != "evs" && x != "moves")
            formattedPoke+= x + ": " + myPoke[x] + "<br>";
        else if(x=="evs"){
            formattedPoke += "evs: <br>";
                for(i in myPoke[x]){
                    formattedPoke+= i + "- " + myPoke[x][i] + "<br>";
            }
        }
        else{
            formattedPoke += "moves: <br>";
                for(i in myPoke[x]){
                    formattedPoke+= i + "- " + myPoke[x][i] + "<br>";
            }
        }
    }
    return formattedPoke;
}
var index =0 ,len;
function readDex(i){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 /*&& this.status == 200*/){
            loadEntry(this, i);
        }
    };
    xmlhttp.open("GET", "pokedex.xml", true);
    xmlhttp.send();
}
function loadEntry(xml, i){
    var pokeXML = xml.responseXML;
    var x = pokeXML.getElementsByTagName("entry");
    len = x.length;
    document.getElementById("pokeDisplay").innerHTML =
        "Species: " + x[i].getElementsByTagName("species")[0].childNodes[0].nodeValue +
        "<br>Typing: " + x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue +
        "<br>Weight: " + x[i].getElementsByTagName("weight")[0].childNodes[0].nodeValue +
        "<br>Height: " + x[i].getElementsByTagName("height")[0].childNodes[0].nodeValue +
        "<br>Description:<br>" + x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
}
function loadDoc(){
    readDex(index);
    document.getElementById("loadbutton").style.visibility = "hidden";
    document.getElementsByClassName("navButtons")[0].style.visibility = "visible";
    document.getElementsByClassName("navButtons")[1].style.visibility = "visible";
}
function previous(){
    if(index>0){
        index--;
    }
    else //index == 0
    {
        index = len -1;
    }
    readDex(index);
}
function next(){
    if (index < len - 1){
            index++;
    }
    else //index == len - 1
    {
        index =0;
    }
    readDex(index);
}