const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const API_BASE_URL = apiBaseUrl.replace(/\/+$/, "");
