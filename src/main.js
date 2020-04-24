import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { exchangeRate } from './src/currency-calculator.js';

$(document).ready(function() {
  event.preventDefault();
  $('#calculate').click(function) {
    let currencyToConvertTo = ;
    (async() => {
      let exchangeRate = new exchangeRate();
      const response = await exchangeRate.getUSDExchangeRate();
      console.log(response);
      getElements(response);
    });
    function getElements(response) {
      if(response) {
        $('#showResponse').html(``)
      }
    }
  }
})
