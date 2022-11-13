import styles from './anchors.module.css';

function getAnchor(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-');
}

const H2 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h2 id={anchor} style={{ position: `relative` }}>
            {children}
            <a href={link} className={styles.anchor}>
                §
            </a>
        </h2>
    )
}

const H3 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h3 id={anchor} style={{ position: `relative` }}>
            {children}
            <a href={link} className={styles.anchor}>
                §
            </a>
        </h3>
    )
}

const H4 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
        <h4 id={anchor} style={{ position: `relative` }}>
            {children}
            <a href={link} className={styles.anchor}>
                §
            </a>
        </h4>
    )
}

export { H2, H3, H4, getAnchor };