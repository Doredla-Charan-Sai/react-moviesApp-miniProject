import styled from 'styled-components'

export const SearchDiv = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background-color: black;
`
export const SearchContentDiv = styled.div`
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const InitialSearchPara = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const NoVideoImg = styled.img`
  height: 200px;
  width: 200px;
`
export const SearchResultUl = styled.ul`
  list-style-type: none;
  padding: 30px;
  margin: 0px;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const ResultListItem = styled.li`
  height: 300px;
  width: 18.5%;
  padding: 20px;
`
export const ThumbnailImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`
