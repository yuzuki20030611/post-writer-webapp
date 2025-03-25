import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNextjsで開発を進めています。
            AppRouterを使用しており、ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link
              href={"/login"}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 space-y-6 mx-4"
      >
        <div className="text-center space-y-6 max-w-[58rem] mx-auto">
          <h2 className="font-extrabold text-3xl md:text-6xl">
            サービスの特徴
          </h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            このプロジェクトはモダンな技術スタックを使用して作成されたアプリケーションです。
            AppRouterやTypescriptを使用して作成していて、ブログ投稿ができます。
          </p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M19.9 21L9.2 7.2H7.2V16.8H8.8V9.2L18.7 22C19.1 21.7 19.5 21.4 19.9 21Z"
                  fill="white"
                />
                <rect x="15.3" y="7.2" width="1.6" height="9.6" fill="white" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M19.9 21L9.2 7.2H7.2V16.8H8.8V9.2L18.7 22C19.1 21.7 19.5 21.4 19.9 21Z"
                  fill="white"
                />
                <rect x="15.3" y="7.2" width="1.6" height="9.6" fill="white" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M19.9 21L9.2 7.2H7.2V16.8H8.8V9.2L18.7 22C19.1 21.7 19.5 21.4 19.9 21Z"
                  fill="white"
                />
                <rect x="15.3" y="7.2" width="1.6" height="9.6" fill="white" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M19.9 21L9.2 7.2H7.2V16.8H8.8V9.2L18.7 22C19.1 21.7 19.5 21.4 19.9 21Z"
                  fill="white"
                />
                <rect x="15.3" y="7.2" width="1.6" height="9.6" fill="white" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M19.9 21L9.2 7.2H7.2V16.8H8.8V9.2L18.7 22C19.1 21.7 19.5 21.4 19.9 21Z"
                  fill="white"
                />
                <rect x="15.3" y="7.2" width="1.6" height="9.6" fill="white" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background border p-2 rounded-lg">
            <div className="flex flex-col justify-between p-6 h-[180px]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="black" />
                <path
                  d="M19.9 21L9.2 7.2H7.2V16.8H8.8V9.2L18.7 22C19.1 21.7 19.5 21.4 19.9 21Z"
                  fill="white"
                />
                <rect x="15.3" y="7.2" width="1.6" height="9.6" fill="white" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  AppRouter/Layouts/APIRoutesの技術を使用
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            Post Writerはログインするとブログ投稿をできるようになります。
          </p>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold md:text-6xl">Contact me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしWebサービスが気に入った場合は、以下xからご連絡ください
            <br />
            お仕事の依頼をお持ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はxまで
          </Link>
        </div>
      </section>
    </>
  );
}
