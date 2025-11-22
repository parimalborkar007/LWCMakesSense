import { LightningElement, track } from 'lwc';

export default class ZodiacTrait extends LightningElement {
    @track userProfile = {};
    username;
    userBirthDate;
    resultsReceived = false;

    zodiacTraits = [
        { sign: 'Aries', from: '03-21', to: '04-19', emoji: '♈', trait: 'You are a Courageous, determined, confident, enthusiastic, optimistic, honest, passionate person' },
        { sign: 'Taurus', from: '04-20', to: '05-20', emoji: '♉', trait: 'You are a Reliable, patient, practical, devoted, responsible, stable person' },
        { sign: 'Gemini', from: '05-21', to: '06-20', emoji: '♊', trait: 'You are a Gentle, affectionate, curious, adaptable, quick learner person' },
        { sign: 'Cancer', from: '06-21', to: '07-22', emoji: '♋', trait: 'You are a Tenacious, imaginative, loyal, emotional, sympathetic, persuasive person' },
        { sign: 'Leo', from: '07-23', to: '08-22', emoji: '♌', trait: 'You are a Creative, passionate, generous, cheerful, humorous person' },
        { sign: 'Virgo', from: '08-23', to: '09-22', emoji: '♍', trait: 'You are a Loyal, analytical, kind, hardworking, practical person' },
        { sign: 'Libra', from: '09-23', to: '10-22', emoji: '♎', trait: 'You are a Cooperative, fair-minded, diplomatic person' },
        { sign: 'Scorpio', from: '10-23', to: '11-21', emoji: '♏', trait: 'You are a Resourceful, brave, passionate, stubborn person' },
        { sign: 'Sagittarius', from: '11-22', to: '12-21', emoji: '♐', trait: 'You are a Generous, idealistic, great sense of humor person' },
        { sign: 'Capricorn', from: '12-22', to: '01-19', emoji: '♑', trait: 'You are a Responsible, disciplined, self-control person' },
        { sign: 'Aquarius', from: '01-20', to: '02-18', emoji: '♒', trait: 'You are a Progressive, original, independent person' },
        { sign: 'Pisces', from: '02-19', to: '03-20', emoji: '♓', trait: 'You are a Compassionate, artistic, intuitive person' }
    ];

    handleNameChange(event) {
        this.username = event.target.value;
    }

    handleDateChange(event) {
        this.userBirthDate = event.target.value;
    }

    handleSubmit() {
        if (!this.userBirthDate) return;

        let userDOB = new Date(this.userBirthDate);
        const userMonth = userDOB.getMonth() + 1;
        const userDay = userDOB.getDate();

        this.userProfile = this.checkZodiacSign(userMonth, userDay);
        this.resultsReceived = this.userProfile ? true : false;
    }

    checkZodiacSign(month, day) {
        for (let sign of this.zodiacTraits) {
            const [fromMonth, fromDay] = sign.from.split('-').map(Number);
            const [toMonth, toDay] = sign.to.split('-').map(Number);

            if (fromMonth < toMonth) {
                // Normal case (within same year)
                if ((month === fromMonth && day >= fromDay) ||
                    (month === toMonth && day <= toDay) ||
                    (month > fromMonth && month < toMonth)) {
                    return sign;
                }
            } else {
                // Cross-year case (e.g., Capricorn, Aquarius, Pisces)
                if ((month === fromMonth && day >= fromDay) ||
                    (month === toMonth && day <= toDay) ||
                    (month > fromMonth || month < toMonth)) {
                    return sign;
                }
            }
        }
        return null;
    }
}
