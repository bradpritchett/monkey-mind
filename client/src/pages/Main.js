import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
background: white;
margin: 20px 0;
opacity: .75;
height: 90%;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
overflow:hidden;
z-index:-1;	
`;
function Main(props) {


	return (
		<Wrapper>
			<div className="wrapper">
				asdf
			</div>
		</Wrapper>

	);
}


export default Main;
