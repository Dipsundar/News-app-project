import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card">
                <span class="badge text-bg-danger" style={{ borderRadius: '0px'}} >{source}</span>
                    <img src={!imageUrl ? "/logo-d-news.png" : imageUrl} className="card-img-top" height="150px" alt="" style={{ borderRadius: '0px'}} />
                    <div className="card-body">
                        <h5 className="card-title">{title}&nbsp;<span class="badge rounded-pill text-bg-success">New</span></h5>
                        <p className="card-text">{description} .....</p>
                        <p class="card-text"><small class="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
