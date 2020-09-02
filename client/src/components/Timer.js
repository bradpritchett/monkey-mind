import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
const Timer = () => {

	const [minute, setMinute] = useState(20);
	const [shownSeconds, setShownSeconds] = useState("00");
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const { isAuthenticated } = useAuth0();
	function toggle() {
		setIsActive(!isActive);
	}
	function save() {

	}
	function reset() {
		setMinute(20);
		setIsActive(false);
		setShownSeconds("00")
	}
	function handleInputChange(event) {
		const { name, value } = event.target;
		setMinute(value);
	}
	function handleSecondChange(event) {
		const { name, value } = event.target;
		setShownSeconds(value)
	}
	function reduceMinute() {
		setMinute(minute - 1);
	}
	useEffect(() => {
		let interval = null;
		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [isActive, seconds]);

	useEffect(() => {
		if (isActive) {
			let int = parseInt(shownSeconds);
			if (int === 0) {
				reduceMinute();
				setShownSeconds(59)
			}
			else if (int > 10) {
				let sub = int - 1;
				setShownSeconds(sub)
			} else if (int <= 10 && int > 0) {
				let sub = int - 1;
				setShownSeconds("0" + sub)
			}
		}
	}, [seconds]);

	return (
		<div className="app">
			<div className="row">
				<div className="col">
					<form className="time">
						<span>
							<input
								onChange={handleInputChange}
								type="text"
								placeholder="00"
								name="minute"
								value={minute}
								maxLength="2"
								className="minute"
							/>
						</span>
						:
						<span>
							<input
								onChange={handleSecondChange}
								type="text"
								placeholder="00"
								className="seconds"
								name="second"
								value={shownSeconds}
								maxLength="2"
							/>

						</span>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col ">
					<div className="btn-group btn-group" role="group" aria-label="timer">
						<button type="button" className="btn btn-warning" onClick={reset}>
							Reset
		  			</button>
						<button className={`btn  ${isActive ? 'btn-info' : 'btn-primary'}`} onClick={toggle}>
							{isActive ? 'Pause' : 'Start'}
						</button>
						<button className="btn btn-success" onClick={save} disabled={isAuthenticated ? false : true} >
							save
		  			</button>
					</div>

				</div>
			</div>
		</div >
	);
};

export default Timer;