import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Database } from "@/types/supabase";
import VideoPlayer from "./video-player";

interface CoursesListProps {
  lessons: Database["public"]["Tables"]["lessons"]["Row"][];
}

const CoursesList = ({ lessons }: CoursesListProps) => {
  return (
    <Accordion type="single" collapsible>
      {lessons.map((lesson) => (
        <AccordionItem value={lesson.title || ""} key={lesson.id}>
          <AccordionTrigger>{lesson.title}</AccordionTrigger>

          <AccordionContent>
            <VideoPlayer video_id={lesson.video_id || ""} />
            {lesson.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CoursesList;
