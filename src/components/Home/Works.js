import styled, { keyframes } from "styled-components";
import Project1 from "../../assets/projects/1.png";
import Project2 from "../../assets/projects/2.png";
import Project3 from "../../assets/projects/3.png";
import Project4 from "../../assets/projects/4.png";
import Project5 from "../../assets/projects/5.png";
import Project6 from "../../assets/projects/6.png";

const Title = styled.h1`
    font-size: 6.250vw;
    font-family: ${props => props.theme.semiBold};

    @media (min-width: 1920px) {
        font-size: 120px;
    }
    @media (max-width: 768px) {
        font-size: 13vw;
        margin-top: 0px;
    }
`
const WorksStyled = styled.section`
    padding: 50px 0;
    margin: 100px 0;

    @media (max-width: 768px) {
        padding: 20px 0;
        margin: 0;
    }
`
const GridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.646vw;
    grid-auto-rows: 1fr;

    @media (min-width: 1920px) {
        font-size: 70px;
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
const ItemText = styled.h2`
    font-size: 1.146vw;
    font-family: ${props => props.theme.semiBold};
    margin-top: 15px;
    margin-bottom: 15px;

    @media (min-width: 1920px) {
        font-size: 22px;
    }
    @media (max-width: 768px) {
        font-size: 3.146vw;
    }
    @media (max-width: 500px) {
        font-size: 4.546vw;  
        margin-bottom: 10px;
    }
`
const ItemClient = styled.p`
    font-size: 0.990vw;
    font-family: ${props => props.theme.medium};
    margin: 0;
    color: #999999;

    @media (min-width: 1920px) {
        font-size: 19px;
    }
    @media (max-width: 768px) {
        font-size: 2.990vw;
    }
    @media (max-width: 500px) {
        font-size: 3.990vw;
    }
`
const ItemPicture = styled.picture`
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    & > img {
        width: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        font-family: "object-fit: cover";
        height: calc(100% + 2px);
        bottom: auto;
        transition: ${props => props.theme.animationSecond};
    }
`
const ItemFigure = styled.figure`
    background: hsla(0,0%,100%,.05);
    display: block;
    position: relative;
    padding-top: 70.33333%;
    margin: 0;
    overflow: hidden;
`
const GridItem = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        &:nth-child(2),
        &:nth-child(5) {
            transform: translateY(120px);
        }
    }
    @media (max-width: 500px) {
        margin: 10px 0;
        justify-content: center;
    }
    &:hover {
        cursor: pointer;
    }
    &:hover ${ItemPicture} {
        & > img {
            transform: scale(1.1);
        }
    }
`
const RollAnimation = keyframes`
     100% {   transform: rotate(360deg);
            -webkit-transform: rotate(360deg); }
`
const Roll = styled.svg`
    width: 14.531vw;
    animation-duration: 1s;
    -webkit-animation: ${RollAnimation} 10s linear infinite;
    -moz-animation: ${RollAnimation} 10s linear infinite;
    -ms-animation: ${RollAnimation} 10s linear infinite;
    -o-animation: ${RollAnimation} 10s linear infinite;
    animation: ${RollAnimation} 10s linear infinite;

    @media (min-width: 1920px) {
        width: 279px;
    }
    @media (max-width: 768px) {
        width: 38.531vw;
    }
`
const RollArrow = styled.svg`
    width: 14.531vw;
    position: absolute;
    transition: ${props => props.theme.animationSecond};

    @media (min-width: 1920px) {
        width: 279px;
    }
    @media (max-width: 768px) {
        width: 38.531vw;
    }
`
const MoreButton = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover {
        transition: ${props => props.theme.animationSecond};
        & > svg:nth-child(1) > path {
            fill: white;
        }
    }
    & > svg:nth-child(1) > path {
        transition: ${props => props.theme.animationSecond};
        fill: ${props => props.theme.grey}
    }
    &:hover ${RollArrow} {
        cursor: pointer;
        transform: rotate(-45deg);
        transition: ${props => props.theme.animationSecond};
    }
`
const Button = styled.section`
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
    margin-right: 50px;

    @media (max-width: 768px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }
`


