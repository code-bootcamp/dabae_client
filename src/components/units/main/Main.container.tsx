import { useQuery } from "@apollo/client";
import MainPresenter from "./Main.presenter";
import {
  CHEAP_COURSES,
  FETCH_PICKS_BY_USER,
  HOT_COURSES,
  NEW_COURSES,
} from "./Main.queries";

export default function MainContainer() {
  const { data: hotCourses } = useQuery(HOT_COURSES);
  const { data: newCourses } = useQuery(NEW_COURSES);
  const { data: cheapCourses } = useQuery(CHEAP_COURSES);

  const { data: pickList } = useQuery(FETCH_PICKS_BY_USER);

  return (
    <MainPresenter
      hotCourses={hotCourses}
      newCourses={newCourses}
      cheapCourses={cheapCourses}
      pickList={pickList}
    />
  );
}
