export const getData = () => {
    const rawData = localStorage.getItem('todoList');

    if (rawData === null) {
        return undefined;
    }

    return  JSON.parse(rawData);
};

export const saveData = (todoList) => {
    const stringifiedData = JSON.stringify(todoList);

    localStorage.setItem('todoList', stringifiedData);
};