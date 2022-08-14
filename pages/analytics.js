import Layout from '../components/layout';

function Analytics() {
    return (
        <Layout home footerDisplay={true}>
            <iframe 
                plausible-embed="true" 
                src="https://plausible.io/share/rushinglabs.com?auth=gYNG7F_iwkkg2A9WQJyxx&embed=true&theme=light" 
                scrolling="no" frameBorder="0" loading="lazy" 
                style={{ width: `1px`, minWidth: `100%`, height: `1600px` }}>
            </iframe>
            <div style={{ fontSize: `14px`, paddingBottom: `14px`}}>
                Stats powered by 
                <a target="_blank" style={{ color: `#4F46E5`, textDecoration: `underline` }} 
                href="https://plausible.io">Plausible Analytics</a>
            </div>
                <script async src="https://plausible.io/js/embed.host.js"></script>
        </Layout>
    );
};

export default Analytics;