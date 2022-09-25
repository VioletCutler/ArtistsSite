import axios from 'axios'

export async function fetchPosts() {
    try {
        const { data } = await axios.get('/api/posts');
        console.log(data)
        return data
    } catch(error) {
        console.error(error)
        return {message: 'Error retrieving posts'}
    }
}