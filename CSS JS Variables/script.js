const inputs = document.querySelectorAll('.controls input');

function applyChanges() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', applyChanges));
inputs.forEach(input => input.addEventListener('mousemove', applyChanges))