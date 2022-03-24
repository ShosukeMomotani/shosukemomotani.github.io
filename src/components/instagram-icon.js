import { Icon, SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import instagramImg from "../contents/Instagram_Glyph_Gradient_RGB.png";

const StyledImg = styled("img")({
  display: "flex",
  height: "18px",
  width: "18px",
});

export default function InstagramIcon(props) {
  return (
    <>
      <Icon sx={{ p: "3px" }}>
        <StyledImg src={instagramImg} />
      </Icon>
      <SvgIcon>
        <g
          transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path d="M3449 9979 c-712 -19 -1035 -52 -1387 -144 -274 -72 -594 -209 -802 -345 -296 -193 -604 -510 -783 -805 -259 -427 -399 -945 -433 -1601 l-7 -130 437 -624 436 -623 0 319 c0 331 12 766 30 1059 44 711 246 1191 643 1524 191 160 393 266 651 341 412 119 822 140 2766 140 1944 0 2354 -21 2766 -140 340 -99 610 -267 825 -514 169 -194 281 -403 359 -670 119 -412 140 -822 140 -2766 0 -1944 -21 -2354 -140 -2766 -78 -267 -190 -476 -359 -670 -330 -379 -778 -569 -1456 -619 -294 -21 -647 -28 -1686 -34 l-1177 -6 312 -445 312 -445 779 2 c1296 2 1731 27 2143 119 427 95 812 272 1112 512 122 97 325 300 422 422 214 269 385 621 483 992 131 501 155 957 155 2938 0 1981 -24 2437 -155 2938 -72 274 -209 593 -345 802 -181 278 -472 569 -750 750 -209 136 -528 273 -802 345 -507 132 -966 156 -3003 153 -665 -1 -1334 -5 -1486 -9z" />
          <path d="M7518 8244 c-102 -24 -196 -79 -278 -163 -120 -121 -171 -248 -171 -421 -1 -329 262 -592 591 -591 173 0 300 51 421 171 334 328 180 889 -276 1005 -72 18 -210 18 -287 -1z" />
          <path d="M4700 7545 c-479 -58 -932 -249 -1310 -551 -196 -156 -422 -412 -565 -639 -73 -116 -182 -340 -233 -480 -51 -139 -106 -364 -129 -520 -21 -149 -24 -536 -5 -670 85 -592 330 -1092 732 -1495 403 -402 904 -649 1490 -732 124 -17 534 -17 655 1 481 70 910 254 1275 547 109 87 297 275 384 384 700 874 757 2097 141 3025 -101 153 -190 261 -324 396 -414 413 -937 666 -1520 734 -151 18 -444 18 -591 0z m633 -914 c661 -143 1154 -637 1299 -1304 19 -89 22 -131 22 -327 0 -196 -3 -238 -22 -327 -146 -669 -636 -1159 -1305 -1305 -89 -19 -131 -22 -327 -22 -197 0 -238 3 -330 22 -569 124 -1018 506 -1225 1042 -160 414 -142 893 49 1295 239 504 701 850 1252 940 133 21 457 14 587 -14z" />
        </g>
      </SvgIcon>
    </>
  );
}