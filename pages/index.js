import LandingLayout from '../components/landing-layout';
import styles from '../styles/landing.module.css';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();

	return {
		props: {
			previewPosts: allPostsData.slice(0, 5),
		}
	}
}

export default function Home({ previewPosts }) {
	return (
		<LandingLayout>
			<div className={styles.heroImage}>
				<Image 
					src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/web-header-03_H-520.png"
					width="1920"
					height="520"
				/>
			</div>

			<div className={styles.content}>
				<div className={styles.summaries}>
					<p>
						Hi! I'm Darrien, a software engineer
						and content creator based in Austin, TX.
					</p>
					<div>
						<Image
							src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/grab-camera_flat-color_1.1.3.png"
							width="1920"
							height="1080"
						/>
					</div>
					<p className={styles.summariesSecondary}>
						With over 8 years in the tech industry, I wanted
						to create a space to share what I've built,
						create tutorials to help others, and share some
						ideas for what I'd like to build in the future.
					</p>
				</div>

				<div className={styles.videoScreenshot}>
					<a href="https://www.youtube.com/c/RushingLabs">
						<Image 
							src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/pexels-josh-sorenson-1714208.jpg"
							width="513"
							height="342"
						/>
					</a>
					<div className={styles.explanation}>
						<p>
							This is a video. I talk about stuff in it. 
							Including how I've built my home dev space.
						</p>
					</div>
				</div>

				<div className={styles.videoScreenshot}>
					<a href="https://www.youtube.com/c/RushingLabs">
						<Image 
							src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/pexels-negative-space-160107.jpg"
							width="513"
							height="342"
						/>
					</a>
					<div className={styles.explanation}
						style={{ marginLeft: `-160px` }}>
						<p>
							Another video. This is an example of one of 
							my programming tutorials.
						</p>
					</div>
				</div>

				<div className={styles.blogPosts}>
					<span>Recent blog posts</span>
					<ul>
						{previewPosts.map( ({ id, date, title, preview }) => (
							<li>
								<Link href={`/blog/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small className={utilStyles.subpreview}>
									{date ? (<Date dateString={date} />) : ''}
								</small>
								<p>{preview}</p>

								<Link href={`/blog/${id}`}>
									<a className={utilStyles.readMoreLink}>Read More &mdash;&gt;</a>	
								</Link>
							</li>
						))}

						{/* <li>
							<a href="">
								<span>Blog post title...</span>
							</a>
							<p>03 / 22 / 2022</p>
						</li>
						<li>
							<a href="">
							<span>Insert Another Post</span>
							</a>
							<p>03 / 22 / 2022</p>
						</li>
						<li>
							<a href="">
							<span>yet more writing</span>
							</a>
							<p>03 / 22 / 2022</p>
						</li>
						<li>
							<a href="">
							<span>lorem ipsum...</span>
							</a>
							<p>03 / 22 / 2022</p>
						</li>
						<li>
							<a href="">
							<span>blog posts here...</span>
							</a>
							<p>03 / 22 / 2022</p>
						</li> */}
					</ul>
				</div>
			</div>
		</LandingLayout>
	);
}
