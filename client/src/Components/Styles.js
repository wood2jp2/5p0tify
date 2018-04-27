import styled from 'styled-components'

const midnightBlue = '#2E45BA'

const HeaderWrapper = styled.section`
    background-color: ${midnightBlue};
    margin-bottom: 2%;
    color: white;
    text-outline: 20px black;
    border-bottom: 4px solid black;
    margin-bottom: 20px;
    padding: 20px;
    height: 18%;
    font-size: 30px;

    .App-title, .App-subtitle {
        -webkit-text-stroke: 2px black;
    }
    > div {
        margin: 0
    }
`

const CalculateButton = styled.button`
    background-color: ${midnightBlue};
    color: white;
    border-radius: 12px;
    font-size: 20px;
    padding: 10px;
    border: 2px black solid;
    margin-bottom: 40px;
    
    :hover {
        background-color: black;
        height: 50px;
        width: 260px;
        border: solid 6px midnightBlue;
    }
`

const GraphWrapper = styled.div`
    border-bottom: 3px dashed midnightBlue;
    margin-bottom: 20px;
    padding-bottom: 20px
`

export {midnightBlue, CalculateButton, GraphWrapper, HeaderWrapper}