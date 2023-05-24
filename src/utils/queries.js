export async function postCustomerService(data, endpoint) {
    try {
        console.log(data);
        const request = await fetch(`${process.env.NEXT_APP_API_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                "Accept-Language": "ru"
            },
            body: {
                "service_id": 0,
                "full_name": "test3",
                "phone": "test3"
            }
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)));
    } catch (error) {

    }
}