function calculateSI() {
    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let time = Number(document.getElementById("time").value);

    let simpleInterest = (principal * rate * time) / 100;
    let totalAmount = principal + simpleInterest;

    document.getElementById("result").innerHTML =
        "Simple Interest = ₹" + simpleInterest;

    document.getElementById("total").innerHTML =
        "Total Amount = ₹" + totalAmount;
}
export default function App() {
    return (
        <div className="container">
            <h2>Simple Interest Calculator</h2>
            <label>Principal Amount:</label>
            <input type="number" id="principal" placeholder="Enter amount" />
            <label>Rate of Interest (%):</label>
            <input type="number" id="rate" placeholder="Enter rate" />
            <label>Time (Years):</label>
            <input type="number" id="time" placeholder="Enter time" />
            <button onClick={calculateSI}>Calculate</button>
            <h3 id="result"></h3>
            <h3 id="total"></h3>
        </div>
    );
}