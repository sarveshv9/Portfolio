export default function ProjectIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            {/* Background cards - will slide outward on hover */}
            <g id="project-windows">
                {/* Bottom card */}
                <rect
                    x="50"
                    y="95"
                    width="100"
                    height="70"
                    rx="8"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line
                    x1="50"
                    y1="110"
                    x2="150"
                    y2="110"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <line x1="60" y1="125" x2="100" y2="125" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <line x1="60" y1="135" x2="120" y2="135" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

                {/* Middle card */}
                <rect
                    x="50"
                    y="70"
                    width="100"
                    height="70"
                    rx="8"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line
                    x1="50"
                    y1="85"
                    x2="150"
                    y2="85"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <line x1="60" y1="100" x2="110" y2="100" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <line x1="60" y1="110" x2="130" y2="110" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </g>

            {/* Top card - will tilt slightly on hover */}
            <g id="laptop-body">
                <rect
                    x="50"
                    y="45"
                    width="100"
                    height="70"
                    rx="8"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <line
                    x1="50"
                    y1="60"
                    x2="150"
                    y2="60"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
                <line x1="60" y1="75" x2="115" y2="75" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <line x1="60" y1="85" x2="125" y2="85" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
            </g>

            {/* Empty groups to maintain animation compatibility */}
            <g id="screen"></g>
            <g id="keyboard"></g>
            <g id="brackets"></g>
        </svg>
    );
}
