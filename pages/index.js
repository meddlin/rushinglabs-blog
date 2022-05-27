import LandingLayout from '../components/landing/landing-layout';
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
					src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/web-header.webp"
					alt="Header image, computers on a desk"
					width="2560"
					height="520"
					priority={true}
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
							src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/grab-camera_flat-color.webp"
							alt="author selfie"
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
							src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/IMG_2231-edited.webp"
							alt="artistic camera"
							width="504"
							height="378"
						/>
					</a>
					<div className={styles.explanation}>
						<p>
							<a href="https://www.youtube.com/c/rushinglabs"><b>Rushing Labs</b>
							</a> on YouTube is where I create tutorials,
							and share my progress building projects.
						</p>
					</div>
				</div>

				<div className={styles.videoScreenshot}>
					<a href="https://github.com/meddlin">
						<Image 
							src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/pexels-negative-space.webp"
							alt="artistic laptop"
							width="513"
							height="342"
						/>
					</a>
					<div className={styles.leftExplanation}>
						<p>
							My <a href="https://github.com/meddlin"><b>GitHub</b></a> profile is where you can find
							a majority of the rest of my online work.
						</p>
					</div>
				</div>

				<hr style={{ width: `50%`, margin: `2em` }}></hr>

				<div className={styles.blogPosts}>
					<span>Check out my recent blog posts</span>
					<ul>
						{previewPosts.map( ({ id, date, title, preview }) => (
							<li key={id}>
								<Link href={`/blog/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small className={utilStyles.subpreview}>
									{date ? (<Date dateString={date} />) : ''}
								</small>
								<p className={styles.preview}>{preview}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.footer}>
					<div className={styles.socialsBar}>
						<div>
							<a href="https://www.youtube.com/c/RushingLabs">
								<Image src="/icons/YouTube_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
						<div>
							<a href="https://www.tiktok.com/@rushinglabs?lang=en">
								<Image src="/icons/tiktok_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
						<div>
							<a href="https://github.com/meddlin">
								<Image src="/icons/GitHub_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
						<div>
							<a href="https://twitter.com/meddlin_dev">
								<Image src="/icons/Twitter_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
					</div>
					<p>Built with <a href="https://nextjs.org/" 
						style={{ color: `black`, fontWeight: `bold`}}>Next.js</a>
					</p>
				</div>
			</div>
		</LandingLayout>
	);
}
