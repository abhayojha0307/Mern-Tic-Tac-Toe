import styled from "styled-components"

const Label=styled.span`
    font-size:18px;
    font-weight: bold;
    color:black;
    margin:10px auto;
    `

const SearchBox=styled.form`
    display:flex;
    flex-direction:row;
    border:black solid 1px;
    border-radius:2px;
    font-size:18px;
    font-weight: bold;
    color:black;
    margin:20px auto;
    & input{
        padding:10px;
        font-size:14px;
        border:none;
        outline:none;
        font-weight:bold;
    }
    & button{
        padding:10px;
        font-size:14px;
        border:none;
        color:white;
        background-color:black;
        cursor:pointer;
        outline:none;
        font-weight:bold;
    }
    `;

const City=()=>{
    return(
        <>
        <Label>Find weather of your city</Label>
        <SearchBox>
            <input placeholder="City"/>
            <button>Search</button>
        </SearchBox>
        </>
    )
}
export default City