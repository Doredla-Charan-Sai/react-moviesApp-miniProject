import styled from 'styled-components'

export const HeaderDiv = styled.div`
  background-color: black;
  opacity: 0.6;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const ImgRoutes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`
export const SearchAccountDiv = styled(ImgRoutes)`
  margin-left: 0;
  margin-right: 40px;
`
export const RouteList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`
export const RouteItem = styled.li`
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  margin-right: 15px;
`
export const SearchCont = styled.div`
  background-color: transparent;
  border: 1px solid #e2e8f0;
  height: 30px;
  width: 80%;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  margin-right: 20px;
`
export const SearchInput = styled.input`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 13px;
  width: 80%;
  padding: 5px;
`
export const SearchBtn = styled.button`
  border-left: '1px solid #e2e8f0';
  background-color: #383838;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  outline: none;
  width: 20%;
`
export const SearchOnlyBtn = styled(SearchBtn)`
  background-color: transparent;
  border: none;
  margin-right: 20px;
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`
