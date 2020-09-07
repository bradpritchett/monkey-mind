import React, { useState, useEffect } from 'react';
import "./style.css";
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";
import LoginButton from "./LoginButton";

const Timer = (params) => {
	const gong = new Audio(`${process.env.PUBLIC_URL}/sounds/gong.wav`);
	const [minute, setMinute] = useState(20);
	const [shownSeconds, setShownSeconds] = useState("00");
	const [reportedAttention, setReportedAttention] = useState(1);
	const [reportedMindfullness, setReportedMindfullness] = useState(1);
	const [seconds, setSeconds] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isActive, setIsActive] = useState(false);
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);

	const handleShow = () => {
		processDuration();
		setShow(true);
	};
	const { isAuthenticated, user } = useAuth0();

	function toggle() {
		setIsActive(!isActive);
	};

	function save() {
		if (isAuthenticated) {
			API.saveSession({
				id: params.user.id,
				sessions: {
					date: new Date(Date.now()),
					sessionDuration: duration,
					reportedMindfullness: reportedMindfullness,
					reportedAttention: reportedAttention

				}
			})
				.then(
					setShow(false),
					reset()
				);
		}
	};

	function processDuration() {
		var time = seconds / 60;
		time = Math.ceil(time);
		setDuration(time);
	};

	function reset() {
		setMinute(20);
		setIsActive(false);
		setShownSeconds("00")
	};

	function handleInputChange(event) {
		const { value } = event.target;
		parseInt(value);
		setMinute(value);
	};

	function handleSecondChange(event) {
		const { value } = event.target;
		setShownSeconds(value)
	};

	function reduceMinute() {
		if (minute !== 0) {
			setMinute(minute - 1);
		}
	};

	function playGong() {
		gong.play();
	};

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
				processDuration();
			}
			else if (int == 0 && minute !== 0) {
				reduceMinute();
				setShownSeconds(59)
			}
			else if (int > 10) {
				int = int - 1;
				setShownSeconds(int)
			} else if (int <= 10 && int > 0) {
				int = int - 1;
				setShownSeconds("0" + int)
			}
		}
	}, [seconds]);
	const renderSave = () => {
		if (isAuthenticated) {
			return <Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Saving Session</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form noValidate>
						<Form.Group as={Row}>

						</Form.Group>
						<Form.Group as={Row}>
							<Form.Text className="text-muted center">
								You meditated for {duration} minutes. On a scare of 0- {duration}, how would you rate your?
							</Form.Text>
							<Form.Label column md="6">Attention</Form.Label>
							<Col md="6">
								<Form.Control name="" maxLength="2" type="text" onChange={e => setReportedAttention(parseInt(e.target.value))} />
							</Col>

						</Form.Group>
						<Form.Group as={Row}>
							<Form.Label column md="6">Mindfullness</Form.Label>
							<Col md="6">
								<Form.Control maxLength="2" type="text" onChange={e => setReportedMindfullness(parseInt(e.target.value))} />
							</Col>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
          			</Button>
					<Button variant="primary" onClick={save} >
						Save Session
          			</Button>
				</Modal.Footer>
			</Modal>

		} else {
			return <div>
				<p>You must login to save sessions</p>

			</div>
		}
	}
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
						<Button type="button" className="btn btn-warning" onClick={reset}>
							Reset
		  			</Button>
						<Button className={`btn  ${isActive ? 'btn-info' : 'btn-primary'}`} onClick={toggle}>
							{isActive ? 'Pause' : 'Start'}
						</Button>
						<Button className="btn btn-success" onClick={handleShow} disabled={isActive == true ? true : false} >
							save
		  			</Button>
					</div>

				</div>
			</div>
			{renderSave()}
		</div >

	);
};

export default Timer;