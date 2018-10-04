import React, { Component } from "react";
import Button from "../components/Button";
import FriendCard from "../components/FriendCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
//import friends from "./friends.json";
import animals from "./animals.json";

import Nav from "../components/nav";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
var request = require("request");
let friends = [{}];

function shuffleFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// function loadGifs(animal, arraygif) {
function loadGifs(animal, cb) {
  console.log(animal);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    animal + "&api_key=dc6zaTOxFJmzC&limit=10";

  // Creating an AJAX call for the specific button being clicked. $$$ change it to use Util API
  request(queryURL,
    function (error, response, body) {
      // After data comes back from the request
      console.log(queryURL);
      var results = JSON.parse(body).data;
      console.log(results);

      let array = [];
      for (var i = 0; i < results.length; i++) {
        console.log("for:" + i);
        // Creating and storing a div tag
        console.log("Poster:" + results[i].images.fixed_height_small_still.url);
        if (results[i].images.fixed_height_small_still.url) {
          if (results[i].images.fixed_height_small_still.url !== "N/A") {
            var animal = {
              "id": i,
              "name": i,
              // "data-animate": results[i].images.fixed_height_small.url,
              // "data-still": results[i].images.fixed_height_small_still.url,
              "image": results[i].images.fixed_height_small_still.url,
              "occupation": "",
              "location": ""
              //"data-state": "still"
            }
            array.push(animal);
          }
        }
      }
      console.log(array);
      console.log("xxx");
      cb(array);
    });
};

//const Play = () => (

    class Play extends Component {
        // Setting this.state.friends to the friends json array
        state = {
          friends,
          score: 0,
          topscore: 0,
          warning: "Click an image to begin!",
          clicked: [],
          animals,
          animal: ""
      
        };
        componentDidMount() {
          loadGifs("dog", arraygif => this.setState({ friends: arraygif }));
        }
      
        handleAnimal = name => {
          this.setState({ animal: name });
          console.log("name:" + name);
          loadGifs(name, arraygif => this.setState({ friends: arraygif }));
          this.handleReset() ;  
        };
      
      
      
        handleClick = id => {
          if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
          } else {
            this.handleReset();
          }
        };
      
        handleIncrement = () => {
          const newScore = this.state.score + 1;
          this.setState({
            score: newScore,
            warning: ""
          });
          if (newScore >= this.state.topscore) {
            this.setState({ topscore: newScore });
          }
          else if (newScore === 12) {
            this.setState({ warning: "You win!" });
          }
          this.handleShuffle();
        };
      
        handleReset = () => {
          this.setState({
            score: 0,
            topscore: this.state.topscore,
            warning: "New Game. Click an image to start again!!",
            clicked: []
          });
          this.handleShuffle();
        };
      
        handleShuffle = () => {
          let shuffledFriends = shuffleFriends(this.state.friends);
          this.setState({ friends: shuffledFriends });
        };
      
      
        // Map over this.state.friends and render a FriendCard component for each friend object
        render() {
          return (
            <Wrapper>
              <Nav
                title="Mixed Clicky Game"
                warning={this.state.warning}
                score={this.state.score}
                topscore={this.state.topscore}
              />
              <a>Choose to start new game:</a>
              {this.state.animals.map(animal => (
      
                <Column size="0">
                  <Button
                    id={animal.id}
                    handleAnimal={this.handleAnimal}
                    name={animal.name}
                  />
                </Column>
              ))}
              <Title>Click on an image to earn points(10 max), but don't click on any more than once!</Title>
      
              <Container>
                <Row>
                  {this.state.friends.map(friend => (
                    <Column size="md-3 sm-6">
                      <FriendCard
                        key={friend.id}
                        handleClick={this.handleClick}
                        image={friend.image}
                        id={friend.id}
                        location={friend.location}
                      />
                    </Column>
                  ))}
                </Row>
              </Container>
            </Wrapper>
          );
        }
      }
      

export default Play;
