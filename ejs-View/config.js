let input1 = document.querySelector('#input1');
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel');
//const result = document.querySelector('#result');


save.addEventListener('click', (e) => {
   // if(input1.value === '') return;
    //delElem(input1.value);                      //it's need with out of server, for example
   // input1.value = '';
   
});

function delElem(value) {                       //it's need with out of server, for example
    console.log(value);
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.textContent = value;
    result1.appendChild(li);
    btn.textContent = 'Del';
    li.appendChild(btn);
    
    btn.className = 'btn btn-outline-dark';
btn.addEventListener('click', (e) => {
    result1.removeChild(li);
});
};

cancel.addEventListener('click', (e) => {
    //if(input1.value != '') {
  //  input1.value = '';
   // };
});

/*delete1.addEventListener('click', (e) => {
    if(result2.value != '') {
    delete result2.value;
    };
});*/

  