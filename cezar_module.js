"use strict";

const cezar_cipher = function(input){
    if(typeof input != "string"){
        throw new Error("Podana wartość nie jest stringiem");
    }
    else if(input === ""){
        throw new Error("Podany ciąg nie może być pusty");
    }

    const alphabet = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż';
    const text = input;
    const rot = 13;
    let resoult = '';

    for (const letter of text) {
        let index = alphabet.search(new RegExp(letter, 'i'));
        index += rot;

        if(index > (alphabet.length - 1)){
            index = index - (alphabet.length - 1);
        }
        else if(index < 0){
            index = index + (alphabet.length - 1);
        }

        if(letter.toLowerCase() === letter){
            resoult += alphabet[index].toLowerCase();
        }
        else{
            resoult += alphabet[index].toUpperCase();
        }
    }

    return resoult; 
}

export {cezar_cipher};