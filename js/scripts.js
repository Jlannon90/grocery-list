$(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();
    var item1 = $("input#item1").val();
    var item2 = $("input#item2").val();
    var item3 = $("input#item3").val();
    var item4 = $("input#item4").val();
    var item5 = $("input#item5").val();
    var items = [item1, item2, item3, item4, item5]
    var groceryList = [];
    var alphaItems = items.sort();

    var upperItems = alphaItems.map(function(item) {
      return item.toUpperCase();
    });



    groceryList.push(upperItems[0], upperItems[1], upperItems[2], upperItems[3], upperItems[4]);
    $("ul").append("<li>" + groceryList[0] + "</li>");
    $("ul").append("<li>" + groceryList[1] + "</li>");
    $("ul").append("<li>" + groceryList[2] + "</li>");
    $("ul").append("<li>" + groceryList[3] + "</li>");
    $("ul").append("<li>" + groceryList[4] + "</li>");





    $("form").hide();

  });
});
