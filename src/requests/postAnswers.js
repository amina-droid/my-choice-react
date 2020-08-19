const postAnswers = async (id, answers) => {
    try {
        const response = await fetch(`http://localhost:7000/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
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