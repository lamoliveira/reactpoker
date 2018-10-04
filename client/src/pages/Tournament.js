import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Tournament extends Component {
  state = {
    tournaments: [],
    tournamentname: "",
    tournamentdate: "",
    tournamentrules: ""
  };

  componentDidMount() {
    this.loadTournaments();
    console.log(this.state.tournamentname);
  }

  loadTournaments = () => {
    API.getTournaments()
      .then(res =>
        this.setState({ tournaments: res.data, tournamentname: "", tournamentdate: "", tournamentrules:"" })
      )
      .catch(err => console.log(err));
  };

  deleteTournament = id => {
    API.deleteTournament(id)
      .then(res => this.loadTournaments())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.tournamentname ) {
      API.saveTournament({
        tournamentname: this.state.tournamentname,
        tournamentdate: this.state.tournamentdate,
        tournamentrules: this.state.tournamentrules
      })
        .then(res => this.loadTournaments())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Tournaments</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.tournamentname}
                onChange={this.handleInputChange}
                name="tournamentname"
                placeholder="Tournament Name (required)"
              />
              <Input
                value={this.state.tournamentdate}
                onChange={this.handleInputChange}
                name="tournamentdate"
                placeholder="Tournament Date (required)"
              />
              <TextArea
                value={this.state.tournamentrules}
                onChange={this.handleInputChange}
                name="tournamentrules"
                placeholder="Tournament Rules (Optional)"
              />
              <FormBtn
                disabled={!(this.state.tournamentname)}
                onClick={this.handleFormSubmit}
              >
                Submit Tournament
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>My Tournaments</h1>
            </Jumbotron>
            {this.state.tournaments.length ? (
              <List>
                {this.state.tournaments.map(tournament => (
                  <ListItem key={tournament._id}>
                    <Link to={"/tournaments/" + tournament._id}>
                      <strong>
                        {tournament.tournamentname} at {tournament.tournamentdate}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteTournament(tournament._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tournament;
