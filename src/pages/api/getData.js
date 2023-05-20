export default async function handler(req, res) {

  
  try {
    const response = await fetch(`${process.env.NEXT_APP_API_URL}${endpoint}`, {
      headers: {
        "Accept-Language": locale
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("Internal Server Error.");
  }

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
