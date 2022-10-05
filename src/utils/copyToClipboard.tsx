export function copyToClipboard(input: HTMLInputElement | null) {
	if (input) {
		input.select();
		input.setSelectionRange(0, 99999);
		document.execCommand('copy'); // There's no safe alternative to this method yet.
	}
}
