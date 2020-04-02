import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Search } from 'react-bootstrap-icons';

class Tab2Contents extends Component {

    state = {
        isopen1 : false,
        isopen2 : false,
        isopen3 : false
    }

    // toggle1() {
    //     this.setState({
    //         isopen1 : true
    //     })
    // }

    // toggle2() {
    //     this.setState({
    //         isopen2 : !this.state.isopen2
    //     })
    // }

    render() {

        const toggle1 = () => {
            this.setState({
                isopen1 : !this.state.isopen1
            })
        }

        const toggle2 = () => {
            this.setState({
                isopen2 : !this.state.isopen2
            })
        }

        const search = () => {
            this.setState({
                isopen3 : true
            })
        }

        return(
            <Container>
                <Row style={{padding:'3%'}}>
                    <Col></Col>
                    <Col>
                        <Dropdown isOpen={this.state.isopen1} toggle={toggle1}>
                            <DropdownToggle caret>
                                French
                            </DropdownToggle>
                            <DropdownMenu style={{backgroundColor:'grey'}}>
                                <DropdownItem header style={{backgroundColor:'grey', color:'white', fontWeight:'900'}}>French</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col></Col>
                    <Col><h3>To</h3></Col>
                    <Col></Col>
                    <Col>
                    <Dropdown isOpen={this.state.isopen2} toggle={toggle2}>
                        <DropdownToggle caret>
                            English
                        </DropdownToggle>
                        <DropdownMenu style={{backgroundColor:'grey'}}>
                            <DropdownItem header style={{backgroundColor:'grey', color:'white', fontWeight:'900'}}>English</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    </Col>
                </Row>
                <Row style={{padding:'3%'}}>
                    <Col></Col>
                    <Col>
                        <Form inline isOpen={this.state.isopen3}>
                            <FormGroup>
                                <Label for="searchbar" hidden>Search</Label>
                                <Input type="text" name="search" id="exampleSearch" placeholder="   Enter the word to translate" />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={search}><Search /></Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                {this.state.isopen3 ?
                <Container>
                    <Row>
                        <Col></Col>
                        <Col><img src="https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-1279079605.jpg" alt="Computer"></img></Col>
                        <Col></Col>
                    </Row>
                    <Row></Row>>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>Translation</Col>
                        <Col>:</Col>
                        <Col>Computer</Col>
                        <Col></Col>
                    </Row>
                    <Row></Row>>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>Meaning</Col>
                        <Col>:</Col>
                        <Col>A programmable usually electronic device that can store, retrieve and process data.</Col>
                        <Col></Col>
                    </Row>
                    <Row></Row>>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>Grammar</Col>
                        <Col>:</Col>
                        <Col>Noun</Col>
                        <Col></Col>
                    </Row>
                </Container> : null
                }
            </Container>
        )
    }
}

export default Tab2Contents;