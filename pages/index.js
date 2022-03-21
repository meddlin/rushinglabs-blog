import LandingLayout from '../components/landing-layout';
import styles from '../styles/landing.module.css';




export default function Home() {
	return (
		<LandingLayout>
			<div>hero image</div>

			<p>summary text here</p>
			<div>headshot image</div>
			<p>summary text here</p>

			<div>
				<div>video screenshot</div>
				<div>video explanation</div>
			</div>
			<div>
				<div>video screenshot</div>
				<div>video explanation</div>
			</div>

			<div>
				<ul>
					<li>blog posts here...</li>
				</ul>
			</div>
		</LandingLayout>
	);
}
