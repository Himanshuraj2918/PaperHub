import axios from "axios";

export const getNotes = async(branch, semester) => {
    try {
        const response = await axios.get(`https://paperhub-yspm.onrender.com/api/v1/notes/get-notes/${branch}`, {
            params: {
                semester: semester
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
