import React, { useState } from 'react';

const RatingComponent = () => {
	const [rating, setRating] = useState(0);
	const [hoverRating, setHoverRating] = useState(0);

	const stars = [1, 2, 3, 4, 5];

	const handleRatingChange = (newRating) => {
		setRating(newRating);
		// Save the rating to your database or perform any other action
		console.log(`Rated ${newRating} stars`);
	};

	return (
		<div className="rating">
			{stars.map((star) => (
				<span
					key={star}
					className={`star ${rating >= star ? 'selected' : ''} ${
						hoverRating >= star ? 'hover' : ''
					}`}
					onClick={() => handleRatingChange(star)}
					onMouseEnter={() => setHoverRating(star)}
					onMouseLeave={() => setHoverRating(0)}
				>
					&#9733;
				</span>
			))}
		</div>
	);
};

export default RatingComponent;