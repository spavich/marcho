// Counter
const minus = document.querySelector('.counter__minus'),
			plus = document.querySelector('.counter__plus'),
			num = document.querySelector('.counter__num');

plus.addEventListener('click', ()=>{
	if(num.value < 99 && num.value > 0){
		num.value++;
	}
});
minus.addEventListener('click', ()=>{
	if(num.value > 1){
		num.value--;
	}
});