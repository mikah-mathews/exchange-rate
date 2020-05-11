import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { ExchangeRate } from './../src/currency-calculator.js';

$(document).ready(function() {
  event.preventDefault();
  $('#calculator').click(function () {
    //let currencyToConvertTo = ;
    (async() => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getUSDExchangeRate();
      console.log(response);
      getElements(response);
    });
    

    let checkedVal = $("input[type='radio']:checked").val();
    let amount = parseInt($("input[name='moneyAmount']").val());
    


    function getElements(response) {
      
      if (response) {
        $('#convertedMoney').text(`Here is the response: ${data.conversion_rates[1]}`);
      } else {
        $('#convertedMoney').text(`Please check your inputs and try again.`);
      }
    }
  });
});
