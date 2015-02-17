var shippingCost = function(distance, weight){
  return (parseInt(distance) * (weight * .014342)).toString();
}



$(function() {
  $('form#shipping-calculator').submit(function(event) {
    var inputDistance = $('#distance').val();
    var inputBoxSize = $('#box-options').val();
    var inputWeight = parseInt($("#weight").val());
    var newShipment = {
      distance: inputDistance,
      boxSize: inputBoxSize,
      weight: inputWeight,
      boxHeight: function() {
        return inputBoxSize.split(" ")[0];
      },
      boxWidth: function() {
        return inputBoxSize.split(" ")[1];
      },
      svgBoxImage: function(){
        return "<svg id='rectangle' height='500' width='500'><rect height='"
                  + this.boxHeight()
                  + "' width='"
                  + this.boxWidth()
                  + "' style='fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)'/></svg>"
      }
    }
    $('#rectangle').remove();
    $("#total-cost").append(newShipment.svgBoxImage());
    $("#cost-paragraph").text(shippingCost(newShipment.distance, newShipment.weight));
    $("#distance").change(function(){
      $("#cost-paragraph").text("");
      $("#cost-paragraph").text(shippingCost(newShipment.distance, newShipment.weight));
    });
    event.preventDefault();
  });
});









































// $(function(){
//   $("#shipping-calculator").submit()
//     $.ajax({
//       type: "post",
//       url: "http://www.travelmath.com/drive-distance/",
//       data: "{from: 'Portland', to: 'new york'}",
//       dataType: 'html'
//   });
// });
