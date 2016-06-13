var amount_of_windows = 0;
function AddWindow(inp){
  amount_of_windows += 1;
  $('<div>',{
      id: amount_of_windows + '_div',
      width: "400px"
    }
  ).appendTo('body');
  $('#' + amount_of_windows + '_div').draggable();
  $('<img>', {
   src: document.getElementById(inp).value,
   id:  amount_of_windows,
   width: "400px",
   frameborder: 0
 }).appendTo('#' + amount_of_windows + '_div');
}
