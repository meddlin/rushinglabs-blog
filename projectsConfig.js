module.exports = {
    projectsMeta: [
        {
            title: 'Amortization Calculator',
            published: true,
            summary: "While shopping for a house, I needed an amortization calculator that was more helpful to my budget than what I was finding online. So, I made one. I also took the opportunity to test what kind of CI/CD pipeline--with security tests--can be created (for free) with the built-in tools available on GitHub. The demo is hosted on Heroku via Docker containers.",
            links: [
                {
                    text: 'Check the code on GitHub!',
                    url: "https://github.com/meddlin/amortize"
                },
                {
                    text: "Project Site",
                    url: "https://meddlin.github.io/amortize/"
                },
                {
                    text: "Demo",
                    url: "https://amortize-client.herokuapp.com/"
                }
            ],
            images: [
                {
                    size: 'lg',
                    url: 'https://meddlin-web.s3.us-east-2.amazonaws.com/post_2021-09-24/amortize-demo-screenshot.png',
                    alt: "Boring screenshot of an amortization table",
                    height: 300,
                    width: 450
                }
            ]
        },
        {
            title: "Rushing Labs (website)",
            published: true,
            summary: "Originally, I was just playing around with hosting a blog, and over time it has ballooned into a happy little place to share some of the developery stuff I do.",
            links: [
                {
                    text: "Check the code on GitHub",
                    url: "https://github.com/meddlin/rushinglabs-blog-nextjs"
                }
            ],
            images: []
        },
        {
            title: 'cpat',
            published: false,
            summary: '',
            links: [
                {
                    text: '',
                    url: ''
                }
            ],
            images: [
                {
                    size: '',
                    url: ''
                }
            ]
        },
        {
            title: 'owasp',
            published: true,
            summary: 'OWASP Top 10 is considered the "gateway to AppSec", so naturally I\'m interested. But quickly I found it confusing to read about generic security vulnerabilities when I was used to code snippets and hands-on examples as a developer. So, I brought the two ideas together: OWASP Top 10 + hands-on code.',
            links: [
                {
                    text: 'Click here for the articles',
                    url: 'https://rushinglabs.com/projects/owasp'
                }
            ],
            images: [
                {
                    size: '',
                    url: ''
                }
            ]
        }
    ]
}
