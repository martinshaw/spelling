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

    protected selectedWord: string | null = null;
    protected currentEntryFieldInputValue: string = '';

    constructor() {
        this.addElements();
        this.addEventListeners();
    }

    private focusEntryFieldInput() {
        this.entryFieldInputElement.focus();
    }

    private async getNewWord(): Promise<string> {    
        return wordlist[Math.floor(Math.random() * wordlist.length)];
    }

    private speakSelectedWord() {
        speechSynthesis.cancel();

        if (this.selectedWord === null) return;

        const englishVoices = window.speechSynthesis.getVoices().filter(voice => voice.lang.startsWith('en-'));
        const localEnglishVoices = englishVoices.sort((a, b) => (a.localService ? 0 : 1) - (b.localService ? 0 : 1));

        const msg = new SpeechSynthesisUtterance();
        msg.voice = localEnglishVoices[0];
        msg.volume = .9; // 0 to 1
        msg.rate = .8; // 0.1 to 10
        msg.pitch = 1; // 0 to 2
        msg.text = this.selectedWord;

        speechSynthesis.speak(msg);
    }

    private onNewWordSelected(word: string) {
        this.selectedWord = word;
        this.speakSelectedWord();
    }

    private addSelectedWordToWordlist() {
        const wordElement = document.createElement('div');
        wordElement.classList.add('wordlist__word');
        wordElement.textContent = this.selectedWord;

        this.wordlistElement.appendChild(wordElement);
    }

    private onEntryFieldInputValueChange(value: string) {
        this.currentEntryFieldInputValue = value;

        if (this.currentEntryFieldInputValue === this.selectedWord) {
            this.addSelectedWordToWordlist();
            this.nextWord();
        }
    }

    private onEntryFieldInputKeyUpEvent(event: KeyboardEvent) {
        event.preventDefault();

        if (event.key === 'ArrowDown') this.speakSelectedWord();
    }

    private addElements() {
        const wordlistElement = document.querySelector<HTMLDivElement>('div#wordlist');
        if (wordlistElement === null) throw new Error('Wordlist element not found');
        this.wordlistElement = wordlistElement;

        const entryFieldElement = document.querySelector<HTMLDivElement>('#entry__field');
        if (entryFieldElement === null) throw new Error('Entry field element not found');
        this.entryFieldElement = entryFieldElement;

        const entryFieldInputElement = document.querySelector<HTMLInputElement>('#entry__field input');
        if (entryFieldInputElement === null) throw new Error('Entry field input element not found');
        this.entryFieldInputElement = entryFieldInputElement;

        const entryStartElement = document.querySelector<HTMLDivElement>('#entry__start');
        if (entryStartElement === null) throw new Error('Entry start element not found');
        this.entryStartElement = entryStartElement;

        const entryStartButtonElement = document.querySelector<HTMLButtonElement>('#entry__start button');
        if (entryStartButtonElement === null) throw new Error('Entry start button element not found');
        this.entryStartButtonElement = entryStartButtonElement;
    }

    private addEventListeners() {
        this.entryFieldInputElement.addEventListener(
            'input', 
            (event) => this.onEntryFieldInputValueChange((event.target as HTMLInputElement).value)
        );

        this.entryFieldInputElement.addEventListener(
            'keyup',
            (event) => this.onEntryFieldInputKeyUpEvent(event)
        );

        this.entryFieldInputElement.addEventListener(
            'blur',
            (event) => this.focusEntryFieldInput()
        );

        this.focusEntryFieldInput();

        this.entryStartButtonElement.addEventListener(
            'click',
            (event) => this.nextWord()
        );
    }

    private async nextWord() {
        if (this.selectedWord === null) {
            this.entryFieldElement.classList.remove('hidden');
            this.entryStartElement.classList.add('hidden');
        }

        const word = await this.getNewWord();

        this.onNewWordSelected(word);

        this.onEntryFieldInputValueChange('');
        this.entryFieldInputElement.value = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        new SpellingApp();
    } catch (error) {
        console.error(error);
    }
});