import styled from 'styled-components'

const midnightBlue = '#2E45BA'

const CalculateButton = styled.button`
    background-color: ${midnightBlue};
    color: white;
    border-radius: 12px;
    font-size: 20px;
    padding: 10px;
    border: 2px black solid;
    
    :hover {
        background-color: black;
        height: 50px;
        width: 180px
    }
`

export {midnightBlue, CalculateButton}