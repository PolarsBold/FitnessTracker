import ActivitiesList from "./ActivitiesList";
import { useAuth } from "../auth/AuthContext";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const { token } = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ActivitiesList />
      {token && <ActivityForm />}
    </>
  );
}
