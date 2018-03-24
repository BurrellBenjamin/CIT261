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
            case 5:
                {
                    document.getElementById("teamOut").innerHTML = "You have not created any pokemon.";
                    document.getElementById("Species").value = "";
                    document.getElementById("Nick").value = "";
                    document.getElementById("Type1").value = "";
                    document.getElementById("Type2").value = "";
                    document.getElementById("Item").value = "";
                    document.getElementById("Ability").value = "";
                    document.getElementById("Nature").value = "";
                    document.getElementById("HP").value = "0";
                    document.getElementById("Atk").value = "0";
                    document.getElementById("Def").value = "0";
                    document.getElementById("SpAtk").value = "0";
                    document.getElementById("SpDef").value = "0";
                    document.getElementById("Speed").value = "0";
                    document.getElementById("Attack1").value = "";
                    document.getElementById("Attack2").value = "";
                    document.getElementById("Attack3").value = "";
                    document.getElementById("Attack4").value = "";
                    if (window.localStorage.getItem("team"))
                        window.localStorage.removeItem("team");
                    document.getElementById("saveButton").style.display = "inline";
                    document.getElementById("stringForm").style.display = "inline";
                    if (document.getElementById("error"))
                        document.getElementById("error").style.display = "none";
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
function savePoke(){
    var myPoke = new PokeImportable(document.getElementById("Species").value, document.getElementById("Nick").value, document.getElementById("Type1").value, document.getElementById("Type2").value, document.getElementById("Ability").value, document.getElementById("Item").value, document.getElementById("Nature").value, document.getElementById("HP").value, document.getElementById("Atk").value, document.getElementById("Def").value, document.getElementById("SpAtk").value, document.getElementById("SpDef").value, document.getElementById("Speed").value, document.getElementById("Attack1").value, document.getElementById("Attack2").value, document.getElementById("Attack3").value, document.getElementById("Attack4").value);
    document.getElementById("Species").value = "";
    document.getElementById("Nick").value = "";
    document.getElementById("Type1").value = "";
    document.getElementById("Type2").value = "";
    document.getElementById("Item").value = "";
    document.getElementById("Ability").value = "";
    document.getElementById("Nature").value = "";
    document.getElementById("HP").value = "0";
    document.getElementById("Atk").value = "0";
    document.getElementById("Def").value = "0";
    document.getElementById("SpAtk").value = "0";
    document.getElementById("SpDef").value = "0";
    document.getElementById("Speed").value = "0";
    document.getElementById("Attack1").value = "";
    document.getElementById("Attack2").value = "";
    document.getElementById("Attack3").value = "";
    document.getElementById("Attack4").value = "";
    var team = {"member1":"","member2":"","member3":"","member4":"","member5":"","member6":""};
    if (window.localStorage.getItem("team")){
        team = JSON.parse(window.localStorage.getItem("team"));
        if (team["member1"] == ""){
            team["member1"] = myPoke;
        }
        else if (team["member2"] == ""){
            team["member2"] = myPoke;
        }
        else if (team["member3"] == ""){
            team["member3"] = myPoke;
        }
        else if (team["member4"] == ""){
            team["member4"] = myPoke;
        }
        else if (team["member5"] == ""){
            team["member5"] = myPoke;
        }
        else if (team["member6"] == ""){
            team["member6"] = myPoke;
            document.getElementById("stringForm").style.display = "none";
           document.getElementById("saveButton").style.display = "none";
        }
        else{
            //in case of errors in loading teams
            document.getElementById("stringForm").style.display = "none";
            document.getElementById("saveButton").style.display = "none";
            alert("ERROR: You already have 6 Team members.");
        }
        window.localStorage.setItem("team", JSON.stringify(team));
    }
    else{
        team["member1"] = myPoke;
        window.localStorage.setItem("team", JSON.stringify(team));
    }
    document.getElementById("teamOut").innerHTML = display(team);
}
function loadTeam(){
    if (window.localStorage.getItem("team")){
        var team = JSON.parse(window.localStorage.getItem("team"));
        document.getElementById("teamOut").innerHTML = display(team);
        if(team["member6"] != ""){
            document.getElementById("stringForm").style.display = "none";
            document.getElementById("saveButton").style.display = "none";
        }
    }
    
}
function display(team){
    var text = "You have not created any Pokemon";
    var num;
    var empty = true;
    for(num=1;num<7;num++){
        var index = "member"+num;
        if(team[index] != "")
            empty = false;
    }
    if(!empty){
        text = "Your team:<br>";
        for(num =1;num<7;num++){
            var index = "member"+num;
            if(team[index] != ""){
                text+= "<div id=\"Pokemon" + num + "\">Pokemon "+num + "<pre>";
                for(x in team[index]){    
                    if(x == "evs" || x == "moves"){
                        text+="     "+x+":<br>";
                        for(y in team[index][x]){
                            text+="        "+y+"- "+team[index][x][y]+"<br>";
                        }
                    }
                    else
                        text+= "     " + x +": "+ team[index][x] + "<br>";
                }
                text+="</pre><button type=\"button\" onclick=\"removePoke(" + num + ")\">Remove Pokemon "+num+"</button></div>";
            }
        
        }
    }
    return text;
}
function removePoke(index){
    var team = JSON.parse(window.localStorage.getItem("team"));
    var backIndex =6;
    while(team["member"+backIndex] == "" && backIndex<2){
        backIndex--;
    }
    team["member"+index] = team["member"+backIndex].valueOf();
    team["member6"] = "";
    window.localStorage.setItem("team", JSON.stringify(team));
    document.getElementById("teamOut").innerHTML = display(team);
    document.getElementById("stringForm").style.display = "inline";
    document.getElementById("saveButton").style.display = "inline";
}
function DOMdemo(){
    document.getElementsByClassName("CSSmanip")[0].style.display = "inline";
    document.getElementsByClassName("CSSmanip")[4].style.display = "block";
    document.getElementById("startDemo").style.display = "none";
    var btn = document.createElement("BUTTON");
    var removeBtn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode("Create Element"));
    removeBtn.appendChild(document.createTextNode("Remove Element"));
    btn.addEventListener("click", runDemo);
    removeBtn.addEventListener("click", eraseDivs);
    btn.attributes.type = "BUTTON";
    removeBtn.attributes.type = "BUTTON";
    btn.id = "demoButton";
    removeBtn.id = "removeButton";
    document.body.insertBefore(btn, document.body.childNodes[10]);
    document.body.insertBefore(removeBtn, document.body.childNodes[11]);
}
var eleCount = 0;
function runDemo(){
    var classLabel = "element" + eleCount % 3;
    var newDiv = document.createElement("DIV");
    newDiv.setAttribute("class", classLabel);
    document.getElementsByClassName("CSSmanip")[0].appendChild(newDiv);
    eleCount++;
    if (eleCount == 1){
        document.getElementsByClassName("CSSmanip")[1].style.display = "inline";
    }
    else if (eleCount == 2){
        document.getElementsByClassName("CSSmanip")[2].style.display = "inline";
    }
    else if (eleCount % 3 == 0){
        document.getElementsByClassName("CSSmanip")[3].style.display = "inline";
    }
}
function eraseDivs(){
    
    document.getElementsByClassName("CSSmanip")[0].removeChild(document.getElementsByClassName("CSSmanip")[0].childNodes[18 + eleCount - 1]);
    eleCount--;
    if (eleCount < 1){
        document.getElementsByClassName("CSSmanip")[1].style.display = "none";
        eleCount = 0;
    }
    else if (eleCount < 2){
        document.getElementsByClassName("CSSmanip")[2].style.display = "none";
    }
    else if (eleCount < 3){
        document.getElementsByClassName("CSSmanip")[3].style.display = "none";
    }
}
var zeroElements=0;
var oneElements=0;
var twoElements=0;
function CSStransition(){
    if (document.getElementsByClassName("element0")[zeroElements].style.backgroundColor == "aqua"){
        document.getElementsByClassName("element0")[zeroElements].style.backgroundColor = "red";
    }
    else if( document.getElementsByClassName("element0")[zeroElements].style.backgroundColor == "red"){
        document.getElementsByClassName("element0")[zeroElements].style.backgroundColor = "aqua";
    }
    else{
        document.getElementsByClassName("element0")[zeroElements].style.backgroundColor = "red"
    }
    zeroElements++;
    zeroElements = zeroElements % document.getElementsByClassName("element0").length;
}
function CSStransform(){
    if (oneElements % 2 == 0){
        document.getElementsByClassName("element1")[oneElements / 2].style.transform = "translateX(200px)";
    }
    else{
        document.getElementsByClassName("element1")[Math.floor(oneElements / 2)].style.transform = "translateX(0px)";
    }
    oneElements++;
    oneElements = oneElements % (document.getElementsByClassName("element1").length * 2);
}
function CSSanimate(){
    
    if(document.getElementsByClassName("element2")[twoElements].style.animation == "inverseexample 4s 0s 1 normal forwards"){
        document.getElementsByClassName("element2")[twoElements].style.animation = "example 4s 0s 1 normal forwards";
    }
    else if (document.getElementsByClassName("element2")[twoElements].style.animation == "example 4s 0s 1 normal forwards"){
        document.getElementsByClassName("element2")[twoElements].style.animation = "inverseexample 4s 0s 1 normal forwards";
    }
    else 
        document.getElementsByClassName("element2")[twoElements].style.animation = "example 4s 0s 1 normal forwards";
    twoElements++;
    twoElements = twoElements % document.getElementsByClassName("element2").length;
}