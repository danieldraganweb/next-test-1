export default function AboutWithId({ params }: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold text-center">
        This is the about page with ID : {params.id}
      </h1>
    </main>
  );
}
