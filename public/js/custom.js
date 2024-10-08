$(document).ready(function() {
  // Check if the homepage is loaded
  if (window.location.pathname == '/') {
/*
    // Wait for the difficulty panel to populate
    var difficultyIntervalID = setInterval(function() {
      // Check if the difficulty panel has been populated
      if ($('#difficulty').length > 0 && $('#difficulty').html() != '') {
        // Stop waiting for the difficulty panel to populate
        clearInterval(difficultyIntervalID);

        // Define a function used to strip out the difficulty panel decimals
        function fixDifficultyPanel() {
          // Get the value from the element
          var value = jQuery('#difficulty').text();

          // Convert the string to a number and remove the decimal part
          var intValue = Math.floor(Number(value.replace(/,/g, '')));

          // Convert the number back to a string with commas
          var formattedValue = intValue.toLocaleString('en',{'minimumFractionDigits':0,'maximumFractionDigits':0,'useGrouping':true});

          // Check if the previous difficulty value is different than the formatted value
          if (value != formattedValue) {
            // Set the processed value back to the element
            jQuery('#difficulty').text(formattedValue);
          }
        }
        
        // Fix the difficulty panel value right now when the page first loads
        fixDifficultyPanel();

        // Check if MutationObserver is supported in this browser 
        if ('MutationObserver' in window) {
          var target = jQuery('#difficulty')[0];
          var observer = new MutationObserver(function(mutationsList, observer) {
              // Fix the difficulty panel value everytime the value is updated
              fixDifficultyPanel();
          });

          observer.observe(target, { childList: true, subtree: true, characterData: true });
        }
      }
    }, 1, 'waitForDifficultyToLoad');
*/
    // Wait for the market cap panel to populate
    var marketCapIntervalID = setInterval(function() {
      // Check if the market cap panel has been populated
      if ($('#usdMarketCap').length > 0 && $('#usdMarketCap').html() != '') {
        // Stop waiting for the market cap panel to populate
        clearInterval(marketCapIntervalID);

        // Define a function that can prepend padding characters to the beginning of a string
        function prePadString(input, numDigits = 2, padCharacter= '0') {
          let inputCopy = input;

          while (inputCopy.length < numDigits) {
            inputCopy = padCharacter + inputCopy;
          }

          return inputCopy;
        }

        // Define a function used to strip out the market cap panel decimals
        function fixMarketCapPanel() {
          // Get the value from the element
          var value = jQuery('#usdMarketCap').text();

          // Remove the commas from the string
          var newValue = value.replace(/,/g, '');

          // Split the number by the decimal
          var splitParts = newValue.split('.');

          // Convert the number back to a string with commas
          var formattedValue = Number(splitParts[0]).toLocaleString('en',{'minimumFractionDigits':0,'maximumFractionDigits':0,'useGrouping':true});
          
          // Reduce the decimal part to 2 places
          var decimals = (splitParts[1].length > 2 ? splitParts[1].substring(0, 2) : prePadString(splitParts[1]));

          // Check if the previous market cap value is different than the formatted value
          if (value != formattedValue + '.' + decimals) {
            // Set the processed value back to the element
            jQuery('#usdMarketCap').html(formattedValue + '.<span class="decimal">' + decimals + '</span>');
          }
        }

        // Fix the market cap panel value right now when the page first loads
        fixMarketCapPanel();

        // Check if MutationObserver is supported in this browser 
        if ('MutationObserver' in window) {
          var target = jQuery('#usdMarketCap')[0];
          var observer = new MutationObserver(function(mutationsList, observer) {
              // Fix the market cap panel value everytime the value is updated
              fixMarketCapPanel();
          });

          observer.observe(target, { childList: true, subtree: true, characterData: true });
        }
      }
    }, 1, 'waitForMarketCapToLoad');
  }
});
