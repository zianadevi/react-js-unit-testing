export const authHeaderInterceptor = (config) => {
    if (config.url !== '/login') {
        config.headers.Authorization = 'Bearer 123';
    }
    return config;
}