/**
 * @jest-environment jsdom
 */

import { Controller, Text, Width } from '../src/controller';

describe('the word wrap editor', () => {
    it('should throw error when width is a string', () => {
        const controller = new Controller();
        const expectedValue = controller.bestWordWrapperEver(Text.buildText('Hola'), Width.buildWidth("@"));

        expect(expectedValue).toThrowError('Column width must be a number');
    });

    // it('Should do nothing when width is equal or less than 0', () => {
    //     const controller = new Controller();
    //     const wordToWrap = 'Pepito';
    //     const columnWidth = 0;
    //     const expectedValue = controller.bestWordWrapperEver(wordToWrap, columnWidth);

    //     expect(expectedValue).toBe(wordToWrap);
    // });

    // it('Should do nothing when the word length is shortest or equal than width', () => {
    //     const controller = new Controller();
    //     const wordToWrap = 'Pepito';
    //     const columnWidth = 4;

    //     const expectedValue = controller.bestWordWrapperEver(wordToWrap, columnWidth);

    //     expect(wordToWrap).toEqual(expectedValue); 
    // });
});