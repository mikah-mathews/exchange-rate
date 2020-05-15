import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeRate } from './../src/currency-calculator.js';

$(document).ready(function() {
  
  $('#calculator').click(function(event) {
    event.preventDefault();
    let checkedVal = $("input[type='radio']:checked").val();
    let amount = parseInt($("input[name='moneyAmount']").val());
    callAPI();
    async function callAPI() {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getUSDExchangeRate();
      console.log(response);
      getElements(response);
    }
    function getElements(response) {
      if (response) {
        console.log("Response array:", response.conversion_rates);
        $('#convertedMoney').text(`Here is the response: ${response.conversion_rates[1]}`);
        //console.log();
        let x = checkedVal;
        for (x in response.conversion_rates) {
          let indexPosition = x.index(response.conversion_rates);
          console.log(indexPosition);
          
        }
      } else {
        $('#convertedMoney').text(`There was an error processing`);
      }
    }
  });
});
