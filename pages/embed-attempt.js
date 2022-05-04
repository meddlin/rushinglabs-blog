import TikTok from "../components/embeds/tiktok";

export default function EmbedAttempt() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {/* #1 */}
            <div style={{ display: 'flex' }}>
                <TikTok url="https://www.tiktok.com/@rushinglabs/video/7066058186926837039" />
                <p>#1 - Some Hardware</p>
            </div>

            {/* #2 */}
            <div style={{ display: 'flex' }}>
                <TikTok url="https://www.tiktok.com/@rushinglabs/video/7075690948541353258" />
                <p>#2 - More Hardware</p>
            </div>

            {/* #3 */}
            <div style={{ display: 'flex' }}>
                <TikTok url="https://www.tiktok.com/@rushinglabs/video/7075775631426096430" />
                <p>#3 - Camera Setup</p>
            </div>
        </div>
    );
}