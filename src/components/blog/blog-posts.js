import React, { Component } from 'react';
import './dist/style.css';
import {Row, Col, Nav,  NavDropdown, MenuItem, Navbar  } from 'react-bootstrap';
import BlogThumbnail from './dist/images/reactjs.png'
class BlogPostComponent extends Component {
  render() {
    return (
      <div className="blog-post-wrapper app-wrapper">
      <div className="common-page-title">
        <div className="container">
          <h1>React Js </h1>
        </div>
      </div>
      <div className="blog-page-wrapper">
        <div className="container">
            <div className="blog-post-listing">
              <Row className="show-grid">
                  <Col xs={12} md={9}>
                    <div className="blog-posts-list">
                        <div className="blog-list-item">
                        <div className="image-box">
                          <a href="/">  <img src ={BlogThumbnail} alt="react js" className='blog-thumbnail'/></a>
                        </div>
                          <div className="content-box">
                          <a href="/" className="post-category">React JS </a>
                            <a href="/" className="post-link">
                              <h3 className="post-title">How I learned React.js</h3>
                            </a>
                            <ul className="post-addition-info">
                            <li><strong > Feb 5, 2018 </strong></li>
                             <li>by <a href="/"> Tricky Solution</a></li>
                            </ul>
                            <p className="post-desc">About me I am a freelance web developer and student. Why I wanted to learn React.js React.js is quickly,
                               and arguably has already become, the industry standard for Web Development.
                                Its easy to. <a href="/" className="read-more"> Read more..</a></p>

                            <div className="post-features">
                              <ul>
                               <li><a href="/"> <i className="icon-heart"></i> <span className="number">10</span></a></li>
                               <li><a href="/"> <i className="icon-speech"></i> <span className="number">4</span> </a></li>
                               <li><a href="/"> <i className="icon-share-alt " ></i> <span className="number">2</span></a></li>
                            </ul>
                            </div>
                          </div>
                        </div>
                        <div className="blog-list-item">
                        <div className="image-box">
                          <a href="/">  <img src ={BlogThumbnail} alt="react js" className='blog-thumbnail'/></a>
                        </div>
                          <div className="content-box">
                          <a href="/" className="post-category">React JS </a>
                            <a href="/" className="post-link">
                              <h3 className="post-title">How I learned React.js</h3>
                            </a>
                            <ul className="post-addition-info">
                            <li><strong > Feb 5, 2018 </strong></li>
                             <li>by <a href="/"> Tricky Solution</a></li>
                            </ul>
                            <p className="post-desc">About me I am a freelance web developer and student. Why I wanted to learn React.js React.js is quickly,
                               and arguably has already become, the industry standard for Web Development.
                                Its easy to. <a href="/" className="read-more"> Read more..</a></p>

                            <div className="post-features">
                              <ul>
                               <li><a href="/"> <i className="icon-heart"></i> <span className="number">10</span></a></li>
                               <li><a href="/"> <i className="icon-speech"></i> <span className="number">4</span> </a></li>
                               <li><a href="/"> <i className="icon-share-alt " ></i> <span className="number">2</span></a></li>
                            </ul>
                            </div>
                          </div>
                        </div>
                    </div>
                  </Col>
                  <Col xs={12} md={3}>
                    <div className="blog-sidebar-wrapper">
                      <h4>sidebar</h4>
                      <div className="sidebar-item tags-list">
                        <ul>
                          <li><a href="/">React Js</a></li>
                          <li><a href="/">React Js</a></li>
                          <li><a href="/">React Js</a></li>
                          <li><a href="/">React Js</a></li>
                          <li><a href="/">React Js</a></li>
                          <li><a href="/">React Js</a></li>
                        </ul>
                      </div>
                    </div>
                    </Col>
                </Row>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
export default BlogPostComponent;
