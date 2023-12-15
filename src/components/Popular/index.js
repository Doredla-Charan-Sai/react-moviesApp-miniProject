import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import FailureView from '../FailureView'
import LoadingView from '../LoadingView'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class Popular extends Component {
  state = {
    allVideosList: [],
    getVideosStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getSearchVideosApiCall()
  }

  getSearchVideosApiCall = async () => {
    this.setState({getVideosStatus: apiStatusConstants.inProgress})
    const searchApiUrl = `https://apis.ccbp.in/movies-app/popular-movies`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(searchApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedSearchResult = data.results.map(eachItem => ({
        ...eachItem,
        backdropPath: eachItem.backdrop_path,
        posterPath: eachItem.poster_path,
      }))
      this.setState({
        getVideosStatus: apiStatusConstants.success,
        allVideosList: formattedSearchResult,
      })
    } else {
      this.setState({getVideosStatus: apiStatusConstants.failure})
    }
  }

  retry = () => {
    this.getSearchVideosApiCall()
  }

  renderCasesForVideos = () => {
    const {getVideosStatus} = this.state
    switch (getVideosStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  renderLoaderView = () => <LoadingView />

  renderFailureView = () => <FailureView onRetry={this.retry} />

  renderSuccessView = () => {
    const {allVideosList} = this.state
    return (
      <ul className="search-result-Ul">
        {allVideosList.map(eachItem => (
          <li className="result-list-item" key={eachItem.id}>
            <Link to={`/movies/${eachItem.id}`}>
              <img
                className="thumbnail-img"
                src={eachItem.posterPath}
                alt={eachItem.title}
              />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="search-div">
        <Header />
        <h1 className="top-head" style={{marginLeft: '50px'}}>
          Explore the Popular Movies Here
        </h1>
        <>{this.renderCasesForVideos()}</>
        <Footer />
      </div>
    )
  }
}
export default Popular
