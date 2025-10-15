const buttonNextStep = document.querySelector('#next-step');

const step1 = document.querySelector('#step-1');
const step2 = document.querySelector('#step-2');
const step3 = document.querySelector('#step-3');
const finish = document.querySelector('#finish');

const userName = document.querySelector('#user-name');
const userMail = document.querySelector('#user-mail');
const userPassword = document.querySelector('#user-password');

const finishName = document.querySelector('#finish-name');
const finishMail = document.querySelector('#finish-mail');
const finishPassword = document.querySelector('#finish-password');

let step = 0;

const coloresEspaciales = [
    "#F1C40F", // amarillo estrella
    "#F39C12", // naranja cálido de nebulosa
    "#E74C3C", // rojo brillante de nebulosa
    "#9B59B6", // violeta cósmico
    "#8E44AD", // púrpura brillante
    "#3498DB", // azul estelar
    "#5DADE2", // azul neón
    "#1ABC9C", // verde azulado de gas
    "#E67E22", // naranja estelar
    "#EC7063"  // rosa/rojo de destello cósmico
];

nuevaEstrella();

function nuevaEstrella(){
    setTimeout(() => {
        const body = document.querySelector('body');
        const estrella = document.createElement('span');

        const ancho = Math.floor(Math.random() * (window.innerWidth - 10 + 1)) + 10;
        const alto = Math.floor(Math.random() * (window.innerHeight - 10 + 1)) + 10;
        const indiceRandom = Math.floor(Math.random() * coloresEspaciales.length);
        const colorRandom = coloresEspaciales[indiceRandom];

        estrella.classList.add('estrella');
        
        estrella.style.left = ancho + 'px';
        estrella.style.top = alto + 'px';
        estrella.style.color = colorRandom;
        
        estrella.innerText = '██▓▒░░';

        body.appendChild(estrella);
        setTimeout(() => {
            estrella.remove();
        }, 2000);

        nuevaEstrella();
    }, 100);
}

buttonNextStep.addEventListener('click', () => {
    if(step < 3){
        step++;
        checkStep();
    }
});

function checkStep(){
    console.log('Estás en step: ', step);

    switch(step) {
        case 1:
            step1.classList.toggle('hide');
            step2.classList.toggle('hide');
            userMail.focus();
            break;
        case 2:
            step2.classList.toggle('hide');
            step3.classList.toggle('hide');
            userPassword.focus();
            break;
        case 3:
            buttonNextStep.classList.toggle('hide');
            step3.classList.toggle('hide');
            finish.classList.toggle('hide');

            finishName.innerHTML = 'Nombre: ' + userName.value;
            finishMail.innerHTML = 'e-Mail: ' + userMail.value;
            finishPassword.innerHTML = 'Contraseña: ' + userPassword.value;
    }
}