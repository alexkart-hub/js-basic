// Домашнее задание - Управление потоком
// 12.05.2023
function helloTranslator(lang)
{
    if (typeof lang !== 'string' || lang.length !== 2) {
        return 'Invalid lang';
    }
    switch (lang) {
        case 'ru':
            return 'Здравствуйте!';
        case 'de':
            return 'Gutten tag!';
        case 'en':
            return 'Hello!';
        case 'am':
            return 'Բարեւ ձեզ!';
        case 'fr':
            return 'Bonjour!';
        case 'jp':
            return 'こんにちは!';
        default:
            return 'Sorry, unknown language!';
    }
}

console.log('ru: ' + helloTranslator('ru'));
console.log('de: ' + helloTranslator('de'));
console.log('en: ' + helloTranslator('en'));
console.log('am: ' + helloTranslator('am'));
console.log('fr: ' + helloTranslator('fr'));
console.log('jp: ' + helloTranslator('jp'));
console.log('no: ' + helloTranslator('no'));
console.log('non: ' + helloTranslator('non'));
console.log('7: ' + helloTranslator(7));