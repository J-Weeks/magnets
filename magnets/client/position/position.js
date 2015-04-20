Template.position.onRendered(function () {
  $('.modal').draggable({
    handle:'.modal-header',
    stop: function(evt,ui){
      var left = ui.position.left;
      var top = ui.position.top;
      Positions.update($(this).attr('id'),{$set:{left:left + 'px',top:top + 'px'}});
    }
  });
});
