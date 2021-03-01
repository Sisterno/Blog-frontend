export function getStrapiURL(path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://blog-backend-sisterno.herokuapp.com"
        }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
    const requestUrl = getStrapiURL(path);
    console.log(requestUrl)
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}