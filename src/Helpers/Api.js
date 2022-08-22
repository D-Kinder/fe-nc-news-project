import axios from "axios";

export function getTopics() {

    return axios.get("https://dk-nc-news.herokuapp.com/api/topics").then((res) => {
        return res
    })
}