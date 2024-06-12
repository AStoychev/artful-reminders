import axios from "axios";

const URL = process.env.EXPO_PUBLIC_URL

export async function createTask(taskData) {
    const response = await axios.post(URL + '/task.json', taskData);
    const id = response.data.name;
    return id
}

// async function createTask(title, date, deadline, description, complete, paid) {
//     const response = await axios.post(mode === 'signUp' ? URL_SIGN_UP : URL_SIGN_IN, {
//         title: title,
//         date: date,
//         deadline: deadline,
//         description: description,
//         complete: complete,
//         paid: paid
//     });
//     // const token = response.data.idToken;
//     // return token;

//     return response
// }