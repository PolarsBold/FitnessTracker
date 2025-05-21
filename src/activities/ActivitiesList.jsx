import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";

export default function ActivitiesList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "allActivities");

  console.log(activities);
  if (loading || !activities) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem activity={activity} key={activity.id} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  const { token } = useAuth();

  const { mutate, loading, error } = useMutation(
    "DELETE",
    `/activities/${activity.id}`,
    ["allActivities"]
  );

  const handleDelete = () => {
    mutate();
  };

  return (
    <li>
      <p>{activity.name}</p>
      {token && (
        <button onClick={handleDelete} disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </button>
      )}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </li>
  );
}
