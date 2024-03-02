/*
All Rights Reserved, (c) 2024 Martin Shaw

Author: Martin Shaw (developer@martinshaw.co)
File Name: app.ts
Created:  2024-03-01T21:04:55.992Z
Modified: 2024-03-01T21:04:55.993Z

Description: description
*/

import wordlist from './wordlists/mit/10000-without-under-5-chars.json';

class SpellingApp {
    protected wordlistElement!: HTMLDivElement;
    protected entryFieldElement!: HTMLDivElement;
    protected entryFieldInputElement!: HTMLInputElement;
    protected entryStartElement!: HTMLDivElement;
    protected entryStartButtonElement!: HTMLButtonElement;
    protected scoreElement!: HTMLDivElement;

    protected selectedWord: string | null = null;
    protected currentEntryFieldInputValue: string = '';

    protected listenAgainCounter: number = 0;
    protected score: number = 0;

    constructor() {
        this.addElements();
        this.addEventListeners();
    }

    private addElement<TElementType extends HTMLElement>(selector: string, errorMessage: string, setterCallback: (element: TElementType) => void): void {
        const element = document.querySelector<TElementType>(selector);
        if (element === null) throw new Error(errorMessage);
        setterCallback(element);
    }

    private addElements() {
        this.addElement<HTMLDivElement>('div#wordlist', 'Wordlist element not found', (element) => this.wordlistElement = element);
        this.addElement<HTMLDivElement>('#entry__field', 'Entry field element not found', (element) => this.entryFieldElement = element);
        this.addElement<HTMLInputElement>('#entry__field input', 'Entry field input element not found', (element) => this.entryFieldInputElement = element);
        this.addElement<HTMLDivElement>('#entry__start', 'Entry start element not found', (element) => this.entryStartElement = element);
        this.addElement<HTMLButtonElement>('#entry__start button', 'Entry start button element not found', (element) => this.entryStartButtonElement = element);
        this.addElement<HTMLDivElement>('#score', 'Score element not found', (element) => this.scoreElement = element);
    }

    private addEventListeners() {
        this.entryFieldInputElement.addEventListener('input', (event) => this.onEntryFieldInputValueChange((event.target as HTMLInputElement).value));
        this.entryFieldInputElement.addEventListener('keyup', (event) => this.onEntryFieldInputKeyUpEvent(event));
        this.entryFieldInputElement.addEventListener('blur', (event) => this.focusEntryFieldInput());
        this.entryStartButtonElement.addEventListener('click', (event) => this.nextWord());
    }

    private focusEntryFieldInput = () => this.entryFieldInputElement.focus();

    private getNewWord = () => wordlist[Math.floor(Math.random() * wordlist.length)];

    private speakSelectedWord() {
        if (this.selectedWord === null) return;

        speechSynthesis.cancel();

        const msg = new SpeechSynthesisUtterance();
        msg.voice = speechSynthesis
            .getVoices()
            .filter(voice => voice.lang.startsWith('en-'))
            .sort((a, b) => (a.localService ? 0 : 1) - (b.localService ? 0 : 1))[0];
        msg.rate = 1;
        msg.text = this.selectedWord;

        speechSynthesis.speak(msg);
    }

    private onNewWordSelected = (word: string)  => this.selectedWord = word;

    private addSelectedWordToWordlist() {
        const wordElement = document.createElement('div');
        wordElement.classList.add('wordlist__word');
        wordElement.textContent = this.selectedWord;

        this.wordlistElement.appendChild(wordElement);
    }

    private increaseScore() {
        this.score++;
        this.scoreElement.textContent = this.score.toLocaleString();
    }

    private onEntryFieldInputValueChange(value: string) {
        this.currentEntryFieldInputValue = value;
        if (this.currentEntryFieldInputValue !== this.selectedWord) return;

        this.increaseScore();
        this.addSelectedWordToWordlist();
        this.nextWord();
    }

    private onEntryFieldInputKeyUpEvent(event: KeyboardEvent) {
        if (event.key !== 'ArrowDown') return;
        if (this.listenAgainCounter > 0) return this.nextWord();

        this.listenAgainCounter++;
        this.speakSelectedWord();
    }

    private resetEntryFieldInput() {
        this.onEntryFieldInputValueChange('');
        this.entryFieldInputElement.value = '';
    }

    private nextWord() {
        if (this.selectedWord === null) {
            this.entryFieldElement.classList.remove('hidden');
            this.entryStartElement.classList.add('hidden');
        }

        this.listenAgainCounter = 0;
        const word = this.getNewWord();

        this.focusEntryFieldInput();
        this.onNewWordSelected(word);
        this.speakSelectedWord();
        this.resetEntryFieldInput();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try { new SpellingApp(); } 
    catch (error) { console.error(error); }
});