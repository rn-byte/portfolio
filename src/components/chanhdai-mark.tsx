export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 160 48"
      {...props}
    >
      <text
        x="2"
        y="36"
        fill="currentColor"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        fontWeight="800"
        fontSize="32"
        letterSpacing="3"
      >
        rnt
      </text>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 48"><text x="2" y="36" fill="${color}" fontFamily="monospace" fontWeight="bold" fontSize="32">RN_</text></svg>`;
}
