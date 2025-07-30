import { Spinner } from "../../../../../../components/Spinner";

export function Loading() {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <Spinner />
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>Conectando...</p>
    </div>
  );
}
