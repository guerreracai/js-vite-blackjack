import _ from 'underscore';

/**
 * Esta función crea un nuevodeck
 * @param {array<string>} tiposCartas Ejem. ['C','D','H','S']
 * @param {array<string>} tiposEspeciales Ejem. ['A','J','Q','K']
 * @returns  {array<string>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposCartas, tiposEspeciales) => {
    if(!tiposCartas || tiposCartas.length === 0)
        throw new Error('tiposCarta tiene que ser un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('tiposEspeciales tiene que ser un arreglo de string');
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
