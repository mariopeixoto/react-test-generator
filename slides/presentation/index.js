// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Fit,
  Table,
  TableRow,
  TableItem,
  TableHeaderItem
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

import './index.css';

const images = {
  results: require('../assets/results.png')
};

preloader(images);

const theme = createTheme({
  primary: "#f9e037",
  disabled: "#bfbfbf"
});


class Outline extends React.Component {

  constructor() {
    super();
    this._renderItem = this._renderItem.bind(this);
    this._isItemActive = this._isItemActive.bind(this);
  }

  _renderItem(text, key) {
    if (this._isItemActive(key)) {
      return (<ListItem>{text}</ListItem>);
    } else {
      return (<ListItem textColor="disabled">{text}</ListItem>);
    }
  }

  _isItemActive(key) {
    return (this.props.active == undefined || this.props.active === key);
  }

  render() {
    return (
        <Fit>
          <Heading textColor="black" size={4}>
            Outline
          </Heading>
          <List>
            {this._renderItem('Motivation', 'motivation')}
            {this._renderItem('React', 'react')}
            {this._renderItem('Illustrating Example', 'example')}
            {this._renderItem('Approach', 'approach')}
            {this._renderItem('Evaluation', 'evaluation')}
            {this._renderItem('Limitations', 'limitations')}
            {this._renderItem('Conclusion', 'conclusion')}
          </List>
        </Fit>
    );
  }
}

class GroupSymbol extends React.Component {
  render() {
    return (
      <div className="group">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>
    );
  }
}

class GroupedItem extends React.Component {
  render() {
    return (
      <Layout>
        <Fill>
          {this.props.children}
        </Fill>
        <Fill>
          <Layout>
            <GroupSymbol/>
            <Text style={this.props.noteStyle}>{this.props.note}</Text>
          </Layout>
        </Fill>
      </Layout>
    );
  }
}

