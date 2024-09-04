// ForumPage.jsx
import React from 'react';
import styles from './ForumPage.module.css';


const ForumPage = () => {
	return (
		<div>
			<div className={styles.navbar}>
				<a href="#" className={styles.navLink}>Dashboard</a>
				<a href="#" className={styles.navLink}>Forum</a>
				<a href="#" className={styles.navLink}>Profile</a>
			</div>

			<div className={styles.searchBar}>
				<input type="text" placeholder="Search discussions..." className={styles.searchInput} />
			</div>

			<div className={styles.contentWrapper}>
				<div className={styles.sidebar}>
					<h3>Categories</h3>
					<ul>
						<li><a href="#">Tech Talks</a></li>
						<li><a href="#">Webinars</a></li>
						<li><a href="#">Meetups</a></li>
						<li><a href="#">General Discussions</a></li>
					</ul>
				</div>

				<div className={styles.mainContent}>
					<div className={styles.pinnedDiscussions}>
						<h3>Pinned Discussions</h3>
						<p>Discussion on Upcoming Technologies in 2024.</p>
					</div>

					<div className={styles.discussionThreads}>
						<h3>Discussion Threads</h3>

						{/* Hypothetical thread example */}
						<div className={styles.thread}>
							<div className={styles.userInfo}>
								<img src="user-avatar.png" alt="User Avatar" className={styles.userAvatar} />
								<div>
									<p className={styles.threadTitle}>How to get started with AI?</p>
									<p className={styles.threadStats}>Replies: 12 | Views: 150 | Last updated: 2 hours ago</p>
								</div>
							</div>
							<button className={styles.replyBtn}>Reply</button>
						</div>

						<div className={styles.thread}>
							<div className={styles.userInfo}>
								<img src="user-avatar.png" alt="User Avatar" className={styles.userAvatar} />
								<div>
									<p className={styles.threadTitle}>Best Practices for Web Development in 2024</p>
									<p className={styles.threadStats}>Replies: 8 | Views: 90 | Last updated: 5 hours ago</p>
								</div>
							</div>
							<button className={styles.replyBtn}>Reply</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ForumPage;
