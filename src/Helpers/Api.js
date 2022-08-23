import axios from "axios";

export function getTopics() {
    return axios.get("https://dk-nc-news.herokuapp.com/api/topics")
    // .then((res) => {
    //     return res
    // })
}

export function getArticles() {
    return axios.get("https://dk-nc-news.herokuapp.com/api/articles")
    // .then((res) => {
    //     return res
    // })
}

export function getArticleById (article_id) {
    return axios.get(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}`)
    // .then((res) => {
    //     return res
    // })
}

export function getArticlesByTopic(topic) {
    return axios.get(`https://dk-nc-news.herokuapp.com/api/articles?topic=${topic}`)
    // .then((res) => {
    //     return res
    // })
}

export function changeArticleVotes (article_id, voteChange) {
    return axios.patch(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}`, 
    {
        inc_votes: voteChange
    })
    // .then((res) => {
    //     return res
    // })
}