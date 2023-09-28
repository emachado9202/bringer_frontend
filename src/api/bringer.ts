
export const generateToken= async (login: string, password: string) => {
    const response = await fetch(`${process.env.API_URL}/generate_token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password }),
    });
    const data = await response.json();

    return data;
}

export const fetchTrackingData= async(tracking_number: string) => {
    const response = await fetch(`${process.env.API_URL}/tracking_parcel?tracking_number=${tracking_number}`);
    const data = await response.json();

    return data;
}