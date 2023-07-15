import Image from 'next/image';
import styles from './layout.module.css';

const Footer = () => {
    return (
        <div className="w-full h-32 mt-12 flex flex-col justify-center items-center bg-inherit mb-24">

            {/* <div className="flex">
              <div className="px-4">
                <a href="https://www.youtube.com/c/RushingLabs">
                  <Image src="/icons/YouTube_SVG-icon.svg" width="30" height="30" />
                </a>
              </div>
              <div className="px-4">
                <a href="https://www.tiktok.com/@rushinglabs?lang=en">
                  <Image src="/icons/tiktok_SVG-icon.svg" width="30" height="30" />
                </a>
              </div>
              <div className="px-4">
                <a href="https://github.com/meddlin">
                  <Image src="/icons/GitHub_SVG-icon.svg" width="30" height="30" />
                </a>
              </div>
              <div className="px-4">
                <a href="https://twitter.com/meddlin_dev">
                  <Image src="/icons/Twitter_SVG-icon.svg" width="30" height="30" />
                </a>
              </div>
            </div> */}

            <div className="flex flex-row text-xs border-t-2 border-t-gray mt-24">
                <div className="flex flex-col mx-16 mt-4">
                    <a className="py-2"
                        href="https://rushinglabs.com">Home</a>
                    <a className="py-2"
                        href="https://rushinglabs.com/about">About</a>
                    <a className="py-2"
                        href="https://linktr.ee/rushinglabs">Links</a>
                </div>

                <div className="flex flex-col mx-16 mt-4">
                    <a className="py-2"
                        href="https://github.com/meddlin">GitHub</a>
                    <a className="py-2"
                        href="https://youtube.com/@rushinglabs">YouTube</a>
                    <a className="py-2"
                        href="https://twitter.com/meddlin_dev">Twitter</a>
                    <a className="py-2"
                        href="https://www.tiktok.com/@rushinglabs">TikTok</a>
                </div>

                <div className="flex flex-col mx-16 mt-4">
                    <a className="py-2"
                        href="https://kit.co/meddlin">Gear</a>
                    <a className="py-2"
                        href="https://www.youtube.com/channel/UC_y1S4qIDJ9G0CU2EzVeDtw">Gaming</a>
                    <a className="py-2"
                        href="https://plausible.io/rushinglabs.com">Analytics</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;