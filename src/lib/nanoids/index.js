import { customAlphabet as customAlphabetAsync } from 'nanoid/async';


const getAlphabetArgs = { alphabet: '', additionnalChars: '' };

const getAlphabet = (args = getAlphabetArgs) => {

    let { alphabet, additionnalChars } = args;

    let result;

    switch (alphabet?.toLowerCase()) {

        case 'lower':
            result = '0123456789abcdefghijklmnopqrstuvwxyz';
            break;

        case 'upper':
            result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            break;

        case 'numeric':
            result = '0123456789';
            break;

        default:
            result = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            break;
    }

    if (additionnalChars && typeof additionnalChars === 'string') {

        const arr = [...additionnalChars];

        arr.forEach(c => {

            if (result.indexOf(c) < 0) {

                result += c;
            }
        });
    }

    return result;
};

export const nanoidAsync = (characterCount, options = getAlphabetArgs) => {

    characterCount = parseInt(characterCount);

    if (!(characterCount > 0)) throw Error('Invalid character count');


    const alphabet = getAlphabet(options);

    return customAlphabetAsync(alphabet, characterCount);
};

export const nanoidAlphaNumericAsync = (characterCount, alphabet) => {

    return nanoidAsync(characterCount, { alphabet });
};

export const nanoid12AlphaNumericAsync = nanoidAlphaNumericAsync(12);
