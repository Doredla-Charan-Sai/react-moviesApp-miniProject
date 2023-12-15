import styled from 'styled-components'

export const LoginDiv = styled.div`
  background-image: url('https://res.cloudinary.com/dksp7vfwl/image/upload/v1701672406/Movies%20App/netfilx_1_jcszup.png');
  height: 100vh;
  padding: 50px;
`
export const FormContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`
export const FormDiv = styled.div`
  border-radius: 10px;
  background-color: #0c0b10;
  opacity: 85%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 30%;
`
export const WebsiteLogo = styled.img`
  width: 160px;
  height: 40px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const Label = styled.label`
  color: white;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
  padding: 5px;
  background-color: #333333;
`
export const LogInBtn = styled.button`
  height: 30px;
  width: 100%;
  background-color: red;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
`
export const ErrorText = styled.p`
  color: red;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 10px;
`
export const LoginHead = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`
