import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import './index.css'

class Header extends Component {
  state = {search: false, activeItem: 'home'}

  onClickSearchBtn = () => {
    this.setState({search: true})
  }

  onSearchInput = event => {
    const {searchInputEvent} = this.props
    searchInputEvent(event.target.value)
  }

  onSearching = () => {
    const {onClickSearchIcon} = this.props
    onClickSearchIcon()
  }

  onHomeItem = () => {
    this.setState({activeItem: 'home'})
  }

  onPopularItem = () => {
    this.setState({activeItem: 'popular'})
  }

  render() {
    const {search, searchInput, activeItem} = this.state
    return (
      <div className="header-div">
        <div className="img-routes">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dksp7vfwl/image/upload/v1701673304/Movies%20App/Group_7399_z86vw3.png"
              alt="website logo"
            />
          </Link>
          <ul className="route-list">
            <Link to="/">
              <li
                className="route-item"
                key="home"
                onClick={this.onHomeItem}
                style={{
                  textDecoration: activeItem === 'home' ? 'underline' : 'none',
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/popular">
              <li
                className="route-item"
                key="popular"
                onClick={this.onPopularItem}
                style={{
                  textDecoration:
                    activeItem === 'popular' ? 'underline' : 'none',
                }}
              >
                Popular
              </li>
            </Link>
          </ul>
        </div>
        <div className="search-account-div">
          {search ? (
            <div className="search-cont">
              <input
                className="search-input"
                type="search"
                onChange={this.onSearchInput}
                placeholder="search"
                value={searchInput}
              />
              <button
                className="search-btn"
                onClick={this.onSearching}
                testid="searchButton"
                type="button"
              >
                <HiOutlineSearch
                  size="20px"
                  color="white"
                  testid="searchButton"
                />
              </button>
            </div>
          ) : (
            <Link to="/search">
              <button
                className="search-only-btn"
                type="button"
                testid="searchButton"
              >
                <HiOutlineSearch
                  size={20}
                  color="white"
                  testid="searchButton"
                  onClick={this.onClickSearchBtn}
                />
              </button>
            </Link>
          )}
          <Link to="/account">
            <img
              className="profile-image"
              src="https://res.cloudinary.com/dksp7vfwl/image/upload/v1701672514/Movies%20App/Avatar_f4h7dy.png"
              alt="profile"
            />
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
