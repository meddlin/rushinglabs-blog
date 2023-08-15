import Link from 'next/dist/client/link';
import LandingLayout from '../components/landing/landing-layout';

const Home = () => {
	return (
		<LandingLayout>
			<h1 className="text-xl">An MDX docs site</h1>

			<div className="flex flex-col justify-center">
				<p>
				<Link href="/blog">Go to blog</Link>
				</p>
				<p>More coming soon...</p>
			</div>
		</LandingLayout>
	);
};

export default Home;