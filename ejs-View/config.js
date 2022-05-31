let text = document.querySelector('#text');
const save = document.querySelector('#save');
const cancel = document.querySelector('#cancel');

document.addEventListener('click', (e) => {
	const id = e.target?.dataset?.id || null;
	if(id){
		console.log(id);
		fetch(`${id}`,{
			method: 'DELETE',
		}).then(() => {
            window.location.reload();
        });
	};
});  

/*save.addEventListener('click', (e) => {
   if(text.value === '') return;
      delElem(text.value);                      //it's need with out of server, for example
      text.value = '';
   
});*/

/*function delElem(value) {                       //it's need with out of server, for example
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
};*/

cancel.addEventListener('click', (e) => {
   text.value = '';
});

  