  $(document).ready(function(){
  
    $("#selectable").selectable({
      selected: function(event, ui){
        console.log(ui.selected)
        let button = $(ui.selected).children("button")
        button.prop("disabled", false)
        button.removeClass("ui-button-disabled ui-state-disabled")
      }
    })
    $("#selectable > li > button").button({
      disabled: true,
      classes: {
        "ui-button": "btn btn-primary edit_day"
      }
    }).click(function(event){
      if($(event.currentTarget).hasClass("edit_day")) {
        console.log("EDIT")
      }
      else {
        console.log("SAVE")
      }

      $(event.currentTarget).toggleClass("edit_day save_day")
      $(event.currentTarget).parent().toggleClass("editing")

    })

  })