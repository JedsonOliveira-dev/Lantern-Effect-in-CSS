const darkLayer = document.querySelector('.dark');
const lightEffect = document.querySelector('.light-effect');
const toggleLightsButton = document.getElementById('toggleLights');
const toggleLanternaButton = document.getElementById('toggleLanterna');
const h1Element = document.getElementById('h1');

let lightsOff = false;
let lanternaActive = false;

h1Element.classList.add('shadow');
h1Element.classList.remove('remove-h1');

// Função para alternar as luzes
toggleLightsButton.addEventListener('click', () => {
    lightsOff = !lightsOff;
    darkLayer.classList.toggle('active', lightsOff);
    
    if (lightsOff) {
        lightEffect.style.display = 'none';
        darkLayer.style.opacity = 1
        toggleLightsButton.classList.add('button')
        toggleLanternaButton.classList.add('button')
    } else {
        lightEffect.style.display = 'none';
        lanternaActive = false;
        darkLayer.style.opacity = 0 
        h1Element.classList.add('shadow');
        h1Element.classList.remove('remove-h1');
        h1Element.classList.add('shadow');
        toggleLightsButton.classList.remove('button')
        toggleLanternaButton.classList.add('button')
    }
    
});

toggleLanternaButton.addEventListener('click', () => {
    if (lightsOff) { 
        lanternaActive = !lanternaActive;
        if (lanternaActive) {
            lightEffect.style.display = 'block';
            darkLayer.style.opacity = 0
            h1Element.classList.add('remove-h1');
            lightEffect.classList.add('button')
            toggleLightsButton.classList.add('button')
            toggleLanternaButton.classList.remove('button')
        } else {
            lightEffect.style.display = 'none';
            darkLayer.style.opacity = 1 
            h1Element.classList.remove('remove-h1');
            lightEffect.classList.add('button')
            toggleLightsButton.classList.add('button')
            toggleLanternaButton.classList.add('button')
        }
        
    }
});

document.addEventListener('mousemove', (event) => {
    if (lanternaActive && lightsOff) {
        lightEffect.style.left = `${event.pageX}px`;
        lightEffect.style.top = `${event.pageY}px`;
    }
});
