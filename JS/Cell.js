
var evoDict = {
     "100":{points:50,image:'Tiny.png'},
     "300":{points:50,image:'Crit.png'},
     "700":{points:50},
     "1000":{points:50},
     }

function Cell(t,img,stats){
  this.type = t;
  this.id = GenerateRandomId();
  this.image = img;
  this.stats = stats;
  this.lv = 0;
  this.evoPoints = 0;

     this.getType = function(){return this.type}
     this.setType = function(s){ this.type = s}
     this.getLv = function(){return this.lv}
     this.setLv = function(s){ this.lv = s}
     this.increaseLv = function(){ this.lv++}
     this.getEvo = function(){return this.evo}
     this.setEvo = function(s){ this.evo = s}
     
     this.evolution = function(a){
      if(this.evoPoints > evoDict[a]){
        for(var i = 0; i < this.stats.length;i++){
          this.stats[i] += 2;
        }
          this.lv += 1;
          this.img = evoDict[a].image;
      }else{
          console.log(evoDict[a].points - this.evoPoints + 'Points are needed for this level')
      }
  }
     idDictionary[id].creature = this;
     
     return {  type:this.type,
               id:this.id,
               stats:this.stats,
               lv:this.lv,
               evo:this.evoPoints,
               img:this.image
             };
}

function GenerateRandomId(){
     var id = "";
     for(var i = 0; i < 8;i++){
          var ran = Math.round(Math.random(0) * 9);
          id += ran;
     }
    if(idDictionary[id] !== undefined){
     if(idDictionary[id].id === id){
       GenerateRandomId();
     }
       idDictionary[id] = {id:id, creature:{}};
     return id;
}
  
  
  var idDictionary = {
      "03245634":{id:"03245634",creature:""}
  }
