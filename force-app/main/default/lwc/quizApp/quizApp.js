import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestions = [
        {
            id: "Question 1",
            question: "What is the capital of India?",
            answers: {
                a: "New Delhi",
                b: "Mumbai",
                c: "Chennai",
                d: "Kolkata"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 2",
            question: "Which planet is known as the Red Planet?",
            answers: {
                a: "Earth",
                b: "Mars",
                c: "Jupiter",
                d: "Saturn"
            },
            correctAnswer: "b"
        },
        {
            id: "Question 3",
            question: "Who wrote 'Hamlet'?",
            answers: {
                a: "Charles Dickens",
                b: "Mark Twain",
                c: "William Shakespeare",
                d: "Jane Austen"
            },
            correctAnswer: "c"
        },
        {
            id: "Question 4",
            question: "What is the largest mammal in the world?",
            answers: {
                a: "Elephant",
                b: "Giraffe",
                c: "Blue Whale",
                d: "Hippopotamus"
            },
            correctAnswer: "c"
        },
        {
            id: "Question 5",
            question: "What is the chemical symbol for gold?",
            answers: {
                a: "Au",
                b: "Ag",
                c: "Cu",
                d: "Fe"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 6",
            question: "What is the tallest mountain in the world?",
            answers: {
                a: "Mount Everest",
                b: "K2",
                c: "Kangchenjunga",
                d: "Lhotse"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 7",
            question: "What is the largest organ in the human body?",
            answers: {
                a: "Brain",
                b: "Heart",
                c: "Liver",
                d: "Skin"
            },
            correctAnswer: "d"
        },
        {
            id: "Question 8",
            question: "What is the smallest country in the world?",
            answers: {
                a: "Vatican City",
                b: "Monaco",
                c: "San Marino",
                d: "Liechtenstein"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 9",
            question: "What is the currency of Japan?",
            answers: {
                a: "Yen",
                b: "Dollar",
                c: "Euro",
                d: "Pound"
            },
            correctAnswer: "a"
        },
        {
            id: "Question 10",
            question: "What is the largest desert in the world?",
            answers: {
                a: "Sahara Desert",
                b: "Arabian Desert",
                c: "Gobi Desert",
                d: "Kalahari Desert"
            },
            correctAnswer: "a"
        }
    ];

    changeHandler(event) {
        console.log("Name: " + event.target.name);
        console.log("Value: " + event.target.value);
    }
}