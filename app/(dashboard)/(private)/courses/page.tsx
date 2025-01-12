import { createClient } from "@/utils/supabase/server";
import CoursesList from "./_components/courses-list";

const CoursesPage = async () => {
  const supabaseClient = await createClient();
  const { data } = await supabaseClient.from("lessons").select();

  return (
    <div className="py-24 px-10 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Lezioni</h1>
      {!data?.length ? (
        <div>Non ci sono lezioni!</div>
      ) : (
        <CoursesList lessons={data} />
      )}
    </div>
  );
};

export default CoursesPage;
