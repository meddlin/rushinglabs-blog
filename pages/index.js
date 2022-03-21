import LandingLayout from '../components/landing-layout';
import styles from '../styles/landing.module.css';
import Image from 'next/image';

export default function Home() {
	return (
		<LandingLayout>
			<div className={styles.heroImage}>
				<Image 
					src="https://meddlin-web.s3.us-east-2.amazonaws.com/landing-page/website-header-02.png"
					width="1920"
					height="520"
				/>
			</div>

			<div className={styles.summaries}>
				<p>summary text here</p>
				<div>headshot image</div>
				<p>summary text here</p>
			</div>

			<div className={styles.videoScreenshot}>
				<div>video screenshot</div>
				<div>video explanation</div>
			</div>
			<div className={styles.videoScreenshot}>
				<div>video screenshot</div>
				<div>video explanation</div>
			</div>

			<div className={styles.blogPosts}>
				<ul>
					<li>blog posts here...</li>
				</ul>
			</div>
		</LandingLayout>
	);
}
