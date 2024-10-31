import axios from "axios";

export const getNotes = async(branch, semester) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/notes/get-notes/${branch}`, {
            params: {
                semester: semester
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
