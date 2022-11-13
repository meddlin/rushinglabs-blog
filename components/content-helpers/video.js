/**
 * Video
 * - Takes in a .webm video, and creates an HTML5 WebM embedded video for it.
 * - Can optionally pass in a width for the video
 */
function Video({ children, src, width }) {
    // TODO: Test the 'src' prop for having .webm as a file suffix
    width = width !== undefined || "" ? width : "100%";

    return (
        <video controls width={width}>
            <source src={src}
                type="video/webm" />
        </video>
    );
}

export { Video };