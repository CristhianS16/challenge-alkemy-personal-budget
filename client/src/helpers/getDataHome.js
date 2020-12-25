import Axios from 'axios';

// Service for home
export async function getTotal () {
    const urlTotalIncome = 'https://budget-server-alkemy.herokuapp.com/api/get/lastmovements/totalincome';
    const urlTotalExpenses = 'https://budget-server-alkemy.herokuapp.com/api/get/lastmovements/totalexpenses';
    try {
      const resTotalIncome = await Axios.get(urlTotalIncome);
      const totalIncome = resTotalIncome.data[0].totalIncome;
      const resTotalExpenses = await Axios.get(urlTotalExpenses);
      const totalExpenses = resTotalExpenses.data[0].totalExpenses;
      const movements = await getLastMovements();

      return {totalIncome, totalExpenses, movements};
    } catch (error) {
      console.log(error);
    }
}
async function getLastMovements () {
    const url = 'https://budget-server-alkemy.herokuapp.com/api/get/lastmovements';
    try {
        const res = await Axios.get(url);
        const movements = res.data;
        
        return movements;
    } catch (error) {
        console.log(error);
    };
};
// End service for home