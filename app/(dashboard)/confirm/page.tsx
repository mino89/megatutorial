export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const success = searchParams.success;
  if (success !== "true") {
    return (
      <div className="p-24 place-content-center w-full ">
        Qualcosa è andato storto
      </div>
    );
  } else {
    return (
      <div className="p-24 place-content-center w-full">
        Grazie avrai presto delle nostre notizie sulla tua email
      </div>
    );
  }
}
