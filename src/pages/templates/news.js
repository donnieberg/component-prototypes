import dummyData from '../../dummyData/data.js'

const News = () => {
    return (
        <div className="news df-grow bg-white mrl border-rounded pam">
            <h2 className="slds-text-heading_medium">Top News Stories</h2>
            <ul className="">
                {dummyData.news.map(news => {
                    return (
                        <li className="pvm slds-border_bottom">
                            <a className="slds-text-heading_small">{news.title}</a>
                            <p>{news.content}</p>
                            <a href={news.url}>{news.source} | {news.timestamp}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default News;

