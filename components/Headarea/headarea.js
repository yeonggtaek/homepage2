import React from "react";
import Head from "next/head";

export default function HeadArea({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content="Yeongtaek Lee" />
      <meta name="description" content="make homepage" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="favicon.ico" />
    </Head>
  );
}
