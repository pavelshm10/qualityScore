import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Pet } from "../../types/pet";
import "./Card.scss";

export const PetContainer: React.FC<{ pet: any }> = ({ pet }) => {
  const petImg = pet.photos.length ? pet.photos[0].small : "./no_image.jpg";
  return (
    <Card>
      <Card.Img variant="top" src={petImg} className="pet-img" />
      <Card.Body>
        <Card.Title>{pet.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {pet.Age}
          <br />
          {pet.Gender}
          <br />
          {pet["Primary Breed"]}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};
