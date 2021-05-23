import styled from 'styled-components'

export const SectionWrapper = styled.div `
    background: url('https://templatemo.com/templates/templatemo_558_klassy_cafe/assets/images/reservation-bg.jpg');
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    overflow:hidden;
`
export const SectionContent = styled.div `
    width: 80%;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
export  const SectionInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-self: center;
    max-width: 50%;
    margin: 0 35px 0 0;

    #text {
        color: #fff;
        margin: 0 0 20px 0;
    }

    @media screen and (max-width: 1000px) {
        max-width: 100%;
        margin: 0;
    }
`
export const SectionCards = styled.div `
    padding: 50px 0;
    width: 100%;
    display: flex;
    color: #000;
    
    @media screen and (max-width: 1000px) {
            flex-direction: column;
            }

    #item {
        width: 50%;
        margin: 15px;
         @media screen and (max-width: 1000px) {
            flex-direction: column;
            width: 100% !important;

            margin: 45px 0 0 0 !important;
            }
    }
`
export const SectionForm = styled.div `
    justify-content: center;
    display: flex;
    max-width: 50%;

    @media screen and (max-width: 1000px) {
        max-width: 100%;
    }
`
export const FormWrapper = styled.div `
    background-color: #fff;
    width: 600px;
    border-radius: 5px;

    @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 0;
    }
`
export const FormContent = styled.div `
    /* width: 80%; */
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 45px;
    
    
`

export const InputWrapper = styled.div `
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 20px;
    justify-content: space-between;

    input {
        width: 41%;
        height: 35px;
        margin: 10px 0 ;
        border-radius: 3px;
        border: 1px solid #212529;
        padding: 5px;
       
            @media screen and (max-width: 1000px) {
                 width: 100%;
            }
    }
    #message {
        width: 100%;
        padding-bottom: 100px;
    }
`

export const BtnWrapper = styled.div `
    background-color: #fb5849;
    display:flex;
    width: 100%;
    justify-content: center;
    border-radius: 3px;
    font-weight: 600;
    margin-top: 15px;
    cursor: pointer;

   p {
       color: #fff;
       font-size: 14px;
   } 
`