import axios from "axios";

export function getTopics() {

    axios.get("https://dk-nc-news.herokuapp.com/api/topics").then((res) => {
        console.log(res)
        return res
    })
}