import { APIadress } from "../utils/API";

const postAnswers = async (answers) => {
    try {
        const response = await fetch(`${APIadress}/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                answers,
            })
        });
        if (response.status === 500) {
            throw new Error('Сервер не отвечает. Попробуйте позднее');
        }
        const questionsFromResponse = await response.json();
        if (questionsFromResponse) {
            return questionsFromResponse;
        }
    } catch (err) {
        throw err;
    }
}

export default postAnswers;