import axios from "axios";

export function getTopics() {
    return axios.get("https://dk-nc-news.herokuapp.com/api/topics")
}

export function getArticles(chosenTopic, chosenSortBy, chosenOrder) {
    return axios.get("https://dk-nc-news.herokuapp.com/api/articles",
    {params: {topic: chosenTopic, sort_by: chosenSortBy, order: chosenOrder}})
}

export function getArticleById (article_id) {
    return axios.get(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}`)
}

export function getArticlesByTopic(topic) {
    return axios.get(`https://dk-nc-news.herokuapp.com/api/articles?topic=${topic}`)
}

export function changeArticleVotes (article_id, voteChange) {
    return axios.patch(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}`, 
    {
        inc_votes: voteChange
    })
}

export function getCommentsByArticleId (article_id) {
    return axios.get(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}/comments`)
}

export function addCommentToArticle (article_id, newComment) {
    return axios.post(`https://dk-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    newComment)
}