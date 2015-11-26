function Dice(){
  var rolls = [0,0,0,0,0,0];
  this.roll = function(){
    var result = Math.ceil(Math.random() * 6);
    rolls[result]++;
  };
  this.stats = function(){
    return rolls;
  };
}
module.exports = Dice;
