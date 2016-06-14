var amount_of_windows = 0;
function AddWindow(inp){
  amount_of_windows += 1;
  $('<div>',{
      id: amount_of_windows + '_div',
      width: "400px"
    }
  ).appendTo('body');
  div = $('#' + amount_of_windows + '_div')
  div.draggable();
  plusButton = $('<button>',{
    html: '+'
  });
  plusButton.appendTo(div);
  minusButton = $('<button>',{
    html: '-'
  });
  minusButton.appendTo(div);

  plusButton.click(function(){
    ns = parseInt(div[0].style.width) + 50 + "px";
    div[0].style.width = ns;
    img[0].style.width = ns;
  });

  minusButton.click(function(){
    ns = parseInt(div[0].style.width) - 50 + "px";
    div[0].style.width = ns;
    img[0].style.width = ns;
  });



  img = $('<img>', {
   src: document.getElementById(inp).value,
   id:  amount_of_windows,
   width: "400px",
   frameborder: 0
 });
 img.appendTo(div);
}
