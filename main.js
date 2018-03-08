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
        for (x in this)
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
