import styled from "styled-components";


export const ImageContainer = styled.img`
width: ${props => props.$width}
height: ${props => props.$height}
border-radius: 2px;
margin-left: ${props => props.$marginLeft}
margin-right:${props => props.$marginRight}
`
