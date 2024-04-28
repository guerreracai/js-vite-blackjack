
/**
 * Obtener el valor d ela carta
 * @param {String} carta 
 * @returns {number} retorna un valor numérico
 */

export const valorCarta = ( carta ) => {
    if(!carta) throw new Error('la carta es obligatoria');
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}