"use client";

import React from "react";

import { mediaStyles } from "@/containers/media";

function RootHead() {
  return (
    <head>
      <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="MyWebSite" />

      <style key="fresnel-css" dangerouslySetInnerHTML={{ __html: mediaStyles }} type="text/css" />
    </head>
  );
}

export default RootHead;
