const celsiusInput = document.getElementById('ce');
const kelvinInput = document.getElementById('ke');
const fahrenheitInput = document.getElementById('fa');

const roundNum = num => Math.round(num * 100) / 100;
const celsiusToOthers = () => {
	const cTemp = parseFloat(celsiusInput.value);
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = (cTemp) + 273.15;
	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
}

const fahrenheitToOthers = () => {
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5/9);
	const kTemp = (fTemp + 459.67) * (5/9);
	celsiusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
}
const kelvinToOthers = () => {
	const kTemp = parseFloat(kelvinInput.value);
	const cTemp = kTemp - 273.15;
	const fTemp = (9/5) * (kTemp - 273) * 32;
	celsiusInput.value = roundNum(cTemp);
	fahrenheitInput.value = roundNum(fTemp);
}

celsiusInput.addEventListener('input', celsiusToOthers);
fahrenheitInput.addEventListener('input',fahrenheitToOthers);
kelvinInput.addEventListener('input',kelvinToOthers);


