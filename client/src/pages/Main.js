import React from "react";
import styled from "styled-components";
import Timer from "../components/Timer";

const Wrapper = styled.div`
background: white;
margin: 30px auto;
opacity: .85;
max-width: 1000px;
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
