import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    questions = [
        {
            id: 'Question 1',
            question: 'What is the capital of India?',
            correctAnswer: 'a',
            selectedValue: null,
            options: [
                { label: 'a. New Delhi', value: 'a', className: 'slds-p-around_x-small' },
                { label: 'b. Mumbai', value: 'b', className: 'slds-p-around_x-small' },
                { label: 'c. Chennai', value: 'c', className: 'slds-p-around_x-small' },
                { label: 'd. Kolkata', value: 'd', className: 'slds-p-around_x-small' }
            ]
        },
        {
            id: 'Question 2',
            question: 'Which planet is known as the Red Planet?',
            correctAnswer: 'b',
            selectedValue: null,
            options: [
                { label: 'a. Earth', value: 'a', className: 'slds-p-around_x-small' },
                { label: 'b. Mars', value: 'b', className: 'slds-p-around_x-small' },
                { label: 'c. Jupiter', value: 'c', className: 'slds-p-around_x-small' },
                { label: 'd. Saturn', value: 'd', className: 'slds-p-around_x-small' }
            ]
        },
        {
            id: 'Question 3',
            question: 'Who wrote "Romeo and Juliet"?',
            correctAnswer: 'c',
            selectedValue: null,
            options: [
                { label: 'a. Charles Dickens', value: 'a', className: 'slds-p-around_x-small' },
                { label: 'b. Mark Twain', value: 'b', className: 'slds-p-around_x-small' },
                { label: 'c. William Shakespeare', value: 'c', className: 'slds-p-around_x-small' },
                { label: 'd. Jane Austen', value: 'd', className: 'slds-p-around_x-small' }
            ]
        },
        {
            id: 'Question 4',
            question: 'What is the largest ocean on Earth?',
            correctAnswer: 'a',
            selectedValue: null,
            options: [
                { label: 'a. Pacific Ocean', value: 'a', className: 'slds-p-around_x-small' },
                { label: 'b. Atlantic Ocean', value: 'b', className: 'slds-p-around_x-small' },
                { label: 'c. Indian Ocean', value: 'c', className: 'slds-p-around_x-small' },
                { label: 'd. Arctic Ocean', value: 'd', className: 'slds-p-around_x-small' }
            ]
        },
        {
            id: 'Question 5',
            question: 'What is the chemical symbol for Gold?',
            correctAnswer: 'b',
            selectedValue: null,
            options: [
                { label: 'a. Ag', value: 'a', className: 'slds-p-around_x-small' },
                { label: 'b. Au', value: 'b', className: 'slds-p-around_x-small' },
                { label: 'c. Gd', value: 'c', className: 'slds-p-around_x-small' },
                { label: 'd. Go', value: 'd', className: 'slds-p-around_x-small' }
            ]
        }
    ];

    correctAnswers = 0;
    isSubmitted = false;

    /* Disable submit if any unanswered */
    get allNotSelected() {
        return this.questions.some(q => !q.selectedValue);
    }

    /* Score color */
    get scoreClass() {
        return this.correctAnswers === this.questions.length
            ? 'slds-text-heading_medium slds-text-color_success slds-m-bottom_medium'
            : 'slds-text-heading_medium slds-text-color_error slds-m-bottom_medium';
    }

    /* Handle option select */
    changeHandler(event) {
        const { name, value } = event.target;

        this.questions = this.questions.map(q =>
            q.id === name
                ? { ...q, selectedValue: value }
                : q
        );
    }

    /* Submit quiz */
    submitHandler() {
        this.isSubmitted = true;
        let score = 0;

        this.questions = this.questions.map(q => {
            const updatedOptions = q.options.map(opt => {
                let className = 'slds-p-around_x-small';

                // Correct answer → green
                if (opt.value === q.correctAnswer) {
                    className += ' slds-theme_success';
                }
                // Wrong selected → red
                else if (opt.value === q.selectedValue) {
                    className += ' slds-theme_error';
                }

                return { ...opt, className };
            });

            if (q.selectedValue === q.correctAnswer) {
                score++;
            }

            return { ...q, options: updatedOptions };
        });

        this.correctAnswers = score;
    }

    /* Reset quiz */
    resetHandler() {
        this.questions = this.questions.map(q => ({
            ...q,
            selectedValue: null,
            options: q.options.map(opt => ({
                ...opt,
                className: 'slds-p-around_x-small'
            }))
        }));

        this.correctAnswers = 0;
        this.isSubmitted = false;
    }
}
