// AlumniSearch.jsx
import React from 'react';
import styles from './AlumniSearch.module.css';

export default function AlumniSearch() {
		return (
				<div className={styles.alumniSearch}>
						{/* Top Navigation Bar */}
						<div className={styles.navbar}>
								<a href="#">Dashboard</a>
								<a href="#">Forum</a>
								<a href="#">Alumni Search</a>
								<a href="#">Profile</a>
						</div>

						{/* Search Bar */}
						<div className={styles.searchBar}>
								<input
										type="text"
										placeholder="Search for Alumni by Name, College, Tech, Interest, Branch..."
								/>
								<span className={styles.searchIcon}>&#128269;</span> {/* Unicode search icon */}
						</div>

						{/* Filter Section */}
						<div className={styles.filterSection}>
								<select>
										<option value="">Select College</option>
										<option value="college1">College 1</option>
										<option value="college2">College 2</option>
								</select>
								<select>
										<option value="">Select Tech Expertise</option>
										<option value="ai">AI</option>
										<option value="web">Web Development</option>
								</select>
								<select>
										<option value="">Select Interest</option>
										<option value="hobbies">Hobbies</option>
										<option value="prof">Professional Interests</option>
								</select>
								<select>
										<option value="">Select Branch</option>
										<option value="cs">Computer Science</option>
										<option value="mech">Mechanical</option>
								</select>
								<button className={styles.applyFilters}>Apply Filters</button>
						</div>

						{/* Sort Options */}
						<div className={styles.sortOptions}>
								<select>
										<option value="relevance">Sort by Relevance</option>
										<option value="most-followed">Most Followed</option>
										<option value="newest">Newest Members</option>
								</select>
						</div>

						{/* Search Results Section */}
						<div className={styles.resultsSection}>
								{/* Hypothetical Alumni List Item Example */}
								<div className={styles.alumniListItem}>
										<img src="https://via.placeholder.com/60" alt="Alumni Photo" />
										<div className={styles.alumniInfo}>
												<h3>John Doe</h3>
												<p>AI Expert | Alumni of College 1</p>
										</div>
										<div className={styles.alumniActions}>
												<button className={`${styles.btn} ${styles.followBtn}`}>Follow</button>
												<button className={`${styles.btn} ${styles.connectBtn}`}>Connect</button>
										</div>
								</div>
								<div className={styles.alumniListItem}>
										<img src="https://via.placeholder.com/60" alt="Alumni Photo" />
										<div className={styles.alumniInfo}>
												<h3>Jane Smith</h3>
												<p>Web Developer | Alumni of College 2</p>
										</div>
										<div className={styles.alumniActions}>
												<button className={`${styles.btn} ${styles.followBtn}`}>Follow</button>
												<button className={`${styles.btn} ${styles.connectBtn}`}>Connect</button>
										</div>
								</div>
								<div className={styles.alumniListItem}>
										<img src="https://via.placeholder.com/60" alt="Alumni Photo" />
										<div className={styles.alumniInfo}>
												<h3>Michael Johnson</h3>
												<p>Mechanical Engineer | Alumni of College 3</p>
										</div>
										<div className={styles.alumniActions}>
												<button className={`${styles.btn} ${styles.followBtn}`}>Follow</button>
												<button className={`${styles.btn} ${styles.connectBtn}`}>Connect</button>
										</div>
								</div>
						</div>

						{/* Pagination */}
						<div className={styles.pagination}>
								<button>Previous</button>
								<button>Next</button>
						</div>
				</div>
		);
}
