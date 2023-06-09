import React, { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';

import { QUERY_REVIEWS } from "../utils/queries";

export default function ReviewSection(_id) {
  const { loading, data } = useQuery(QUERY_REVIEWS, {
    variables: { _id: _id },
  });
  const reviews = data?.reviews || [];
  console.log(reviews);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="card mb-3">
            <p className="card-header">
              {review.reviewAuthor} wrote this review on{" "}
              <span style={{ fontWeight: 700 }}>
                {review.createdAt}
              </span>
            </p>
            <div className="card-body">
              <p>{review.reviewText}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
