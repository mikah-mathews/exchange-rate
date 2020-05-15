export class ExchangeRate {
  async getUSDExchangeRate(){
    try {
      let response = await fetch(`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD/`);
      let jsonifiedResponse;
      if (response.ok && response.status === 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
        alert("Error calling API - please try again");
      }
      return jsonifiedResponse;
    } catch (error) {
      console.log('in the catch');
      return false;
    }
    //let amountWorth;
    //response.forEach
  }
  converter(dollarAmount, convertTo) {
    this.dollarAmount = dollarAmount;
    this.convertTo = convertTo;
  }

  amountWorth(dollarAmount, convertTo) {
    let converted = (dollarAmount * convertTo).toFixed([2]);
    return converted;
  }

  

}

// export function getMatchingKey(inputKey, response) {
  
// }
