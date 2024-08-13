function createConfetti() {
  const confettis = [];
  for (let i = 0; i < 50; i++) {
    confettis.push(<div className="confetti" key={i}></div>);
  }
  return confettis;
}

function App() {
  return (
    <div>
      {createConfetti()}
      <h1>
        <span className="yellow">Advance</span><br/>
        <span className="saffron">HAPPY</span><br/>
        <span className="white">INDEPENDENCE</span><br/>
        <span className="green">DAY</span><br/>
        <span className="rose">77th Independence Day</span><br/>
        <span className="red">Jai Hind</span>
      </h1>
    </div>
  );
}

export default App;
