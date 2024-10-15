

export const ArrowDown = ({height, width, hover}: {height: string, width: string, hover: boolean}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={hover ? "white" : "#B1AFFF"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-to-arc"
            style={{
                transition: hover ? "stroke 0.1s ease" : "none", // Ajoute une transition de 0.5s sur la couleur
              }}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3v12" />
            <path d="M16 11l-4 4l-4 -4" />
            <path d="M3 12a9 9 0 0 0 18 0" />
        </svg>
    );
}