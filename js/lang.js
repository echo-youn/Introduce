const lang = navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2)
const langCode = {
    english: 'en',
    korean: 'ko',
    japan: 'ja'
}

if(!sessionStorage.getItem('visited')){
    sessionStorage.setItem('visited','hello, world')

    for(let [key, value] of Object.entries(langCode)){
        if(lang === 'en'){
            window.location.replace(`index`)
        } else if(lang === value){
            window.location.replace(`index_${value}.html`)
        }
    }
}