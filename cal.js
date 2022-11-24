let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is ',buttonText)
        if(buttonText=='x'){
            buttonText='*';
            screenValue +=buttonText;
            screen.value=screenValue;
        
        }
        else if(buttonText=='c'){
            screenValue='';
            screen.value=screenValue;

        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);

        }
        else if(buttonText=='X'){
            screen.value=screenValue.slice(0, -1);
            //screenView.value = screenValue.value.slice(10, - 1);

        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }

    })
}