import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

const MyHighlighter = ({ 
    language, 
    children, 
    showLineNumbers, 
    showInlineLineNumbers 
}) => {
    return (
        <SyntaxHighlighter 
            className="text-xs" // Tailwind classes here

            language={language} 
            style={a11yDark} 
            showLineNumbers={showLineNumbers ? true : false}
            showInlineLineNumbers={showInlineLineNumbers ? true : false}
        >
                {children}
        </SyntaxHighlighter>
    );
}

export default MyHighlighter;