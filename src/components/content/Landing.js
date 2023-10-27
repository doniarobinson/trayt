import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="content__inner">
      <h1 className="welcome">Welcome to Bank of Trayt</h1>

      <h2 className="initiate">
        Initiate a new Direct Deposit to earn 5% for 36 Months!
      </h2>

      <Link to={"/enroll"}>
        <button className="btn">Learn More</button>
      </Link>
    </div>
  );
}
