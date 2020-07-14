import axios from 'axios';

// Removed the Unsplash related configurations and Axios has it in all places, Pre customized version of Axios with config.
// Export the Instance of the Axios with details.
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID vOCj8-taNb5WXTlgTiLHbWLQgGvU2IEHkLW4UiIxMWM'
    }
});