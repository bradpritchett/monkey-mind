import React, { useState, useEffect } from 'react';
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

const Timer = (params) => {
	const gong = new Audio(`${process.env.PUBLIC_URL}/sounds/gong.wav`);
	const [minute, setMinute] = useState(20);
	const [shownSeconds, setShownSeconds] = useState("00");
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const { isAuthenticated, user } = useAuth0();
	function toggle() {
		setIsActive(!isActive);
	}
	function save() {
		if (isAuthenticated) {

			API.saveSession({
				id: params.user.id,
				sessions: {
					date: new Date(Date.now()),
					sessionDuration: seconds,
					reportedAttention: 12,
					reportedMindfullness: 3

				}
			})
		}
	}
	function reset() {
		setMinute(20);
		setIsActive(false);
		setShownSeconds("00")
	}
	function handleInputChange(event) {
		const { value } = event.target;
		parseInt(value);
		setMinute(value);
	}
	function handleSecondChange(event) {
		const { value } = event.target;
		setShownSeconds(value)
	}
	function reduceMinute() {
		if (minute !== 0) {
			setMinute(minute - 1);
		}
	}
	function playGong() {
		gong.play();
		toggle()
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
			if (int === 0 && minute == 0) {
				playGong();
				toggle();
			}
			else if (int == 0 && minute !== 0) {
				reduceMinute();
				setShownSeconds(59)
			}
			else if (int > 10) {
				int = int - 1;
				setShownSeconds(int)
				console.log(int)
			} else if (int <= 10 && int > 0) {
				console.log(int)
				int = int - 1;
				setShownSeconds("0" + int)
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
						<button className={`btn  ${isActive ? 'btn-info' : 'btn-primary'}`} onClick={playGong}>
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