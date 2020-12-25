import Axios from 'axios';

export async function getOperations (view, limitData) {
    const url = `https://budget-server-alkemy.herokuapp.com/api/get/${view}/${limitData}/`;

    try {
        const res = await Axios.get(url);
        const data = res.data;

        return data;
    } catch (error) {
        console.log(error);        
    };
};