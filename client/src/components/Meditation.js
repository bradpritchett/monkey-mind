import React, { useState, useEffect } from 'react';
import "./style.css";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../utils/API";

const Meditation = (params) => {
	return (
		<div className="row">
			<div className="col">
				<h2 className="center">How To Meditate</h2>
				<p>There are three main components to meditation:</p>
				<ol type="1">
					<li>
						A commitment to a <span className="bold">daily practice</span>. Meditation is one of those rare endeavors that pays off the more time given to it. 20 minutes or so, twice a day, is ideal. But honestly, give it whatever time you can spare. 5-10 minutes now and then do pay off. Moments of quiet peace tend to lead a person to pursue more moments of quiet peace.
					</li>
					<li>
						Holding one’s <span className="bold">attention to a fixed point of meditation</span> for a sustained period. There are many types of meditation practice, but they all include a point of meditation. A point of meditation can be the whispery tendrils of breath at the tip of the nostril, a mantra, which can be words like ‘I am’, or a sound like om repeated quietly in the mind, or even on thoughts of <a href="https://ggia.berkeley.edu/practice/loving_kindness_meditation" target="_new">loving kindess</a>. The object of meditation can shift if it helps the meditator remain focused, but it should be a stable connection to a clear, fixed point.
					</li>
					<li>
						While holding one’s attention quietly, the mind can, and should, still be open to and aware of the present moment. This includes the meditator’s body seated in a chair, the sound of the world around them and even awareness of their own floating thoughts. This is called <span className="bold">mindfulness</span>.
					</li>
				</ol>
				<p>The sweet spot of meditation lies in a light-enough hold on one’s attention so as not to lose awareness of the present moment unfolding around them, but with enough attention so as not to lose touch with the object of meditation. If you find your mind wandering that’s OK. Just return your attention to the object of meditation and continue as you were. Your mind will wander. It will wander less the more time you spend training it. It’s important to give yourself a break and allow your untrained mind space to grow. This wild, unpredictable mind is sometimes referred to as the monkey mind.</p>
				<blockquote className="blockquote">
					<p className="mb-0">Simply close your eyes and allow yourself to hear all the sounds that are going on around you. Just listen to the general hum and buzz of the world as if you were listening to music. Don’t try to identify the sounds you are hearing, don’t put names on them. Simply allow them to play with your eardrums and let them go.”</p>
					<p className="mb-0"> –Alan Watts</p>
				</blockquote>
			</div>

		</div>
	)
}

export default Meditation