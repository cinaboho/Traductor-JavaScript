let translateFrom = document.querySelector('#translateFrom');
let translateTo = document.querySelector('#translateTo');

const GET_URL = 'https://text-translator2.p.rapidapi.com/getLanguages'

const OPTIONS = {
method: 'get',
headers: {
    'X-RapidAPI-Key': '11d2ae6882msh5eddf09838d1457p1a180bjsnaf61a6d68e70',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    }
}
let source_language = 'es';
let target_language = 'af';
fetch(GET_URL, OPTIONS)
.then(res => res.json())
.then(objeto => {
    let lenguages = objeto.data.languages;
    console. log()
    lenguages.forEach(element => {
        translateFrom.innerHTML += `<option value = "${element.code}">${element.name}</option>`
        translateTo.innerHTML += `<option value = "${element.code}">${element.name}</option>`

        })

        translateFrom.addEventListener( 'click', ()=>{
            console. log(translateFrom.value) ;
            source_language = translateFrom.value;
        });

        translateTo.addEventListener('click', ()=>{
        console. log(translateTo.value) ;
        target_language = translateTo.value;
        });

})
.catch(err => console.log(err))

let translate = document.querySelector('#translate');
let trasnlateTo = document.querySelector('#outputTranslate');

translate.addEventListener('click', ()=>{
    let inputTranslate = document.querySelector('#inputTranslate');
    let textToTranslate= inputTranslate.value;


    const encodedParams = new URLSearchParams();
    encodedParams.append("source_language", source_language );
    encodedParams.append("target_language", target_language);
    encodedParams.append("text", textToTranslate);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '11d2ae6882msh5eddf09838d1457p1a180bjsnaf61a6d68e70',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        body: encodedParams
    };

    fetch('https://text-translator2.p.rapidapi.com/translate', options)
        .then(response => response.json())
        .then(response => trasnlateTo.value = response.data.translatedText)
        .catch(err => console.error(err));
});

