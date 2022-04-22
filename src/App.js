// UNICAFE - Exercise 1.6
import React, { useState } from "react";

// const App = () => {
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <button onClick={() => setBad(bad + 1)}> bad</button>
//       <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
//       <button onClick={() => setGood(good + 1)}> good</button>

//       <h2>Statistics</h2>
//       <div>bad {bad}</div>
//       <div>neutral {neutral}</div>
//       <div>good {good}</div>
//     </div>
//   );
// };

// UNICAFE = Exercise 1.7
// const App = () => {
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <button onClick={() => setBad(bad + 1)}> bad</button>
//       <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
//       <button onClick={() => setGood(good + 1)}> good</button>

//       <h2>Statistics</h2>

//       <div>bad {bad}</div>
//       <div>neutral {neutral}</div>
//       <div>good {good}</div>
//       <div>all {neutral + good + bad}</div>
//       <div>pos {(good / (neutral + good + bad)) * 100}</div>
//       <div>avg {(good - bad) / (neutral + good + bad)}</div>
//     </div>
//   );
// };

// UNICAFE = Exercise 1.8

// const Statistics = (props) => {
//   return (
//     <div>
//       bad {props.bad} <br />
//       neutral {props.neutral} <br />
//       good {props.good} <br />
//       all {props.all} <br />
//       pos {props.pos} % avg {props.avg} <br />
//     </div>
//   );
// };

// const App = () => {
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <button onClick={() => setBad(bad + 1)}> bad</button>
//       <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
//       <button onClick={() => setGood(good + 1)}> good</button>
//       <h2>Statistics</h2>

//       <Statistics
//         bad={bad}
//         neutral={neutral}
//         good={good}
//         all={neutral + good + bad}
//         pos={(neutral + good) / (neutral + good + bad)}
//         avg={(good - bad) / (neutral + good +  bad)}
//       />
//     </div>
//   );
// };

// UNICAFE = Exercise 1.9

// const Statistics = (props) => {
//   if (props.all === 0) return <div>No feedback provided!</div>;
//   else
//     return (
//       <div>
//         bad {props.bad} <br />
//         neutral {props.neutral} <br />
//         good {props.good} <br />
//         all {props.all} <br />
//         pos {props.pos} % <br />
//         avg {props.avg} <br />
//       </div>
//     );
// };

// const App = () => {
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <button onClick={() => setBad(bad + 1)}> bad</button>
//       <button onClick={() => setNeutral(neutral + 1)}> neutral</button>
//       <button onClick={() => setGood(good + 1)}> good</button>
//       <h2>Statistics</h2>

//       <Statistics
//         bad={bad}
//         neutral={neutral}
//         good={good}
//         all={neutral + good + bad}
//         pos={(neutral + good) / (neutral + good + bad)}
//         avg={(good - bad) / (neutral + good + bad)}
//       />
//     </div>
//   );
// };

// UNICAFE = Exercise 1.10

// const Statistics = ({ bad, neutral, good }) => {
//   let all = bad + neutral + good;
//   let avg = (good - bad) / all;
//   let pos = (neutral + good) / (bad + neutral + good);

//   if (all === 0) return <div>No feedback provided!</div>;
//   else
//     return (
//       <div>
//         <table>
//           <body>
//             <StatisticLine text="bad" value={bad} />
//             <StatisticLine text="neutral" value={neutral} />
//             <StatisticLine text="good" value={good} />
//             <StatisticLine text="all" value={all} />
//             <StatisticLine text="pos" value={pos} />
//             <StatisticLine text="avg" value={avg} />
//           </body>
//         </table>
//       </div>
//     );
// };

// let StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   );
// };

// const App = () => {
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);

//   let Button = ({ text, clicked }) => {
//     return <button onClick={clicked}> {text} </button>;
//   };

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <Button text="bad" clicked={() => setBad(bad + 1)} />
//       <Button text="neutral" clicked={() => setNeutral(neutral + 1)} />
//       <Button text="good" clicked={() => setGood(good + 1)} />

//       <h2>Statistics</h2>
//       <Statistics neutral={neutral} good={good} bad={bad} />
//     </div>
//   );
// };

// UNICAFE = Exercise 1.11

// const Statistics = ({ bad, neutral, good }) => {
//   let pos = ((good / (bad + neutral + good)) * 100).toFixed(1) + "%";
//   let all = bad + neutral + good;
//   let avg = (good - bad) / all;

//   if (all === 0) return <div>No feedback provided!</div>;
//   else
//     return (
//       <div>
//         <table>
//           <body>
//             <StatisticLine text="bad" value={bad} />
//             <StatisticLine text="neutral" value={neutral} />
//             <StatisticLine text="good" value={good} />
//             <StatisticLine text="all" value={all} />
//             <StatisticLine text="avg" value={avg} />
//             <StatisticLine text="pos" value={pos} />
//           </body>
//         </table>
//       </div>
//     );
// };

// let StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   );
// };

// const App = () => {
//   const [bad, setBad] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);

//   let Button = ({ text, clicked }) => {
//     return <button onClick={clicked}> {text} </button>;
//   };

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <Button text="bad" clicked={() => setBad(bad + 1)} />
//       <Button text="neutral" clicked={() => setNeutral(neutral + 1)} />
//       <Button text="good" clicked={() => setGood(good + 1)} />

//       <h2>Statistics</h2>
//       <Statistics bad={bad} neutral={neutral} good={good} />
//     </div>
//   );
// };

// UNICAFE = Exercise 1.12
// const App = () => {
//   const [index, setIndex] = useState(0);

//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
//   ];

//   const handleChange = () => {
//     setIndex(Math.floor(Math.random() * anecdotes.length));
//   };

//   return (
//     <div>
//       <button onClick={handleChange}>Baby, don't hurt me no more!</button>
//       <h1>{anecdotes[index]}</h1>
//     </div>
//   );
// };

// UNICAFE = Exercise 1.13

// const App = () => {
//   const [index, setIndex] = useState(0);
//   const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);

//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
//   ];

//   const handleChange = () => {
//     setIndex(Math.floor(Math.random() * anecdotes.length));
//   };

//   const voteChange = () => {
//     let copy = [...vote];

//     copy[index]++;

//     setVote(copy);
//   };

//   return (
//     <div>
//       <button onClick={handleChange}>Next Anecdotes!</button>
//       <button onClick={voteChange}>Vote for Ace!</button>

//       <h1>{anecdotes[index]}</h1>
//       <h1>Ace is leading by {vote[index]} votes!</h1>
//     </div>
//   );
// };

// UNICAFE = Exercise 1.14

const App = () => {
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 5,
    4: 0,
    5: 0,
  });

  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const handleChange = () => {
    setIndex(Math.floor(Math.random() * anecdotes.length));
  };

  const voteChange = () => {
    setVote({
      ...vote,
      [index]: vote[index] + 1,
    });
  };

  const findMax = () => {
    let max = -1,
      maxKey = -1;

    for (let key in vote) {
      if (vote[key] > max) {
        maxKey = key;
        max = vote[key];
      }
    }
    return maxKey;
  };

  return (
    <div>
      <h1>Anecdote of Ace!</h1>

      <button onClick={handleChange}>Next Anecdote!</button>

      <button onClick={voteChange}>Vote for Ace!</button>

      <h2>{anecdotes[index]}</h2>
      <h3>Has {vote[index]} Votes for Ace!</h3>

      <br />

      <h1>Ace has the most votes! - Winner, Winner, chicken dinner!!!</h1>
      <h3>{anecdotes[findMax()]}</h3>
    </div>
  );
};

export default App;
