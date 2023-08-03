import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeScreen.component.scss';

const HomeScreen = () => {
  return (
    <div className="centered-content">
      <div className="task-manager-container">
        <div className="sidebar ">
          <h1 className="title">Lists</h1>
          <div className="list-menu">
            <Link href="" className="list-menu-item is-active">
              <p>List #1</p>
            </Link>
            <Link href="" className="list-menu-item">
              <p>List #1</p>
            </Link>
            <Link href="" className="list-menu-item">
              <p>List #1</p>
            </Link>
          </div>

          <Button variant="success" className="text-white">
            {' '}
            + New List
          </Button>
        </div>
        <div className="task-list-container">
          <h1 className="title ">Tasks</h1>

          {/* Task Elements */}
          <div className="task">
            <p>This is something I have to do</p>
          </div>
          <div className="task complete">
            <p>This is something I have to do</p>
          </div>
          <div className="task">
            <p>This is something I have to do</p>
          </div>
          <div className="task">
            <p>This is something I have to do</p>
          </div>
          <div className="task">
            <p>This is something I have to do</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

// <Container>
//   <Row>
//     <Col md={4}>
//       <h1 className="title text-success">Lists</h1>
//     </Col>
//     <Col md={8}>
//       <h1 className="title text-success">Lists</h1>
//     </Col>
//   </Row>
// </Container>
