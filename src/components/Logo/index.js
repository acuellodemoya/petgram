import { Link } from "@reach/router";
import * as React from "react";
import { Svg } from "./styles";

export const Logo = (props) => (
  <Link to="/">
    <Svg
      width={363.362}
      height={143.6}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="68.319 3.2 363.362 143.6"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1={0.043}
          x2={0.957}
          y1={0.297}
          y2={0.703}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#ffb200" />
          <stop offset={0.5} stopColor="#e10057" />
          <stop offset={1} stopColor="#5A1A80" />
        </linearGradient>
        <linearGradient id="d" x1={0} x2={0} y1={0} y2={1}>
          <stop offset={0.2} stopColor="#fff" stopOpacity={0.8} />
          <stop offset={0.8} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter id="c" x="-100%" y="-100%" width="300%" height="300%">
          <feMorphology radius={2} />
        </filter>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feFlood floodColor="#fff" result="flood" />
          <feConvolveMatrix
            in="SourceGraphic"
            result="conv"
            order="8,8"
            divisor={1}
            kernelMatrix="0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 1 0 0 0 0 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 0 0 1 0 0 1 1 0 0 1 1 0 0 0 0 1 1 0 0 0"
          />
          <feOffset dy={4} in="conv" result="offset" />
          <feComposite operator="in" in="flood" in2="offset" result="comp" />
          <feGaussianBlur in="offset" stdDeviation={3} result="shadow" />
          <feColorMatrix
            in="shadow"
            values="0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.7 0 0 0 0 0 0.3 0"
            result="dark-shadow"
          />
          <feOffset dy={4} in="dark-shadow" result="offset-shadow" />
          <feOffset dy={2} in="conv" result="offset-2" />
          <feComposite
            operator="out"
            in="offset"
            in2="offset-2"
            result="edge-diff"
          />
          <feGaussianBlur in="edge-diff" stdDeviation={1} result="edge-blur" />
          <feColorMatrix
            in="edge-blur"
            result="edge-shadow"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feComposite
            operator="in"
            in="edge-shadow"
            in2="offset"
            result="edge-shadow-in"
          />
          <feOffset dy={1} in="edge-shadow-in" result="edge-shadow-final" />
          <feMerge result="out">
            <feMergeNode in="offset-shadow" />
            <feMergeNode in="comp" />
            <feMergeNode in="edge-shadow-final" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M5.19.13 2.38 0v-14.56q.31-4.69.5-8.32.18-3.62.68-6.25.5-2.62 1.63-4.4 1.12-1.78 3.37-2.85 4.07-2 14.94-2 4.69 0 7.94.91t4.81 1.72q3.56 1.75 3.56 4.87 0 3.13-1.78 5.66-1.78 2.53-4.62 4.38Q30.56-19 27-17.81q-3.56 1.18-7.12 1.93-6.38 1.25-12.25 1.25l-.25 14q0 .76-2.19.76Zm2.37-21.82q0 3.13 2.69 3.13.38 0 1.31-.03.94-.04 3.28-.19 2.35-.16 4.97-.63 2.63-.47 5.28-1.22 2.66-.75 4.79-1.87 4.81-2.63 4.81-6.69-.94-4.06-7.44-5.19-1.94-.37-3.47-.37-1.53 0-3.62.16-2.1.15-4.85.96-2.75.82-4.62 2.19-1.88 1.38-2.06 3.19-.07.75-.32 1.75-.75 3.19-.75 4.81ZM55.25-4.38q5.5 0 16.56-5 .69 0 1.13.47.44.47.44 1.1-2.5 4.25-9.57 6.62-7.06 2.38-13.18.81-6.94-1.81-8.44-7.81-.13-1.19-.13-3.19t1.03-5.28q1.04-3.28 3.54-6.22 2.5-2.93 5.87-4.62 3.38-1.69 7.19-1.69 3.62 0 8.12 2.5 2.13 1.19 3.38 2.69t1.25 3.06q0 .44-.06.88-.13 3.81-3.69 4.81-1.56.44-3.63.44l-9-.38q-4.5 0-6.87 1.94-1.38 1.06-1.94 3.19 1.56 5.68 8 5.68Zm11.16-19.31q-1.41-1-2.91-1.44-1.5-.43-2.5-.43t-3.25.65q-2.25.66-4 1.47-4.31 2-4.31 4.19 5 .44 7.5.44 6.94 0 9.37-1.19 1.5-.63 1.5-1.56 0-1.13-1.4-2.13ZM86.56-6l.13-10q0-2.38-.44-4.06h-9.69l-.12-4.32h9.37V-40.5q.19-.56.75-1.13.88-.87 1.47-.87.6 0 1.03.12.44.13.94.88 1 4.12 1 12.44 0 2.06.19 4.06 2-.25 4-.25h3.25q1.19 0 2.19-.13l-.19 4.5-9.13-.25.32 21.57q-1.13.5-1.94.5-3.13 0-3.13-6.94Zm34.5 32.75-.87-.06q-1.88 0-4 .25h-2.38q-3.75 0-5.87-1.44-1.13-.75-1.13-2.25l14.38-.69q6.62-.18 6.62-7.12V12l.32-20.13q0-1.06-.07-1.75-10.12 9.44-19.5 9.44-.81 0-1.62-.06-4.19 0-4.19-3.69.13-2.87 1.69-6.34 1.56-3.47 4.03-6.69t5.59-5.78q4.82-3.94 9.32-3.94 5.25 0 8.62 5.56 1 14.88 1 21.13Q133 6 132.81 10q-.18 4-.84 7.31-.66 3.32-1.72 5.25-1.06 1.94-2.5 2.82-2.37 1.37-6.69 1.37Zm3.75-49.13q-.75-.25-2.09-.25-1.34 0-3.47 1.13-2.12 1.12-4.06 2.91-1.94 1.78-3.63 3.96-4.12 5.38-4.12 8.57 0 1 .56 1.5.44.25 1.09.25.66 0 1.91-.22t3.41-1.13q2.15-.9 4.47-2.34 2.31-1.44 4.18-3.19 4.38-4 4.38-7.81 0-2.31-2.63-3.38Zm41.88-.43q-2.63-1.88-6.75-1.88-3.88 0-7.19 1.44-6.25 2.62-8.56 6.75-1 1.87-1 4v2.09q0 1.72.62 4.63.63 2.9.63 5.91-1.31.06-2.13.31-.81.25-1.37.25t-.97-.5q-.41-.5-.91-1.94-.06-.38-.25-2.13-.18-1.75-.47-4.25-.28-2.5-.62-5.46-.34-2.97-.66-5.85-.68-6.25-1.06-9.19 0-1.5 2.19-1.5 1.31 0 2.06 1.1.75 1.09 1.19 2.5.44 1.4.59 2.78.16 1.37.28 1.94 8.25-7.38 20.5-7.38 1.38 0 2.88.06.37-.06.94-.06.56 0 1.12.75.69.88.69 2.13 0 3.12-1.75 3.5Zm29.19 12.43q-4.69 7.38-12.5 9.13-1.82.37-3.29.37-1.46 0-2.43-.03-.97-.03-2.16-.28-1.19-.25-2.19-.81Q171-3.31 171-5.69q-.25-1.12-.25-2.53 0-1.41.63-3.72.62-2.31 2.28-5 1.65-2.69 4.03-4.94 4.94-4.75 10.69-6.12 1.68-.38 3.09-.38t2.53.19q3.63 0 4.88 4.94.81 3.12.96 8.72.16 5.59.32 8.62.15 3.03.78 5.53h-3.69q-.25-1.68-.37-3-.13-1.31-.25-2.43-.32-2.63-.75-4.57Zm-.25-9.68q0-3.63-3.57-3.63-.43-.06-.87-.06-4.56 0-9.63 4.37-2.37 2-4.06 4.5-2.5 3.57-2.5 6.38 0 3.69 4.25 4.37 5.63-.12 10.75-5.12 2.19-2.19 3.63-4.75 2-3.44 2-6.06ZM209.06-1Q206.5.06 205.66.06q-.85 0-1.16-.19-.31-.18-.69-.87 0-2.06.16-5.19.16-3.12.28-6.69.13-3.56.13-7.18 0-3.63-.38-6.63 0-2 2.69-2 .62 0 .97 2.25.34 2.25.5 3.5.15 1.25.28 1.81 1.62-2.93 6.44-4.62 2.56-.81 4.81-.81 2.25 0 3.97.53 1.72.53 2.93 1.94 1.22 1.4 1.22 3.71 1.63-3.06 7.32-5.5 5.18-2.31 9.31-2.31 5.94 0 5.81 4.5l1.31 23.25q0 .31-1.81.44-3.5.25-3.5-.63-.06-1.25-.06-2.5l.31-10.06q0-7.06-1.37-11.19-4.13.32-6.35 1.35-2.22 1.03-3.9 2.56-1.69 1.53-3 4.09-2.94 5.75-2.94 15.25-.38 1.32-2.44 1.32-1.37 0-2.25-.47-.87-.47-.69-.85 1.19-6.62 1.19-10.31 0-2.94-.59-5.59-.6-2.66-1.47-6.1-9 0-12.13 7.19-1.37 3.19-1.53 5.97-.15 2.78-.15 4.75 0 1.97.18 4.22Z"
          fill="url(#b)"
          transform="translate(123.269 110.602)"
        />
      </g>
      <g filter="url(#c)">
        <path
          d="M5.19.13 2.38 0v-14.56q.31-4.69.5-8.32.18-3.62.68-6.25.5-2.62 1.63-4.4 1.12-1.78 3.37-2.85 4.07-2 14.94-2 4.69 0 7.94.91t4.81 1.72q3.56 1.75 3.56 4.87 0 3.13-1.78 5.66-1.78 2.53-4.62 4.38Q30.56-19 27-17.81q-3.56 1.18-7.12 1.93-6.38 1.25-12.25 1.25l-.25 14q0 .76-2.19.76Zm2.37-21.82q0 3.13 2.69 3.13.38 0 1.31-.03.94-.04 3.28-.19 2.35-.16 4.97-.63 2.63-.47 5.28-1.22 2.66-.75 4.79-1.87 4.81-2.63 4.81-6.69-.94-4.06-7.44-5.19-1.94-.37-3.47-.37-1.53 0-3.62.16-2.1.15-4.85.96-2.75.82-4.62 2.19-1.88 1.38-2.06 3.19-.07.75-.32 1.75-.75 3.19-.75 4.81ZM55.25-4.38q5.5 0 16.56-5 .69 0 1.13.47.44.47.44 1.1-2.5 4.25-9.57 6.62-7.06 2.38-13.18.81-6.94-1.81-8.44-7.81-.13-1.19-.13-3.19t1.03-5.28q1.04-3.28 3.54-6.22 2.5-2.93 5.87-4.62 3.38-1.69 7.19-1.69 3.62 0 8.12 2.5 2.13 1.19 3.38 2.69t1.25 3.06q0 .44-.06.88-.13 3.81-3.69 4.81-1.56.44-3.63.44l-9-.38q-4.5 0-6.87 1.94-1.38 1.06-1.94 3.19 1.56 5.68 8 5.68Zm11.16-19.31q-1.41-1-2.91-1.44-1.5-.43-2.5-.43t-3.25.65q-2.25.66-4 1.47-4.31 2-4.31 4.19 5 .44 7.5.44 6.94 0 9.37-1.19 1.5-.63 1.5-1.56 0-1.13-1.4-2.13ZM86.56-6l.13-10q0-2.38-.44-4.06h-9.69l-.12-4.32h9.37V-40.5q.19-.56.75-1.13.88-.87 1.47-.87.6 0 1.03.12.44.13.94.88 1 4.12 1 12.44 0 2.06.19 4.06 2-.25 4-.25h3.25q1.19 0 2.19-.13l-.19 4.5-9.13-.25.32 21.57q-1.13.5-1.94.5-3.13 0-3.13-6.94Zm34.5 32.75-.87-.06q-1.88 0-4 .25h-2.38q-3.75 0-5.87-1.44-1.13-.75-1.13-2.25l14.38-.69q6.62-.18 6.62-7.12V12l.32-20.13q0-1.06-.07-1.75-10.12 9.44-19.5 9.44-.81 0-1.62-.06-4.19 0-4.19-3.69.13-2.87 1.69-6.34 1.56-3.47 4.03-6.69t5.59-5.78q4.82-3.94 9.32-3.94 5.25 0 8.62 5.56 1 14.88 1 21.13Q133 6 132.81 10q-.18 4-.84 7.31-.66 3.32-1.72 5.25-1.06 1.94-2.5 2.82-2.37 1.37-6.69 1.37Zm3.75-49.13q-.75-.25-2.09-.25-1.34 0-3.47 1.13-2.12 1.12-4.06 2.91-1.94 1.78-3.63 3.96-4.12 5.38-4.12 8.57 0 1 .56 1.5.44.25 1.09.25.66 0 1.91-.22t3.41-1.13q2.15-.9 4.47-2.34 2.31-1.44 4.18-3.19 4.38-4 4.38-7.81 0-2.31-2.63-3.38Zm41.88-.43q-2.63-1.88-6.75-1.88-3.88 0-7.19 1.44-6.25 2.62-8.56 6.75-1 1.87-1 4v2.09q0 1.72.62 4.63.63 2.9.63 5.91-1.31.06-2.13.31-.81.25-1.37.25t-.97-.5q-.41-.5-.91-1.94-.06-.38-.25-2.13-.18-1.75-.47-4.25-.28-2.5-.62-5.46-.34-2.97-.66-5.85-.68-6.25-1.06-9.19 0-1.5 2.19-1.5 1.31 0 2.06 1.1.75 1.09 1.19 2.5.44 1.4.59 2.78.16 1.37.28 1.94 8.25-7.38 20.5-7.38 1.38 0 2.88.06.37-.06.94-.06.56 0 1.12.75.69.88.69 2.13 0 3.12-1.75 3.5Zm29.19 12.43q-4.69 7.38-12.5 9.13-1.82.37-3.29.37-1.46 0-2.43-.03-.97-.03-2.16-.28-1.19-.25-2.19-.81Q171-3.31 171-5.69q-.25-1.12-.25-2.53 0-1.41.63-3.72.62-2.31 2.28-5 1.65-2.69 4.03-4.94 4.94-4.75 10.69-6.12 1.68-.38 3.09-.38t2.53.19q3.63 0 4.88 4.94.81 3.12.96 8.72.16 5.59.32 8.62.15 3.03.78 5.53h-3.69q-.25-1.68-.37-3-.13-1.31-.25-2.43-.32-2.63-.75-4.57Zm-.25-9.68q0-3.63-3.57-3.63-.43-.06-.87-.06-4.56 0-9.63 4.37-2.37 2-4.06 4.5-2.5 3.57-2.5 6.38 0 3.69 4.25 4.37 5.63-.12 10.75-5.12 2.19-2.19 3.63-4.75 2-3.44 2-6.06ZM209.06-1Q206.5.06 205.66.06q-.85 0-1.16-.19-.31-.18-.69-.87 0-2.06.16-5.19.16-3.12.28-6.69.13-3.56.13-7.18 0-3.63-.38-6.63 0-2 2.69-2 .62 0 .97 2.25.34 2.25.5 3.5.15 1.25.28 1.81 1.62-2.93 6.44-4.62 2.56-.81 4.81-.81 2.25 0 3.97.53 1.72.53 2.93 1.94 1.22 1.4 1.22 3.71 1.63-3.06 7.32-5.5 5.18-2.31 9.31-2.31 5.94 0 5.81 4.5l1.31 23.25q0 .31-1.81.44-3.5.25-3.5-.63-.06-1.25-.06-2.5l.31-10.06q0-7.06-1.37-11.19-4.13.32-6.35 1.35-2.22 1.03-3.9 2.56-1.69 1.53-3 4.09-2.94 5.75-2.94 15.25-.38 1.32-2.44 1.32-1.37 0-2.25-.47-.87-.47-.69-.85 1.19-6.62 1.19-10.31 0-2.94-.59-5.59-.6-2.66-1.47-6.1-9 0-12.13 7.19-1.37 3.19-1.53 5.97-.15 2.78-.15 4.75 0 1.97.18 4.22Z"
          fill="url(#d)"
          transform="translate(123.124 110.22)"
        />
      </g>
    </Svg>
  </Link>
);
