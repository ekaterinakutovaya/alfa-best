import process from "../../next.config";

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


export async function postCustomerService(data) {
    try {
        const res = await fetch(`${process.env.NEXT_APP_API_URL}services_query`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "ru"
            },
            body: JSON.stringify(data)
        })
        return res;
    } catch (error) {
        return error
    }
}

export async function postCustomerContacts(data) {
    try {
        const res = await fetch(`${process.env.NEXT_APP_API_URL}customer_contacts`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "ru"
            },
            body: JSON.stringify(data)
        })
        return res;

    } catch (error) {
        return error
    }
}


