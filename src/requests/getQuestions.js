const getQuestions = async () => {
    try {
        const response = await fetch(`http://localhost:7000/questions`);
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

export default getQuestions;