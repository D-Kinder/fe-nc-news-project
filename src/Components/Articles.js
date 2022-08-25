import {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import { getArticles } from '../Helpers/Api'
import {useParams} from 'react-router-dom'
import { FilterDropDown, SortByDropDown, OrderDropDown } from './DropDowns'
import ErrorComponent from './ErrorComponent'

const Articles = () => {
    const {topic_slug} = useParams()
    const [allArticles, setAllArticles] = useState([])
    const [chosenTopic, setChosenTopic] = useState(topic_slug)
    const [chosenSortBy, setChosenSortBy] = useState("created_at")
    const [chosenOrder, setChosenOrder] = useState("desc")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)


useEffect(() => {
    getArticles(chosenTopic, chosenSortBy, chosenOrder).then((data) => {
        if(data.data.articles.length > 0){
        setIsLoading(false)
        setAllArticles(data.data.articles)
        } else {
            setError({message: "Request failed with status code 404", code: 404})
            setIsLoading(false)
        }
    })
}, [topic_slug, chosenTopic, chosenSortBy, chosenOrder])

const resetFilters = () => {
    setChosenTopic(topic_slug)
    setChosenSortBy("created_at")
    setChosenOrder("desc")
}
    if(isLoading) return <p>Loading...</p>
    if(error) {
        return <ErrorComponent message = {error.message} code={error.code} />
    }
    return (
        <div className="articles-page">
        <h2 className="articles-title">Articles</h2>
        <div className="topic-filter">
            <p className="text">Refine your search:</p>
            <form>
            <FilterDropDown setChosenTopic={setChosenTopic}/>
            <SortByDropDown setChosenSortBy={setChosenSortBy}/>
            <OrderDropDown setChosenOrder={setChosenOrder}/>
            <br></br>
            <button type="reset" onClick={resetFilters}>Reset Filters</button>
            </form>
        </div>
        <div className="add-article">
            <p>Add Article goes here</p>
        </div>
        <section className="articles">
            {allArticles.map(({article_id, author, body, comment_count, title, topic, votes}) => {
                return (
                    <div className="article-card">
                    <ArticleCard
                        key={article_id}
                        author={author}
                        body={body}
                        comment_count={comment_count}
                        title={title}
                        topic={topic}
                        votes={votes}
                        article_id={article_id}
                        />
                        </div>
                )
            })}
        </section>
        </div>
        
    )
}

export default Articles