//axios import edildi
import axios from "axios";

async function getData(user_id) {
  try {
    //kullanıcı datası çekildi
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );

    //post datası çekildi
    const { data: post } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    );

    //alınan iki data tek bir obje olarak yazdırıldı
    const newObj = { user, Posts: post };
    console.log(newObj);

    //try-catch ile hata yakalandı
  } catch (error) {
    console.log(error);
  }
}

export default getData;
