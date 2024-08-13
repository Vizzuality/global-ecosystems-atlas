export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">Welcome to the Atlas</h1>
        <p className="max-w-96 text-xl">
          <span
            className="relative bg-transparent bg-gradient-to-r from-red-500 to-red-500 bg-clip-text bg-no-repeat leading-normal text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#FFF,#FFF),linear-gradient(90deg,rgba(255,255,255,.1),rgba(255,255,255,.1))",
              backgroundPositionX: "calc(200% - 100% * 0.55), 0",
              backgroundPositionY: "100%",
              backgroundSize: "200% 100%, 100% 100%",
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum aspernatur
            ullam unde. Asperiores perspiciatis libero aliquid adipisci reiciendis sequi autem
            aliquam minima, et, animi, id optio dolor molestiae totam!
          </span>
        </p>
      </section>
    </main>
  );
}
