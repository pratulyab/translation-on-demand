import React, { Component } from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { Search } from 'react-bootstrap-icons';

class Tab2Contents extends Component {

    state = {
        isopen1 : false,
        isopen2 : false,
        isopen3 : false,
        words : [
            {   
                'id' : 1,
                'word' : 'ordinateur',
                'Translation' : 'Computer',
                'Grammar': 'noun',
                'meaning' : 'A programmable usually electronic device that can store, retrieve and process data.',
                'image' : 'https://image.shutterstock.com/image-photo/modern-desktop-computer-wireless-keyboard-260nw-1279079605.jpg',
                
            },
            {   
                'id' : 2,
                'word' : 'yeux',
                'Translation' : 'Eyes',
                'Grammar': 'noun',
                'meaning' : 'each of a pair of globular organs in the head through which people and vertebrate animals see.',
                'image' : 'https://image.shutterstock.com/image-photo/blue-woman-eye-macro-shot-260nw-106843871.jpg',
                
            },
            {   
                'id' : 3,
                'word' : 'belle',
                'Translation' : 'Beautiful Lady',
                'Grammar': 'noun',
                'meaning' : 'Lady who has a distinctive personality.',
                'image' : 'data:image/jpeg;base64,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',
                
            },
        ],
        searchWord : '',
        meaningop : ''
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
                isopen3 : !this.state.isopen3
            })
        }

        const handleChange = (e) => {
            this.setState({
                searchWord : e.target.value
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
                                <Input type="text" name="search" id="exampleSearch" placeholder="   Enter the word to translate" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={search}><Search /></Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
                { this.state.isopen3 ?
                <Container>
                    {this.state.words.map(post => {
                        return post.word === this.state.searchWord ? 
                    <Container key={post.id}>
                        <Row>
                        <Col></Col>
                        <Col><img src={post.image} alt="Computer"></img></Col>
                        <Col></Col>
                    </Row>
                    <Row> _</Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>Translation</Col>
                        <Col>:</Col>
                        <Col>{post.Translation}</Col>
                        <Col></Col>
                    </Row>
                    <Row>  _</Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>Meaning</Col>
                        <Col>:</Col>
                        <Col>{post.meaning}</Col>
                        <Col></Col>
                    </Row>
                    <Row>   _</Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>Grammar</Col>
                        <Col>:</Col>
                        <Col>{post.Grammar}</Col>
                        <Col></Col>
                    </Row>
                    </Container> 
                
                    : <h1 key={post.id}> </h1>
                    })}
                </Container> : null
                }
            </Container>
        )
    }
}

export default Tab2Contents;