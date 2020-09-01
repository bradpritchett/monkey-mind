import React, { useState, useEffect } from 'react';
import "./style.css";

const Timer = () => {

	const [minute, setMinute] = useState(20);
	const [shownSeconds, setShownSeconds] = useState("00");
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(false);

	function toggle() {
		setIsActive(!isActive);
	}

	function reset() {
		setMinute(20)
		setSeconds(0);
		setIsActive(false);
		setShownSeconds("00")
	}
	function handleInputChange(event) {
		// add code to control the components here
		console.log(event)
		const { name, value } = event.target;
		setMinute(value);
	}
	function reduceMinute() {
		console.log("reducing minute")
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

	// useEffect(() => {
	// 	if (isActive && seconds >= 10) {
	// 		setShownSeconds(seconds.toString())
	// 	} else if (isActive && seconds <= 9) {
	// 		let tempNum = "0" + seconds.toString();
	// 		setShownSeconds(tempNum)
	// 	}
	// }, [seconds]);

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
								onChange={handleInputChange}
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
				<div className="col">
					<button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
						{isActive ? 'Pause' : 'Start'}
					</button>
				</div>
			</div>
			<div className="row justify-content-md-center">
				<div className="col">
					<button className="button" onClick={reset}>
						Reset
		  			</button>
				</div>
			</div>
		</div>
	);
};

export default Timer;