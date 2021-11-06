import React, { useContext, useEffect } from "react";
import { Button, Card, Col, Row, Spinner, Toast } from "react-bootstrap";
import AddPostModal from "../components/post/AddPostModal";
import SinglePost from "../components/post/SinglePost";
import { AuthContext } from "../contexts/AuthContext";
import { PostContext } from "../contexts/PostContext";
import addIcon from "../assets/plus-circle-fill.svg";
import UpdatePostModal from "../components/post/UpdatePostModal";

const Dashboard = () => {
  const {
    authState: {
      user: { username },
    },
  } = useContext(AuthContext);
  const {
    postState: { post, posts, postLoading },
    getPosts,
    setShowAddPostModal,
    showToast: { show, message, type },
    setShowToast,
  } = useContext(PostContext);
  useEffect(() => {
    getPosts();
  }, []);
  let body = null;
  if (postLoading) {
    body = (
      <div className="d-flex justify-content-center mt-2">
        <Spinner animation="border" variant="info" />
      </div>
    );
  } else if (posts.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {username}</Card.Header>
          <Card.Body>
            <Card.Title>welcome to learnit</Card.Title>
            <Card.Text>
              click the button below to track your first skill to learn
            </Card.Text>
            <Button
              varian="primary"
              onClick={setShowAddPostModal.bind(this, true)}
            >
              {" "}
              learn
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {posts.map((post) => (
            <Col key={post._id} className="my-2">
              <SinglePost post={post}></SinglePost>
            </Col>
          ))}
        </Row>
        <Button
          variant
          className=" btn-floating "
          onClick={setShowAddPostModal.bind(this, true)}
        >
          <img src={addIcon} alt="add-post" width="60" height="60" />
        </Button>
      </>
    );
  }
  return (
    <>
      {body}
      <AddPostModal />
      {post !== null && <UpdatePostModal />}
      <Toast
        show={show}
        style={{ position: "fixed", top: "20%", right: "10px" }}
        className={`bg-${type} text-white`}
        onClose={setShowToast.bind(this, {
          show: false,
          message: "",
          type: null,
        })}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <strong>{message}</strong>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Dashboard;
