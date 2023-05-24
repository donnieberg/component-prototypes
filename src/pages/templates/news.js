import dummyData from '../../dummyData/data.js'
import classnames from 'classnames';

const News = ({ linkStyle, linkColor }) => {
    return (
        <div className="news df-grow bg-white mrl border-rounded pam">
            <h2 className="slds-text-heading_medium">Top News Stories</h2>
            <ul className="">
                {dummyData.news.map(news => {
                    return (
                        <li className="pvm slds-border_bottom">
                            <a href="#" className={classnames("slds-text-heading_small", {
                                'underline': linkStyle == 'Always',
                                'bold': linkStyle == 'bold',
                                'blue-40': linkColor == 'blue-40',
                                'blue-50': linkColor == 'blue-50',
                                })}>
                                {news.title}
                            </a>
                            <p>{news.content}</p>
                            <a href={news.url} className={classnames("", {
                                'underline': linkStyle == 'Always',
                                'bold': linkStyle == 'bold',
                                'blue-40': linkColor == 'blue-40',
                                'blue-50': linkColor == 'blue-50',
                                })}>
                                {news.source} | {news.timestamp}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default News;

