import { LightningElement } from 'lwc';

export default class PracticeHard extends LightningElement {

    selectedOption = {};
    correctAnswers = 0;
    isSubmitted = false;

    myQuestions = [
        {
            id: 1,
            question: 'What is the capital of France?',
            correctOption: 'c',
            options: [
                { label: 'London', value: 'a' },
                { label: 'Berlin', value: 'b' },
                { label: 'Paris', value: 'c' },
                { label: 'Madrid', value: 'd' }
            ]
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            correctOption: 'b',
            options: [
                { label: 'Venus', value: 'a' },
                { label: 'Mars', value: 'b' },
                { label: 'Jupiter', value: 'c' },
                { label: 'Saturn', value: 'd' }
            ]
        },
        {
            id: 3,
            question: 'What is the largest ocean on Earth?',
            correctOption: 'd',
            options: [
                { label: 'Atlantic Ocean', value: 'a' },
                { label: 'Indian Ocean', value: 'b' },
                { label: 'Arctic Ocean', value: 'c' },
                { label: 'Pacific Ocean', value: 'd' }
            ]
        },
        {
            id: 4,
            question: 'Who wrote Romeo and Juliet?',
            correctOption: 'a',
            options: [
                { label: 'William Shakespeare', value: 'a' },
                { label: 'Charles Dickens', value: 'b' },
                { label: 'Jane Austen', value: 'c' },
                { label: 'Mark Twain', value: 'd' }
            ]
        },
        {
            id: 5,
            question: 'What is the chemical symbol for Gold?',
            correctOption: 'a',
            options: [
                { label: 'Au', value: 'a' },
                { label: 'Ag', value: 'b' },
                { label: 'Fe', value: 'c' },
                { label: 'Hg', value: 'd' }
            ]
        },
        {
            id: 6,
            question: 'What is the largest mammal in the world?',
            correctOption: 'b',
            options: [
                { label: 'African Elephant', value: 'a' },
                { label: 'Blue Whale', value: 'b' },
                { label: 'Giraffe', value: 'c' },
                { label: 'Hippopotamus', value: 'd' }
            ]
        },
        {
            id: 7,
            question: 'Which country is known as the Land of the Rising Sun?',
            correctOption: 'b',
            options: [
                { label: 'China', value: 'a' },
                { label: 'Japan', value: 'b' },
                { label: 'South Korea', value: 'c' },
                { label: 'Thailand', value: 'd' }
            ]
        },
        {
            id: 8,
            question: 'What is the smallest prime number?',
            correctOption: 'c',
            options: [
                { label: '0', value: 'a' },
                { label: '1', value: 'b' },
                { label: '2', value: 'c' },
                { label: '3', value: 'd' }
            ]
        },
        {
            id: 9,
            question: 'Who painted the Mona Lisa?',
            correctOption: 'a',
            options: [
                { label: 'Leonardo da Vinci', value: 'a' },
                { label: 'Vincent van Gogh', value: 'b' },
                { label: 'Pablo Picasso', value: 'c' },
                { label: 'Michelangelo', value: 'd' }
            ]
        },
        {
            id: 10,
            question: 'What is the currency of Japan?',
            correctOption: 'a',
            options: [
                { label: 'Yen', value: 'a' },
                { label: 'Dollar', value: 'b' },
                { label: 'Euro', value: 'c' },
                { label: 'Pound', value: 'd' }
            ]
        }
    ];

    get totalQuestions() {
        return this.myQuestions.length;
    }

    get allNotSelected() {
        return Object.keys(this.selectedOption).length !== this.totalQuestions;
    }

    get scoreMessage() {
        return `You scored ${this.correctAnswers} out of ${this.totalQuestions}`;
    }

    get resultClass() {

        const baseClass =
            'slds-box slds-m-bottom_medium slds-text-heading_small';

        return this.correctAnswers === this.totalQuestions ? `${baseClass} success` : `${baseClass} failure`;
    }

    handleOptionChange(event) {

        const { name, value } = event.target;

        this.selectedOption = {...this.selectedOption, [name]: value};
    }

    handleSubmit() {

        this.correctAnswers = this.myQuestions.filter(
            question =>
                this.selectedOption[question.id] === question.correctOption).length;

        this.isSubmitted = true;
    }

    handleReset() {

        this.selectedOption = {};
        this.correctAnswers = 0;
        this.isSubmitted = false;

        this.template
            .querySelectorAll('lightning-radio-group')
            .forEach(group => {
                group.value = null;
            });
    }
}