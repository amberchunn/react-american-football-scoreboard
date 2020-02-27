//TODO: STEP 1 - Import the useState hook.
import React from 'react';
import { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

	// Home Team Score
	const [hmScore, setHmScore] = useState(0);

	// Away Team Score
	const [awScore, setAwScore] = useState(0);

	// Clicky Events - Update State
	// const hmFieldGoal = document.querySelector('homeButtons__fieldgoal');

	// const hmTouchDown = document.querySelector('homeButtons__touchdown');

	// const awFieldGoal = document.querySelector('awayButtons__fieldgoal');

	// const awTouchDown = document.querySelector('awayButtons__touchdown');

	// fieldGoal.addEventListener('click', event => {
	// 	event.className == homeButtons ? setHmScore(hmScore + 3) : setAwScore(awScore + 3);
	// });

	// touchDown.addEventListener('click', event => {
	// 	const bit =
	// 		event.className == homeButtons
	// 			? setHmScore(hmScore + 7)
	// 			: setAwScore(awScore + 7);
	// });

	//   <button onClick={() => setHmScore(hmScore + 3)}>
	//   Click me
	// </button>

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

						<div className="home__score">{hmScore}</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{awScore}</div>
					</div>
				</div>
				<BottomRow />
			</section>
			<section className="buttons">
				<div className="homeButtons">
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					<button
						className="homeButtons__touchdown"
						onClick={() => setHmScore(hmScore + 7)}
					>
						Home Touchdown!
					</button>
					<button
						className="homeButtons__fieldGoal"
						onClick={() => setHmScore(hmScore + 3)}
					>
						Home Field Goal!
					</button>
				</div>
				<div className="awayButtons">
					<button
						className="awayButtons__touchdown"
						onClick={() => setAwScore(awScore + 7)}
					>
						Away Touchdown!
					</button>
					<button
						className="awayButtons__fieldGoal"
						onClick={() => setAwScore(awScore + 7)}
					>
						Away Field Goal!
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;
