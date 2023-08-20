import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Typography, Badge, Button, styled } from "@mui/material";

export default function Product({ imageId }) {
  // const Navigate = useNavigate();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="product-image">
        <img
          src={`${process.env.PUBLIC_URL}/${imageId}.jpeg`}
          onClick={toggleModal}
          alt="work"
        />
        <h2>Image name</h2>
      </div>

      {modal && (
        <div className="modal" display>
          <div className="modal-content">
            <img src={`${process.env.PUBLIC_URL}/${imageId}.jpeg`} alt="work" />
            <div className="product-description">
              <h2>
                <b>Image Name</b>
              </h2>
              <span class="close" onClick={toggleModal}>
                &times;
              </span>
              <h3>
                <b>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Omnis, temporibus
                </b>
              </h3>
              <h3>
                Cost: <span className="item-cost">$30</span>
              </h3>

              <button className="add-to-cart-button">Add to cart</button>

              <Link
              to={`/genai?imageId=${imageId}`}
              className='get-ai-recommendations-button'
              onClick={toggleModal}
            >
              Get AI Recommendations
            </Link>

              <div className="recommend">
                <h2>You may also like </h2>
              </div>
            </div>

            {/* give similar products here */}
          </div>
        </div>
      )}
    </>
  );
}
