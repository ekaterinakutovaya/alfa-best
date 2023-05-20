export default async function handler(req, res) {
  // const jsonData = await getData();
  // res.status(200).json(jsonData);


}

export async function getData(endpoint, locale) {
  try {
    const response = await fetch(`${process.env.NEXT_APP_API_URL}${endpoint}`, {
      headers: {
        "Accept-Language": locale
      }
    });
    const data = await response.json(); 
       
    return data;
  } catch (error) {
    console.log(error);
    
    return {}
  }
}
