import {useState, useEffect} from 'react'
import ArticleCard from './ArticleCard'
import { getArticles } from '../Helpers/Api'
import {useParams} from 'react-router-dom'
import { FilterDropDown, SortByDropDown, OrderDropDown } from './DropDowns'

const Articles = () => {
    const {topic_slug} = useParams()
    const [allArticles, setAllArticles] = useState([])
    const [chosenTopic, setChosenTopic] = useState(topic_slug)
    const [chosenSortBy, setChosenSortBy] = useState("created_at")
    const [chosenOrder, setChosenOrder] = useState("desc")


useEffect(() => {
    getArticles(chosenTopic, chosenSortBy, chosenOrder).then((data) => {
        setAllArticles(data.data.articles)
    })
}, [topic_slug, chosenTopic, chosenSortBy, chosenOrder])

const resetFilters = () => {
    setChosenTopic(topic_slug)
    setChosenSortBy("created_at")
    setChosenOrder("desc")
}

    return (
        <div className="articles-page">
        <h4 className="articles-title">Articles</h4>
        <div className="topic-filter">
            <p>Refine your search:</p>
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
                )
            })}
        </section>
        </div>
        
    )
}

export default Articles