const Works = () => {
    return(
        <>
            <WorksStyled>
                <Title>Selected works</Title>
                <GridStyled>
                    <GridItem>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project1} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej oraz broszury dla kobiet wspięrających prawdziwą kobiecość
                        </ItemText>
                        <ItemClient>
                            Konfederacja Kobiet RP
                        </ItemClient>
                    </GridItem>
                    <GridItem>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project2} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej przedstawiające urządzenie do bezbolesnej i skutecznej epilacji
                        </ItemText>
                        <ItemClient>
                            My Infinity Clinics
                        </ItemClient>
                    </GridItem>
                    <GridItem>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project3} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Strona dla firmy specjalizującej się w transporcie drogowym, lotniczym, kolejowym oraz morskim
                        </ItemText>
                        <ItemClient>
                            Linktis.pl
                        </ItemClient>
                    </GridItem>
                    <GridItem>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project4} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt strony internetowej dla fundacji dającej głos historii tworzącej audiobooki
                        </ItemText>
                        <ItemClient>
                            Wolne Dźwięki
                        </ItemClient>
                    </GridItem>
                    <GridItem>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project5} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt portalu służący do wymiany opinii między studentami - PogadajmyoStudiach.pl
                        </ItemText>
                        <ItemClient>
                            Stowarzyszenie Studia na Horyzoncie
                        </ItemClient>
                    </GridItem>
                    <GridItem>
                        <ItemFigure>
                            <ItemPicture>
                                <img src={Project6} alt="" />
                            </ItemPicture>
                        </ItemFigure>
                        <ItemText>
                            Projekt dla Souvenir Plaza - największego sklepu z pamiątkami w Warszawie
                        </ItemText>
                        <ItemClient>
                            Souvenir Plaza
                        </ItemClient>
                    </GridItem>
                </GridStyled>
                <Button>
                    <MoreButton>
                        <Roll viewBox="0 0 279 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M156.119 0.892578L159.932 1.39707L163.53 18.1918L160.309 17.7643L159.606 14.4523L152.959 13.5704L151.446 16.5858L148.332 16.1738L156.119 0.892578ZM159.084 11.6141L157.636 4.54343L157.456 4.52032L154.211 10.9632L159.084 11.6141Z" fill="black"/>
                        <path d="M169.106 3.00391L172.078 3.74717L168.841 16.7947L175.169 18.3737L174.512 21.0194L165.212 18.7087L169.106 3.00391Z" fill="black"/>
                        <path d="M182.189 6.51172L185.077 7.54382L180.588 20.214L186.732 22.4014L185.822 24.9739L176.786 21.7544L182.189 6.51172Z" fill="black"/>
                        <path d="M201.384 14.0898L204.602 15.9345L202.963 28.8319L203.085 28.9012L212.908 20.6906L216.126 22.5353L208.131 36.5803L205.57 35.113L210.562 26.3479L210.443 26.2786L202.091 33.122L199.787 31.7895L201.204 20.6829L201.085 20.6136L195.947 29.6021L193.386 28.1348L201.384 14.0898Z" fill="black"/>
                        <path d="M217.754 36.1342L219.317 24.7695L221.959 26.8222L220.807 34.5244L220.934 34.6245L228.045 31.5436L230.733 33.6386L220.212 38.0135L216.372 42.966L213.934 41.0674L217.754 36.1342Z" fill="black"/>
                        <path d="M237.672 39.7188L239.868 42.2412L232.883 51.869L233.002 52.0076L243.581 46.4851L246.066 49.3388L239.188 59.1052L239.292 59.2285L249.779 53.602L251.96 56.1091L237.073 63.6187L234.646 60.8344L241.608 50.8215L241.5 50.6983L230.691 56.2708L228.268 53.4865L237.672 39.7188Z" fill="black"/>
                        <path d="M246.826 63.042C250.855 60.5233 255.839 61.6864 258.419 65.8417C261 69.997 259.805 75.0227 255.816 77.5144C251.826 80.0061 246.796 78.8507 244.211 74.6916C241.627 70.5324 242.76 65.5914 246.826 63.042ZM254.122 74.7878C256.745 73.1511 257.578 70.024 255.939 67.3937C254.299 64.7634 251.131 64.1087 248.508 65.7454C245.886 67.3821 245.052 70.5131 246.707 73.1588C248.362 75.8045 251.465 76.4477 254.122 74.7878Z" fill="black"/>
                        <path d="M264.59 77.2793L267.07 82.7979C268.426 85.8095 267.454 88.7363 264.67 89.9918C263.77 90.412 262.767 90.5582 261.785 90.4124C260.803 90.2666 259.885 89.8352 259.145 89.1715L254.871 95.0059L253.458 91.8673L257.471 86.7338L256.399 84.3538L251.146 86.7299L249.887 83.9263L264.59 77.2793ZM259.92 85.7787C260.546 87.1689 261.84 87.8313 263.376 87.1266C264.697 86.5297 265.258 85.201 264.555 83.6259L263.449 81.1612L258.784 83.2716L259.92 85.7787Z" fill="black"/>
                        <path d="M258.346 105.765L263.91 99.6035L261.341 98.5021L256.53 100.043L255.608 97.1118L270.968 92.2363L271.894 95.167L265.412 97.2235L265.454 97.3545L273.595 100.562L274.747 104.198L266.882 100.874L259.421 109.181L258.346 105.765Z" fill="black"/>
                        <path d="M264.505 108.725L265.081 111.648C263.66 111.956 262.777 113.354 263.18 115.349C263.514 117.047 264.451 117.995 265.649 117.756C269.266 117.04 264.689 109.183 271.156 107.905C273.663 107.404 276.113 108.995 276.8 112.484C277.396 115.499 276.317 118.376 273.033 119.119L272.442 116.104C273.748 115.823 274.446 114.717 274.112 113.023C273.778 111.328 272.784 110.693 271.808 110.889C268.51 111.544 272.903 119.554 266.505 120.821C263.702 121.376 261.172 119.616 260.423 115.815C259.69 112.191 261.364 109.36 264.505 108.725Z" fill="black"/>
                        <path d="M278.505 154.247L278.06 158.098L261.379 161.972L261.763 158.737L265.05 157.967L265.818 151.289L262.761 149.81L263.145 146.668L278.505 154.247ZM267.865 157.405L274.888 155.826L274.911 155.641L268.433 152.495L267.865 157.405Z" fill="black"/>
                        <path d="M276.586 167.303L275.895 170.295L262.839 167.261L261.368 173.631L258.719 173.014L260.881 163.648L276.586 167.303Z" fill="black"/>
                        <path d="M273.31 180.477L272.327 183.388L259.625 179.09L257.539 185.287L254.963 184.413L258.035 175.305L273.31 180.477Z" fill="black"/>
                        <path d="M266.064 199.849L264.274 203.107L251.391 201.671L251.322 201.794L259.666 211.51L257.881 214.768L243.746 206.978L245.171 204.386L254.003 209.25L254.068 209.13L247.114 200.862L248.4 198.513L259.498 199.757L259.567 199.634L250.52 194.646L251.941 192.055L266.064 199.849Z" fill="black"/>
                        <path d="M244.35 216.62L255.689 218.007L253.689 220.702L245.982 219.636L245.886 219.767L249.092 226.849L247.046 229.583L242.518 219.112L237.526 215.361L239.377 212.881L244.35 216.62Z" fill="black"/>
                        <path d="M241.097 236.646L238.617 238.891L228.886 232.043L228.752 232.167L234.427 242.684L231.62 245.222L221.771 238.483L221.652 238.59L227.412 249.015L224.946 251.241L217.259 236.434L219.997 233.957L230.069 240.774L230.192 240.666L224.463 229.918L227.197 227.441L241.097 236.646Z" fill="black"/>
                        <path d="M217.992 246.208C220.565 250.206 219.489 255.22 215.385 257.877C211.28 260.534 206.257 259.417 203.707 255.455C201.158 251.492 202.229 246.428 206.334 243.77C210.439 241.113 215.392 242.168 217.992 246.208ZM206.399 253.71C208.073 256.313 211.203 257.091 213.799 255.412C216.394 253.733 216.993 250.537 215.335 247.933C213.676 245.33 210.531 244.556 207.916 246.247C205.301 247.937 204.698 251.072 206.399 253.71Z" fill="black"/>
                        <path d="M204.084 264.248L198.635 266.824C195.655 268.233 192.722 267.294 191.424 264.532C190.991 263.636 190.829 262.633 190.96 261.645C191.09 260.658 191.506 259.731 192.157 258.979L186.267 254.785L189.373 253.318L194.557 257.258L196.911 256.149L194.461 250.919L197.233 249.613L204.084 264.248ZM195.536 259.688C194.158 260.335 193.52 261.633 194.246 263.181C194.864 264.498 196.212 265.037 197.752 264.309L200.194 263.154L198.017 258.532L195.536 259.688Z" fill="black"/>
                        <path d="M175.595 258.443L181.828 263.923L182.884 261.328L181.282 256.525L184.189 255.555L189.3 270.894L186.393 271.868L184.239 265.402L184.109 265.448L181.037 273.663L177.431 274.872L180.618 266.935L172.189 259.571L175.595 258.443Z" fill="black"/>
                        <path d="M172.719 264.67L169.812 265.294C169.486 263.873 168.08 263.018 166.095 263.446C164.405 263.808 163.48 264.763 163.733 265.961C164.501 269.577 172.266 264.859 173.648 271.325C174.182 273.832 172.638 276.312 169.171 277.059C166.172 277.703 163.288 276.674 162.493 273.389L165.492 272.746C165.792 274.052 166.905 274.733 168.595 274.371C170.284 274.009 170.899 273 170.684 272.007C169.977 268.71 162.063 273.247 160.7 266.85C160.101 264.05 161.817 261.482 165.6 260.669C169.201 259.895 172.051 261.528 172.719 264.67Z" fill="black"/>
                        <path d="M122.493 278.892L118.679 278.369L115.162 261.559L118.38 261.998L119.067 265.31L125.71 266.222L127.246 263.215L130.376 263.642L122.493 278.892ZM119.563 268.159L120.991 275.234L121.175 275.257L124.447 268.829L119.563 268.159Z" fill="black"/>
                        <path d="M109.518 276.724L106.545 275.954L109.84 262.918L103.52 261.308L104.188 258.666L113.48 261.027L109.518 276.724Z" fill="black"/>
                        <path d="M96.45 273.165L93.5662 272.125L98.1126 259.474L91.9688 257.256L92.8903 254.691L101.907 257.949L96.45 273.165Z" fill="black"/>
                        <path d="M77.2928 265.494L74.0788 263.634L75.7569 250.744L75.6378 250.675L65.7769 258.843L62.582 256.991L70.6459 242.98L73.1995 244.459L68.1691 253.205L68.2882 253.274L76.6708 246.466L78.9747 247.806L77.5156 258.916L77.6346 258.986L82.7955 250.02L85.3567 251.484L77.2928 265.494Z" fill="black"/>
                        <path d="M61.016 243.377L59.3994 254.719L56.7691 252.658L57.9748 244.956L57.8481 244.856L50.7212 247.937L48.0332 245.83L58.5662 241.505L62.4061 236.568L64.8406 238.494L61.016 243.377Z" fill="black"/>
                        <path d="M41.1128 239.707L38.9279 237.173L45.955 227.545L45.836 227.406L35.2339 232.894L32.7495 230.033L39.6613 220.293L39.5577 220.17L29.067 225.746L26.8936 223.232L41.8156 215.807L44.2309 218.603L37.2268 228.565L37.3305 228.685L48.1668 223.162L50.5783 225.958L41.1128 239.707Z" fill="black"/>
                        <path d="M32.0582 216.343C28.0185 218.843 23.042 217.66 20.4615 213.474C17.8811 209.288 19.1176 204.289 23.1188 201.817C27.12 199.344 32.1465 200.519 34.7116 204.69C37.2766 208.861 36.1362 213.821 32.0582 216.343ZM24.816 204.563C22.1857 206.188 21.3601 209.315 22.969 211.949C24.578 214.583 27.7574 215.253 30.3916 213.628C33.0258 212.003 33.8476 208.88 32.2233 206.226C30.599 203.573 27.481 202.914 24.816 204.563Z" fill="black"/>
                        <path d="M14.3598 202.028L11.9023 196.498C10.5621 193.479 11.5567 190.556 14.3329 189.312C15.2349 188.895 16.2391 188.753 17.2207 188.904C18.2024 189.054 19.1183 189.491 19.8548 190.159L24.1555 184.34L25.5532 187.486L21.5213 192.604L22.5811 194.988L27.8418 192.635L29.0898 195.443L14.3598 202.028ZM19.0676 193.556C18.4455 192.161 17.1668 191.495 15.6116 192.192C14.283 192.785 13.7185 194.118 14.4136 195.685L15.5118 198.154L20.1812 196.066L19.0676 193.556Z" fill="black"/>
                        <path d="M20.7301 173.564L15.1353 179.726L17.7004 180.835L22.5195 179.329L23.4296 182.264L8.03145 187.074L7.11754 184.139L13.607 182.114L13.5686 181.983L5.43949 178.736L4.31055 175.097L12.1594 178.428L19.6665 170.129L20.7301 173.564Z" fill="black"/>
                        <path d="M14.5829 170.573L14.0184 167.646C15.4392 167.346 16.3224 165.952 15.9384 163.957C15.6081 162.255 14.675 161.304 13.477 161.535C9.85591 162.236 14.3986 170.111 7.92826 171.367C5.41694 171.852 2.97474 170.254 2.30275 166.745C1.72292 163.741 2.7981 160.868 6.09661 160.141L6.68028 163.156C5.37086 163.433 4.66815 164.535 4.99455 166.237C5.32094 167.939 6.31165 168.571 7.29851 168.378C10.6047 167.739 6.24253 159.709 12.6437 158.473C15.4507 157.93 17.9735 159.698 18.707 163.51C19.4135 167.142 17.7278 169.957 14.5829 170.573Z" fill="black"/>
                        <path d="M0.494141 128.149L0.878134 124.298L17.4897 120.123L17.1633 123.358L13.8878 124.174L13.2389 130.864L16.3108 132.281L16.0037 135.427L0.494141 128.149ZM11.0732 124.794L4.08064 126.5L4.06144 126.685L10.5893 129.716L11.0732 124.794Z" fill="black"/>
                        <path d="M2.15332 115.062L2.79843 112.054L15.9118 114.85L17.2712 108.453L19.9284 109.023L17.9278 118.424L2.15332 115.062Z" fill="black"/>
                        <path d="M5.20215 101.827L6.12757 98.8965L18.9261 102.948L20.8998 96.7168L23.4726 97.5563L20.5734 106.718L5.20215 101.827Z" fill="black"/>
                        <path d="M12.0947 82.3292L13.8227 79.0365L26.7326 80.2264L26.7979 80.1032L18.277 70.5525L20.005 67.2598L34.2857 74.7964L32.9149 77.4113L23.9947 72.7091L23.9294 72.8323L31.0333 80.9697L29.7892 83.342L18.6725 82.3022L18.6073 82.4254L27.7578 87.247L26.3678 89.8542L12.0947 82.3292Z" fill="black"/>
                        <path d="M33.5176 65.1647L22.1514 63.9862L24.1059 61.2673L31.828 62.1762L31.924 62.0453L28.5909 55.0247L30.5839 52.248L35.3032 62.646L40.368 66.3046L38.5633 68.8194L33.5176 65.1647Z" fill="black"/>
                        <path d="M36.3896 45.0761L38.828 42.7885L48.6813 49.4586L48.8157 49.3354L42.9483 38.9374L45.7092 36.3225L55.693 42.8694L55.812 42.7577L49.8294 32.4714L52.2524 30.1992L60.2241 44.8642L57.5362 47.3906L47.3411 40.7513L47.2259 40.8629L53.1471 51.5036L50.4592 54.0299L36.3896 45.0761Z" fill="black"/>
                        <path d="M59.3145 35.099C56.6688 31.1478 57.6557 26.1144 61.7107 23.384C65.7656 20.6535 70.8113 21.6818 73.4302 25.5945C76.049 29.5072 75.0737 34.5945 71.0187 37.325C66.9637 40.0554 61.9871 39.0926 59.3145 35.099ZM70.7729 27.3968C69.0526 24.8281 65.9077 24.108 63.3426 25.8333C60.7775 27.5586 60.2361 30.7665 61.9564 33.3352C63.6767 35.9039 66.8216 36.6241 69.4059 34.8757C71.9902 33.1273 72.5201 29.9925 70.7652 27.3853L70.7729 27.3968Z" fill="black"/>
                        <path d="M72.8965 16.8097L78.3108 14.1331C81.2675 12.6697 84.2166 13.5555 85.5644 16.2936C86.0134 17.1814 86.193 18.1816 86.0811 19.1707C85.9692 20.1597 85.5706 21.0942 84.9347 21.8585L90.8981 25.9445L87.8262 27.4849L82.5654 23.6146L80.2269 24.7699L82.7766 29.9496L80.0272 31.3168L72.8965 16.8097ZM81.5171 21.1999C82.8842 20.5221 83.4986 19.2166 82.7459 17.68C82.1047 16.3745 80.7453 15.8623 79.217 16.6171L76.7979 17.8109L79.0596 22.4323L81.5171 21.1999Z" fill="black"/>
                        <path d="M101.484 22.0936L95.1522 16.7252L94.1462 19.3362L95.8319 24.1077L92.9443 25.1552L87.5684 9.9087L90.456 8.88046L92.7254 15.308L92.856 15.2617L95.7743 6.98956L99.3608 5.71484L96.3157 13.7097L104.879 20.9152L101.484 22.0936Z" fill="black"/>
                        <path d="M104.245 15.8149L107.14 15.141C107.494 16.5505 108.914 17.3823 110.892 16.9202C112.574 16.5351 113.484 15.553 113.196 14.3592C112.355 10.7623 104.687 15.6185 103.185 9.17945C102.605 6.68394 104.103 4.17301 107.559 3.36428C110.543 2.66723 113.445 3.64926 114.298 6.91115L111.314 7.61205C110.988 6.31038 109.867 5.64799 108.181 6.0408C106.495 6.43361 105.908 7.45416 106.138 8.44389C106.906 11.7289 114.732 7.04594 116.214 13.4157C116.863 16.2077 115.197 18.8072 111.43 19.6853C107.851 20.5325 104.975 18.942 104.245 15.8149Z" fill="black"/>
                        </Roll>
                        <RollArrow viewBox="0 0 279 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M120.25 137.893H118.25V141.893H120.25V137.893ZM120.25 141.893H158.75V137.893H120.25V141.893Z" fill="#E61E29"/>
                            <path d="M139.5 120.643L158.75 139.893L139.5 159.143" stroke="#E61E29" stroke-width="4" stroke-linecap="square"/>
                        </RollArrow>
                    </MoreButton>
                </Button>
            </WorksStyled>
        </>
    )
}

export default Works;