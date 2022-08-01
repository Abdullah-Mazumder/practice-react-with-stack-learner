import React from "react";
import { Col, Container, Row } from "reactstrap";
import shortid from "shortid";

import MainContent from "./components/mainContent";
import Sidebar from "./components/sidebar";
import SinglePollDetails from "./components/singlePollDetails";

import POLLS from "./components/data/poll";

class App extends React.Component {
  state = {
    polls: [],
    selectedPoll: {},
    searchTerm: "",
    filterTerm: "",
  };

  componentDidMount() {
    this.setState({ polls: POLLS });
  }

  addNewPoll = (poll) => {
    poll.id = shortid.generate();
    poll.created = new Date();
    poll.totalVote = 0;
    poll.opinions = [];

    this.setState({
      polls: this.state.polls.concat(poll),
    });
  };

  updatePoll = (updatedPoll) => {
    const polls = this.state.polls;
    const poll = polls.find((p) => p.id === updatedPoll.id);
    poll.title = updatedPoll.title;
    poll.description = updatedPoll.description;
    poll.opinions = updatedPoll.opinions;

    this.setState({ polls });
  };

  deletePoll = (pollId) => {
    const polls = this.state.polls.filter((p) => p.id !== pollId);

    this.setState({ polls, selectedPoll: {} });
  };

  selectPoll = (pollId) => {
    const poll = this.state.polls.find((p) => p.id === pollId);
    this.setState({ selectedPoll: poll });
  };

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm,
    });
  };

  performSearch = () => {
    return this.state.polls.filter((poll) =>
      poll.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  getOpinion = (response) => {
    const { polls } = this.state;
    const poll = polls.find((p) => p.id === response.pollId);
    const option = poll.options.find((o) => o.id === response.selectedOption);

    poll.totalVote++;
    option.vote++;
    const opinion = {
      id: shortid.generate(),
      name: response.name,
      selectedOption: response.selectedOption,
    };

    poll.opinions.push(opinion);
    this.setState({ polls });
  };

  handleFilter = (value, e) => {
    e.preventDefault();
    this.setState({
      filterTerm: value
    })
  };

  performFilter = () => {
    const {filterTerm} = this.state;
    const opinions = this.state.selectedPoll.opinions
    if (filterTerm === '') {
      return this.state.selectedPoll.opinions
    }
    return opinions.filter(op => op.selectedOption === filterTerm);
  }

  searchOption = (value) => {
    const { selectedPoll } = this.state;
    if (selectedPoll.opinions && selectedPoll.opinions.length > 0) {
      const option = selectedPoll.options.find((opt) => opt.id === value);
      return option.value;
    }
  };

  render() {
    const polls = this.performSearch();
    let opinions = this.state.selectedPoll.opinions;
    let options = this.state.selectedPoll.opinions;
    if (this.state.filterTerm) {
      opinions = this.performFilter()
    }
    return (
      <div>
        <Container className="my-5 card card-body p-5">
          <h3 className="text-center mb-4">Poll Application</h3>
          <Row>
            <Col md={4} className="card card-body">
              <Sidebar
                polls={polls}
                searchTerm={this.state.searchTerm}
                handleSearch={this.handleSearch}
                selectPoll={this.selectPoll}
                addNewPoll={this.addNewPoll}
              />
            </Col>
            <Col md={8} className="card card-body">
              <MainContent
                poll={this.state.selectedPoll}
                getOpinion={this.getOpinion}
                updatePoll={this.updatePoll}
                deletePoll={this.deletePoll}
              />
            </Col>
          </Row>
          {Object.keys(this.state.selectedPoll).length > 0 ? <Row>
            <Col className="card card-body">
              <SinglePollDetails
                filterTerm={this.state.filterTerm}
                opinions={opinions}
                options={options}
                poll={this.state.selectedPoll}
                handleFilter={this.handleFilter}
                searchOption={this.searchOption}
              />
            </Col>
          </Row> : ''}
        </Container>
      </div>
    );
  }
}

export default App;
