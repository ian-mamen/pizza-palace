$(document).ready(function(){
  function getValue() {
      var getPizza = document.getElementById("pizza");
      var pizza =getPizza.options[getPizza.selectedIndex].value;
      var getSize = document.getElementById("size");
      var size = getSize.options[getSize.selectedIndex].value;
      var getCrust = document.getElementById("crust");
      var crust = getCrust.options[getCrust.selectedIndex].value;
      var getAmount = document.getElementById("amount").value;
      var getTopping = document.getElementById("topping");
      var topping = getTopping.options[getTopping.selectedIndex].value;
      var getDelivery = document.getElementById("delivery");
      var delivery = getDelivery.options[getDelivery.selectedIndex].value;

      document.getElementById("receiptvalue").innerHTML="Your order: <br>" + pizza + "</br>" + size +"<br>"
      + crust + "<br>" + topping + "<br>" + getAmount + "<br>" + delivery;
      var pizzaNum = parseInt(pizza);
      var sizeNum = parseInt(size);
      var crustNum = parseInt(crust);
      var toppingNum = parseInt(topping);
      var getAmountNum = parseInt(getAmount);
      var deliveryNum = parseInt(delivery);
      var total = (((pizzaNum + sizeNum + crustNum + toppingNum) *getAmountNum) + deliveryNum);
      console.log(total);
        document.getElementById("receiptvalue1").innerHTML="Your total charge: " + total;

        if((pizza == "") || (size == "") || (crust == "") || (topping == "") || (getAmount== 0 ) || (name == "")){
      alert ("please fill all fields");
      return false;
    }else {
      alert("your order is on the way " + name + "!");
    }



}
