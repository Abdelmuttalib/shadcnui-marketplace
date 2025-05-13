import React from "react";

type IframeProps = React.DetailedHTMLProps<
  React.IframeHTMLAttributes<HTMLIFrameElement>,
  HTMLIFrameElement
>;

export function IFrame({ ...props }: IframeProps) {
  return <iframe loading={props.loading || "lazy"} {...props} />;
}
