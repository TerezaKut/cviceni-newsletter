const formular = document.querySelector('form')
const text = document.querySelector('input')

const odebirat = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

const kontrola = () => {
	console.log('slustilo se to')
	const email = text.value;
	console.log(email);

	if (email === '' || (!email.includes('@'))){
		text.classList.add('cerveny_ramecek');
	
	} else {
		text.classList.remove('cerveny_ramecek');
	}
}

formular.addEventListener('submit', odebirat);
text.addEventListener('input', kontrola);
text.addEventListener('focus', kontrola)