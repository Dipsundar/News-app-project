import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 6,
    catagory: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    catagory: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=5295f10dd2fd4401a0079b10b0d9cef6&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    // let url ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed54ceb9781f4b268ccd8291827863f2";
    // let url ="https://newsapi.org/v2/everything?q=apple&from=2023-03-06&to=2023-03-06&sortBy=popularity&apiKey=ed54ceb9781f4b268ccd8291827863f2";
    this.setState({ loading: false });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  async componentDidMount() {
    // console.log("rcdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=ed54ceb9781f4b268ccd8291827863f2&page=1&pageSize=${this.props.pagesize}`;
    // // let url ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ed54ceb9781f4b268ccd8291827863f2";
    // // let url ="https://newsapi.org/v2/everything?q=apple&from=2023-03-06&to=2023-03-06&sortBy=popularity&apiKey=ed54ceb9781f4b268ccd8291827863f2";
    // this.setState({loading: false});
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
    this.updateNews();
  }

  handlePreviousClick = async () => {
    // console.log('prev');

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=ed54ceb9781f4b268ccd8291827863f2&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parseData = await data.json();

    // this.setState({
    //     page: this.state.page - 1,
    //     articles: parseData.articles,
    //     loading: false
    // })

    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  handleNextClick = async () => {
    // console.log('next');
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=ed54ceb9781f4b268ccd8291827863f2&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url);
    //     let parseData = await data.json();

    //     this.setState({
    //         page: this.state.page + 1,
    //         articles: parseData.articles,
    //         loading: false
    //     })
    // }

    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-3">
        <h1 className="text-dark text-center">D-NEWS - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-3 d-flex justify-content-evenly">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-3 mx-1 my-3" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 46) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}>
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
