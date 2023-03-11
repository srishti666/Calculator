(function() {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    //storing the number into the calculator
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;  /* to push the values in the calculator screen */
        })
    });

    //equal to button function
    equal.addEventListener('click', function(e){
        if(screen.value ===''){
            screen.value = "";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    //clear button function
    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})();