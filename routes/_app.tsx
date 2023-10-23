import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./index.css" rel="stylesheet" />
        <title>Ulul Azmi</title>
      </Head>
      <body class="bg-[#F0F0FF]">
        <Component />
      </body>
    </html>
  );
}
