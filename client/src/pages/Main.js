import React from "react";
import styled from "styled-components";
import Timer from "../components/Timer";

const Wrapper = styled.div`
background: white;
margin: 115px auto;
opacity: .6;
width: 90%;
`;
function Main(props) {


	return (
		<Wrapper>
			<div className="wrapper container-fluid">
				<Timer />
			</div>
		</Wrapper>

	);
}


export default Main;
