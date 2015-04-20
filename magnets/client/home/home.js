Template.home.events({
  'dblclick .schema': function(event, templ){
    event.preventDefault();
    event.stopPropagation();
    if(event.target.className === 'container-fluid schema'){
      var id = Positions.insert({name:'New Table',left:(event.pageX + 200) + 'px', top:(event.pageY) + 'px'});
      Session.set('editing_table',id);
    }
  }
});

Template.home.positions = function(){
  return Positions.find();
};