class SubListItem extends React.Component {
  render() {
    return (<ListItem {...this.props} padding="0px 0px 0px 50px">{this.props.children}</ListItem>);
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={[]} transitionDuration={0} progress="bar">
          <Slide bgColor="primary" notes="">
            <Heading size={4} lineHeight={1} textColor="black">
              ReactTGN: Generating automated tests for ReactJS UI's
            </Heading>
            <Text textSize="1em" margin="20px 0px 0px" bold>Mario Peixoto (@mariopeixoto)</Text>
            <Text textSize="1em" margin="20px 0px 0px" bold>https://github.com/mariopeixoto/react-tgn/slides</Text>
          </Slide>
          <Slide>
            <Outline />
          </Slide>
          <Slide>
            <Outline active="motivation"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Motivation</Heading>
            <List>
              <ListItem>JS and React is growing fast</ListItem>
              <ListItem>React is highly testable</ListItem>
              <ListItem>Library to generate unit tests:</ListItem>
              <List>
                <SubListItem>Maximum test coverage</SubListItem>
                <SubListItem>Confidence</SubListItem>
              </List>
            </List>
          </Slide>
          <Slide>
            <Outline active="react"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>React</Heading>
            <List>
              <ListItem>JS library</ListItem>
              <ListItem>Render User Interfaces</ListItem>
              <ListItem>UI element = Component</ListItem>
              <ListItem>Component = Contained state-machine</ListItem>
              <ListItem>Functional Techniques</ListItem>
              <ListItem>No Manual DOM mutations</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>React Component</Heading>
            <CodePane
              lang="js"
              source={require("raw!./code/HelloWorld.js.code")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>JSX Syntax</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!./code/HelloWorldJSX.js.code")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Stateful Component</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!./code/Timer.js.code")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Testability</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!./code/HelloWorldTest.js.code")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Outline active="example"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Illustrating Example</Heading>
            <List>
              <ListItem>Symbolic execution</ListItem>
              <List>
                <SubListItem>Determine possible Inputs</SubListItem>
              </List>
              <ListItem>Create test cases for inputs</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Illustrating Example</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!./code/LightBulb.js.code")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Symbolic Execution</Heading>

            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!./code/LightBulb.js.code")}
                  margin="20px auto"
                  />
              </Fill>
              <Fill>
                <Table>
                  <TableRow>
                    <TableHeaderItem textSize='1em'>Statement</TableHeaderItem>
                    <TableHeaderItem textSize='1em'>PV</TableHeaderItem>
                    <TableHeaderItem textSize='1em'>PC</TableHeaderItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize='1em'>1</TableItem>
                    <TableItem textSize='1em'>{"IS_ON <- isOn"}</TableItem>
                    <TableItem textSize='1em'>TRUE</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize='1em'>2,3</TableItem>
                    <TableItem textSize='1em'></TableItem>
                    <TableItem textSize='1em'>{"TRUE ^ isOn"}</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize='1em'>Output {"<div>Light is On</div>"}</TableItem>
                  </TableRow>
                </Table>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Symbolic Execution</Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="jsx"
                  source={require("raw!./code/LightBulb.js.code")}
                  margin="20px auto"
                  />
              </Fill>
              <Fill>
                <Table>
                  <TableRow>
                    <TableHeaderItem textSize='1em'>Statement</TableHeaderItem>
                    <TableHeaderItem textSize='1em'>PV</TableHeaderItem>
                    <TableHeaderItem textSize='1em'>PC</TableHeaderItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize='1em'>1</TableItem>
                    <TableItem textSize='1em'>{"IS_ON <- isOn"}</TableItem>
                    <TableItem textSize='1em'>TRUE</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize='1em'>2,4</TableItem>
                    <TableItem textSize='1em'></TableItem>
                    <TableItem textSize='1em'>{"TRUE ^ !isOn"}</TableItem>
                  </TableRow>
                  <TableRow>
                    <TableItem textSize='1em'>Output {"<div>Light is Off</div>"}</TableItem>
                  </TableRow>
                </Table>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Creating test cases</Heading>
            <CodePane
              lang="jsx"
              source={require("raw!./code/LightBulbTest.js.code")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Outline active="approach"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Approach</Heading>
            <List>
              <ListItem>Jalangi</ListItem>
              <ListItem>Generate intermediate code</ListItem>
              <ListItem>Run symbolic execution</ListItem>
              <ListItem>Generate test cases</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Generate intermediate code</Heading>
            <CodePane
              source={require("raw!./code/generateIntermediateCode.pseudo")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Run symbolic execution</Heading>
            <List>
              <ListItem>Call Jalangi on intermediate code</ListItem>
              <ListItem>Generate inputs</ListItem>
              <ListItem>Record output for each input (change to Jalangi)</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Generate test cases</Heading>
            <CodePane
              source={require("raw!./code/generateTestCases.pseudo")}
              margin="20px auto"
              />
          </Slide>
          <Slide>
            <Heading textColor="black">Demo</Heading>
          </Slide>
          <Slide>
            <Outline active="evaluation"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Evaluation</Heading>
            <Image src={images.results} />
          </Slide>
          <Slide>
            <Outline active="limitations"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Limitations</Heading>
            <List>
              <ListItem>Generate inputs correctly for complex components</ListItem>
              <ListItem>Stateful components</ListItem>
              <ListItem>Depedencies and mocks</ListItem>
            </List>
          </Slide>
          <Slide>
            <Outline active="conclusion"/>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>Conclusion</Heading>
            <List>
              <ListItem>Not ready</ListItem>
              <ListItem>Complex components</ListItem>
              <ListItem>https://github.com/mariopeixoto/react-tgn</ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading textColor="black" size={4}>References</Heading>
            <List className='references-list'>
              <ListItem>{"\"Web Components and Friends: React.js, Angular.js, Polymer\", https://smthngsmwhr.wordpress.com/2015/04/13/web-components-and-friends-react-angular-polymer/"}</ListItem>
              <ListItem>{"\"React.js in Real Life at Codecademy\", http://www.infoq.com/articles/reactjs-codecademy"}</ListItem>
              <ListItem>{"\"React: A Javascript library for building User Interfaces\", https://facebook.github.io/react/"}</ListItem>
              <ListItem>{"J. King, \"Symbolic execution and program testing\" in Communications of the ACM, July 1976, Volume 19 Issue 7, pp. 385-394."}</ListItem>
              <ListItem>{"\"Symbolic Execution\", https://en.wikipedia.org/wiki/Symbolic_execution"}</ListItem>
              <ListItem>{"K. Sen, S. Kalasapur, T. Brutch, S. Gibbs, \"Jalangi: A Selective Record-Replay and Dynamic Analysis Framework for JavaScript\" in Proceedings of the 2013 9th Joint Meeting on Foundations of Software Engineering, pp.488-498"}</ListItem>
              <ListItem>{"\"Jalangi\", https://github.com/SRA-SiliconValley/jalangi"}</ListItem>
            </List>
          </Slide>
          <Slide bgColor="black">
            <Heading>
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
