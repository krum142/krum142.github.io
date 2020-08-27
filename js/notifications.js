let elements;

function getElemets(){
    elements = {
        info: document.querySelector('#successBox'),
        error: document.querySelector('#errorBox'),
        loading: document.querySelector('#successBox')
    };
    
    elements.info.addEventListener('click', hideInfo);
    elements.error.addEventListener('click', hideError);
}

export function showInfo(message) {
    getElemets();
    elements.info.innerHTML = message;
    elements.info.parentElement.style.display = 'block';

    setTimeout(hideInfo, 3000);
}

export function showError(message) {
    getElemets();
    elements.error.innerHTML = message;
    elements.error.parentElement.style.display = 'block';
}

let requests = 0;

export function beginRequest() {
    getElemets();
    requests++;
    elements.loading.style.display = 'block';
}

export function endRequest() {
    getElemets();
    requests--;
    if (requests === 0) {
        elements.loading.style.display = 'none';
    }
}

function hideInfo() {
    getElemets();
    elements.info.parentElement.style.display = 'none';
}

function hideError() {
    getElemets();
    elements.error.parentElement.style.display = 'none';
}