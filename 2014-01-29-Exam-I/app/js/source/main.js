(function(){

  'use strict';

  $(document).ready(initialize);

  var timer;

  function initialize(){
    $('#go').click(clickGo);
  }

  function clickGo(){
    clearInterval(timer);
    selectWord();
  }

  function selectWord(){
    var inputText = $('#inputText').val();
    var noPunctuation = inputText.replace(/[,.:;]/gi,'');
    var inputArray = noPunctuation.split(' '||', '||'. ');
    var shuffled =_.shuffle(inputArray);
    for(var i=0; i<shuffled.length;i++){
      var word = shuffled[i];
      timer = setTimeout(wait, 1000);
      evenOrOdd(word);
    }
  }

  function wait(){
  //wait 1 second
  }

  function evenOrOdd(word){
    var wordLength = word.length;
    if(wordLength % 2 === 0){
      var resEven = word.toLowerCase();
      var finalWordSum = sum(wordLength);
      var lieven = '<li>' +resEven+' '+finalWordSum+ '</li>';
      $('#evens').append(lieven);
    }
    else{
      var resOdd = word.toUpperCase();
      var novowel = resOdd.replace(/[aeiou]/gi,'');
      if(wordLength < 2){
        return;
      }
      else{
        var finalWordFac = factorial(wordLength);
        var liodd = '<li>' +novowel+' '+finalWordFac+ '</li>';
        $('#odds').append(liodd);
      }
    }
  }

  function sum(wordLength){
    var finalWordSum = 0;
    for(var i=1;i<wordLength+1;i++){
      finalWordSum += i;
    }
    return finalWordSum;
  }

  function factorial(wordLength){
    var finalWordFac = 1;
    for(var i=1;i<wordLength;i++){
      finalWordFac = finalWordFac*i;
    }
    return finalWordFac;
  }

})();

