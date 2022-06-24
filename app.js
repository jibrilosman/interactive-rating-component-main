
let submit = document.querySelector('#submit-button');
let rating = document.querySelectorAll('.rating');
let result = document.querySelector('#label');
let thanks = document.querySelector('.thank-section');
let val;

rating.forEach(function(rating) {
  rating.addEventListener('click', function() {
    assignVal(rating.id);
  });
});
 
function assignVal(val) {
  rating = val;
  if(rating === 'rateOne') {
    val = 1;
    
  } else if(rating === 'rateTwo') {
    val = 2;
    
  } else if(rating === 'rateThree') {
    val = 3;
    
    
  } else if(rating === 'rateFour') {
    val = 4;
    
  } else if(rating === 'rateFive') {
    val = 5;
    
  } 

  submit.addEventListener('click', function() {
    result.innerHTML = `You selected ${val} out of 5`;
      thanks.style.display = 'flex';

  });
}

