const getUser = async id => {
    try {
        const response = await fetch(`http://localhost:7000/user?id=${id}`);
        if (response.status === 404) {
            throw new Error('Такого пользователя не существует');
        } 
        if (response.status === 500) {
            throw new Error('Сервер не отвечает. Попробуйте позднее');
        }
        const userFromResponse = await response.json();
        if (userFromResponse) {
            return userFromResponse;
        } else {
            throw new Error('Пользователя нет');
        }
    } catch (error) {
        throw error;
    } 
};

export default getUser;