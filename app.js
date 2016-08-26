$( document ).ready(function () {

// Iterate al id for buttons to make them do something buttons 1, 2 and 18 are not included 
// in the loop becuase they will perform differnt things each  
  for( var i = 3; i < 18; i++ ) {
    // add attr 'value' for the btn to a var
     var elementValue = $('#button-symbol-' + i).attr( 'value' )
     var operationArray = []
     // use bind method` and the event handler to generate event.data binded to 'click' of 'button id' + i
    $('#button-symbol-' + i).bind( 'click', { currentIndex: i, elementValue: elementValue }, function( event ){
      // object created form the event.data, it will generate an object each time a key is poressed
      var operationObj = {
        currentIndex: i,
        elementValue: event.data.elementValue 
      }    
      // replace then html in #bigSpan with operationObj prop elementValue
      $('#bigSpan').html( operationObj.elementValue )
      // append to the html in #smallObj operationObj prop elmentValue
      $('#smallSpan').append( operationObj.elementValue )      
    // button symbol bind ends here!    
    })    
    // make the btn id 18 do something when pressed:
    $('#button-symbol-18').on( 'click', function () {
      // create a string to evaulate in var toEval, then parse it to get a fixed number of decimal points
      var toEval = $('#smallSpan').text()
      // the regex will check any ocurrence of special char 
      // if one is found at [0], empty the spans from the screen
      // else  parse result
      var regexed =  toEval.match( /^[*+-=./]{1}/)
      if ( regexed[0] == '+' || regexed[0] == '-' || regexed[0] == '*' || 
           regexed[0] == '/' || regexed[0] == '.'  ) {
          var emptiedBig =  $('#bigSpan').html ('0')  
          var emptiedSmall =  $('#smallSpan').html ('') 
        } else { 
          var result = eval( toEval )
          var parsed  = parseFloat( result ).toFixed(2)
          //  Pass the result to screen and empty the span if parsed in not NaN.  
          if(parsed !== 'NaN' ) {  
            var resultToScreen = $('#bigSpan').html( parsed )
            var finalResult = $('#smallSpan').html( parsed )  
          } 
        }  
    })
    // Clear buttons assigment  
      $('#button-symbol-1').on( 'click', function () {
        var emptiedBig =  $('#bigSpan').html ('0')  
        var emptiedSmall =  $('#smallSpan').html ('')  
      })
      $('#button-symbol-2').on( 'click', function () {
        var emptiedBig =  $('#bigSpan').html ('0')  
        var emptiedSmall =  $('#smallSpan').html ('')  
      })
// for loop ends here!
  } 

});
