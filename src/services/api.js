const BASE_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (url, options = {}) => {
    const headers = {
        "Content-Type": "application/json",
        ...options.headers
    };
    console.log(BASE_URL + url);
    const res = await fetch(BASE_URL + url, {...options, headers});
    if(res.status === 204) return null;
    if (res.status ===404) return null;

    if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
    }
    return res.json();
}

// Projects

export const getTags = () => apiFetch("/projects/tags/");

export const getProjects = () => apiFetch("/projects/");

