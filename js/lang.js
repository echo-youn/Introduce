const lang = navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2)
const langCode = {
    english: 'en',
    korean: 'ko',
    japan: 'ja'
}

for(let [key, value] of Object.entries(langCode)){
    if(lang === value){
        window.location.replace(`index_${value}`)
    }
    // Lagacy
    // if(navigator.language.indexOf(value) >= 0){
    //     location.href = `index_${value}`
    // }
}