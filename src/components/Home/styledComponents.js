import styled from 'styled-components'

export const TopDiv = styled.div`
  background-image: url(${props => `${props.backimg}`});
  height: 70vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TopHead = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
`
export const PosterDiv = styled.div`
  padding: 50px;
  width: 50%;
`
export const TopPara = styled.p`
  color: white;
  font-family: 'Roboto';
  font-size: 15px;
`
export const PlayBtn = styled.button`
  color: #000000;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
  height: 32px;
  width: 120px;
  background-color: #ffffff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const DownDiv = styled.div`
  padding: 50px;
  background-color: black;
`
export const DownHead = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const FailureDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;
  border-radius: 10px;
  height: 100%;
`
export const FailureImg = styled.img`
  height: 70px;
  width: 70px;
`
export const SlideItem = styled.li`
  height: 300px;
  width: 22%;
  padding: 10px;
`
export const SlideImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`
