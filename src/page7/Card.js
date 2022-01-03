import React, { Component, useRef } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
      <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-analytics.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-firestore.js"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"
      ></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

      <div
        className="card"
        style={{ width: "18rem" }}
        style={{
          marginLeft: this.props.left,
          marginTop: "80px",
          borderRadius: "20px",
          opacity: this.props.opacity,
        }}
      >
        <img
          src={this.props.Card}
          className="card-img-top"
          style={{
            height: "300px",
            width: "350px",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        ></img>
        <h4
          id="name"
          style={{ textAlign: "center", marginTop: "30px" ,fontFamily : 'pretendard'}}
          className="card-title"
        >          
          {this.props.name}
        </h4>
        <div
          style={{
            height: "120px",
            textAlign: "center",
            paddingTop: "20px",
            color: "gray",
            fontSize: "20px",
            fontFamily : 'pretendard'
          }}
          className="card-text"
        >
          평균가격 <p>{this.props.price}</p>
        </div>
      </div>
    </div>
    );
  }
}

export default Card;
