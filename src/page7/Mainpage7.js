import React, { Component, useState } from "react";
import Card from "./Card";
import Card1 from "./1.jpg";
import Card2 from "./2.jpg";
import Card3 from "./3.jpg";
import Card4 from "./4.jpg";
import Card5 from "./5.jpg";
import Card6 from "./6.jpg";
import Card7 from "./7.jpg";
import Card8 from "./8.jpg";
import Left from "./left.png";
import Right from "./right.png";
import style7 from "./style7.css";
import styled from "styled-components";
import { BrowserView, MobileView } from 'react-device-detect';

let left_btn_cnt = 0;
let right_btn_cnt = 0;
let oppacity_ary = ["0.3", "1", "1", "1", "1", "1", "1", "1"];
let opacity_start_num = 1;
let card_length = 8;

class Mainpage7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: ["0.3", "1.0", "1.0", "1.0", "0.3", "0.3", "0.3", "0.3"]    
    };
    this.left_move = this.left_move.bind(this);
    this.right_move = this.right_move.bind(this);
  }

  left_move = () => {
    let card_list = document.getElementById("card_list");

    if (left_btn_cnt <= 0) {
      left_btn_cnt++;
      opacity_start_num--;
    }
    if (left_btn_cnt <= right_btn_cnt) {
      left_btn_cnt--;
      right_btn_cnt--;

      card_list.setAttribute(
        "class",
        "card-div-right-reverse" + String(right_btn_cnt)
      );
      console.log("card-div-right" + String(right_btn_cnt));
    } else if (left_btn_cnt > right_btn_cnt) {
      card_list.setAttribute("class", "card-div-left" + String(left_btn_cnt));
      console.log("card-div-left" + String(left_btn_cnt));
    }
    for (let i = 0; i < card_length; i++) {
      if (i <= opacity_start_num + 2 && i >= opacity_start_num) {
        oppacity_ary[i] = "1.0";
      } else {
        oppacity_ary[i] = "0.3";
      }
    }
    console.log(oppacity_ary);
    this.setState({
      cards: oppacity_ary,
    });

    console.log(card_list.classList);
    console.log("left_count : " + left_btn_cnt);
  };
  right_move = () => {
    let card_list = document.getElementById("card_list");

    if (right_btn_cnt < 4) {
      right_btn_cnt++;
      opacity_start_num++;
    }
    if (right_btn_cnt <= left_btn_cnt) {
      left_btn_cnt--;
      right_btn_cnt--;

      card_list.setAttribute(
        "class",
        "card-div-left-reverse" + String(left_btn_cnt)
      );

      console.log("card-div-left" + String(left_btn_cnt));
    } else if (right_btn_cnt > left_btn_cnt) {
      card_list.setAttribute("class", "card-div-right" + String(right_btn_cnt));
      console.log("card-div-right" + String(right_btn_cnt));
    }
    for (let i = 0; i < card_length; i++) {
      if (i <= opacity_start_num + 2 && i >= opacity_start_num) {
        oppacity_ary[i] = "1.0";
      } else {
        oppacity_ary[i] = "0.3";
      }
    }
    this.setState({
      cards: oppacity_ary,
    });

    console.log(card_list.classList);
    console.log("right_count :" + right_btn_cnt);
  };

  render() {
    return (
      <div>
      <BrowserView>
      <div style={{ width: "100%", height: "800px", overflow: "hidden" }}>
        <div
          style={{
            fontSize: "30px",
            color: "#707070",
            marginTop: "80px",
            marginLeft: "160px",
            fontFamily : 'jalnan'
          }}
        >
          Xoxo에서 당신의 분야를 찾아보세요
        </div>

        <button
          style={{
            border: "0px",
            backgroundColor: "transparent",
            position: "absolute",
            top: "5900px",
            left: "130px",
            width: "10%",
            zIndex: "1",
          }}
          onClick={this.left_move}
        >
          <img src={Left} style={{ width: "70%" }}></img>
        </button>
        <button
          id="btns"
          style={{
            border: "0px",
            backgroundColor: "transparent",
            position: "absolute",
            top: "5900px",
            left: "1605px",
            width: "10%",
            zIndex: "1",
          }}
          onClick={this.right_move}
        >
          <img src={Right} style={{ width: "60%" }}></img>
        </button>
        <div
          id="card_list"
          className="card-div-default"
          style={{ display: "flex" }}
        >
          <Card           
            left="-80px"
            name = "보고서 및 서류"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[0]}
            Card={Card1}
          ></Card>
          <Card           
            left="80px"
            name = "단기 아르바이트"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[1]}
            Card={Card2}
          ></Card>
          <Card            
            left="80px"
            name = "청소 및 집안일"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[2]}
            Card={Card3}
          ></Card>
          <Card          
            left="80px"
            name = "설치 및 조립"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[3]}
            Card={Card4}
          ></Card>
          <Card           
            left = "80px"
            name = "역할 대행"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[4]}
            Card={Card5}
          ></Card>
          <Card            
            left="80px"
            name = "동행 및 돌봄"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[5]}
            Card={Card6}
          ></Card>
          <Card           
            left="80px"    
            name = "벌레 잡기"   
            price = "10000 ~ 50000 원"     
            opacity={this.state.cards[6]}
            Card={Card7}
          ></Card>
          <Card           
            left="80px"
            name = "배달 및 운반"
            price = "10000 ~ 50000 원"
            opacity={this.state.cards[7]}
            Card={Card8}
          ></Card>
        </div>
      </div>
      </BrowserView>
    <MobileView>

    </MobileView>
    </div>
    );
  }
}

export default Mainpage7;
