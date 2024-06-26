import axios from "axios";

const URL = process.env.EXPO_PUBLIC_URL;

export async function createTask(taskData) {
    const response = await axios.post(URL + '/task.json', taskData);
    const id = response.data.name;
    return id;
};

export async function editTask(id, taskData) {
    const response = await axios.put(URL + `/task/${id}.json`, taskData);
    return response.data;
};

export async function deleteTask(id) {
    axios.delete(URL + `/task/${id}.json`);
};

export async function getAll() {
    const response = await axios.get(URL + '/task.json');
    const tasks = [];

    for (const key in response.data) {
        const taskObject = {
            id: key,
            title: response.data[key].title,
            date: response.data[key].date,
            deadline: response.data[key].deadline,
            description: response.data[key].description,
            complete: response.data[key].complete,
            paid: response.data[key].paid,
        };
        tasks.push(taskObject);
    }
    const reverseTasks = tasks.reverse();

    return reverseTasks;
};