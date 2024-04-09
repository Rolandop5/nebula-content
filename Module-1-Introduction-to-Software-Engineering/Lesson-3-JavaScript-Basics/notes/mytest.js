/*function getIssuer(number) {
   
  
    const cardNumber = number.toString();
  
    
  
    const firstDigit = cardNumber.slice(0, 1);
    const firstTwoDigits = cardNumber.slice(0, 2);
    const firstFourDigits = cardNumber.slice(0, 4);
  
    
  
    if (firstTwoDigits === '34' || firstTwoDigits === '37') {
      if (cardNumber.length === 15) {
        return 'AMEX';
      }
    } else if (firstFourDigits === '6011') {
      if (cardNumber.length === 16) {
        return 'Discover';
      }
    } else if (firstDigit === '4') {
      if (cardNumber.length === 13 || cardNumber.length === 16) {
        return 'VISA';
      }
    } else if (firstDigit === '5') {
      if (cardNumber.length === 16 && parseInt(firstTwoDigits) >= 51 && parseInt(firstTwoDigits) <= 55) {
        return 'Mastercard';
      }
    }
   
    return 'Unknown';
  }
  
  
  console.log(getIssuer(378282246310005)); // Output: "AMEX"
  console.log(getIssuer(6011000990139424)); // Output: "Discover"
  console.log(getIssuer(5555555555554444)); // Output: "Mastercard"
  console.log(getIssuer(4111111111111111)); // Output: "VISA"
  console.log(getIssuer(1234567890123456)); // Output: "Unknown"*/

  

   /*

  const numberToString = number.toString();

console.log(numberToString.length)

    if(numberToString.charAt(0) === 4 && (numberToString.length === 16 || numberToString.length === 13)){

      return 'VISA'

    }else if(numberToString.charAt(0) === 3 && numberToString.length === 15){

      return 'AMEX'

    }else if(numberToString.charAt(0) === 9){

      return 'Unknown'

    }else{

      return "Help"

    }

  
 */

    /*function getIssuer(number) {
        // Code your solution here
        const cardNumber = number.toString()
        const cardLength = cardNumber.length
       
          if ((cardLength === 15) && (cardNumber.startsWith('34') || (cardNumber.startsWith('37')))) {
              return 'AMEX';
          } else if ((cardLength === 16) && (cardNumber.startsWith('6011'))) {
              return 'Discover';
          } else if ((cardLength === 16) && (cardNumber.startsWith('51') || (cardNumber.startsWith('52') || (cardNumber.startsWith('53') || (cardNumber.startsWith('54') || (cardNumber.startsWith('55'))) {
              return 'Mastercard';
          } else if ((cardLength === 13) || (cardNumber.length === 16) && (cardNumber.startsWith('4'))) {
              return 'VISA';
          } else {
              return 'Unknown';
      }    */

      const bodyElement = document.body;

bodyElement.setAttribute('style', 'background-color: lightblue');

const h1Element = document.createElement('h1');

bodyElement.appendChild(h1Element);

h1Element.textContent = '0';

h1Element.style.backgroundColor = 'lightgreen';

h1Element.setAttribute('style', 'font-size: 24px'); 

h1Element.style.fontSize = '24px'; 

h1Element.textContent = '0';

const incrementButton = document.createElement('button');

bodyElement.appendChild(incrementButton);

incrementButton.textContent = 'Increment';

incrementButton.classList.add('boxButton');

const decrementButton = document.createElement('button');


bodyElement.appendChild(decrementButton);


decrementButton.textContent = 'Decrement';


decrementButton.classList.add('boxButton');

incrementButton.addEventListener('click', function() {
    let currentValue = parseInt(h1Element.textContent);
    h1Element.textContent = currentValue + 1;
});

decrementButton.addEventListener('click', function() {
    let currentValue = parseInt(h1Element.textContent);
    h1Element.textContent = currentValue - 1;
});

const resetButton = document.createElement('button');


bodyElement.appendChild(resetButton);

resetButton.textContent = 'Reset and Clear';

resetButton.addEventListener('click', function() {
    h1Element.textContent = '0';
});
