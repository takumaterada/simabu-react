/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // trueになってるとコンポーネントが２回レンダリングされてしまう。不要な再レンダリングを検知するために。
  // React18からの機能
};

module.exports = nextConfig;
