let numArr = [5, 22, 15, 100, 55];
/* Aufgabenstellung


Du hast ein Array aus Zahlen und möchtest herausfinden, durch welche Zahlen sie (außer durch eins und sich selbst) teilbar sind.
 */

for (let i = 0; i < numArr.length; i++) {
	for (let j = 2; j < numArr[i]; j++) {
		if (numArr[i] % j == 0) {
			let x = numArr[i] / j;
			document.write(
				`${numArr[i]} lässt sich durch ${j} teilen. Das Ergebnis ist ${x}.<br>`
			);
		}
	}
}
